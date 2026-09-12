"use client";

import { useState } from 'react';
import { Calculator as CalcIcon, Coins, ShieldCheck } from 'lucide-react';

type CalculatorMode = 'individual' | 'vat' | 'company';

const formatNaira = (amount: number) =>
  new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(Math.max(0, amount));

const toNumber = (value: string) => Math.max(0, Number(value) || 0);

const calculateProgressiveTax = (chargeableIncome: number) => {
  const bands = [
    { limit: 800000, rate: 0 },
    { limit: 2200000, rate: 0.15 },
    { limit: 9000000, rate: 0.18 },
    { limit: 13000000, rate: 0.21 },
    { limit: 25000000, rate: 0.23 },
    { limit: Infinity, rate: 0.25 }
  ];
  let remaining = Math.max(0, chargeableIncome);
  let tax = 0;
  for (const band of bands) {
    const taxableInBand = Math.min(remaining, band.limit);
    tax += taxableInBand * band.rate;
    remaining -= taxableInBand;
    if (remaining <= 0) break;
  }
  return tax;
};

function MoneyInput({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) {
  return (
    <label className="block">
      <span className="block text-xs font-bold uppercase tracking-wider text-blue-200 mb-2">{label}</span>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 font-bold">N</span>
        <input type="number" min="0" value={value} onChange={(event) => onChange(toNumber(event.target.value))} className="w-full pl-10 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-white font-bold focus:outline-none focus:border-amber-400 transition-colors [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" />
      </div>
    </label>
  );
}

function ResultPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="md:col-span-5 p-8 rounded-3xl border border-amber-400/30 bg-white/15 backdrop-blur-md shadow-2xl"><h2 className="text-xl font-extrabold mb-6 text-amber-300 flex items-center gap-2"><Coins className="w-5 h-5" /> {title}</h2><div className="space-y-4">{children}</div></div>;
}

function ResultRow({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return <div className="flex justify-between items-center gap-4 pb-3 border-b border-white/10"><span className="text-sm text-blue-200">{label}</span><span className={`text-right font-extrabold ${highlight ? 'text-amber-300 text-lg' : 'text-white'}`}>{value}</span></div>;
}

function SelectInput({ label, value, options, onChange }: { label: string; value: string; options: readonly (readonly [string, string])[]; onChange: (value: string) => void }) {
  return <label className="block"><span className="block text-xs font-bold uppercase tracking-wider text-blue-200 mb-2">{label}</span><select value={value} onChange={(event) => onChange(event.target.value)} className="w-full px-4 py-3.5 bg-blue-950 border border-white/20 rounded-2xl text-white font-bold focus:outline-none focus:border-amber-400">{options.map(([optionValue, optionLabel]) => <option key={optionValue} value={optionValue}>{optionLabel}</option>)}</select></label>;
}

export default function Calculator() {
  const [mode, setMode] = useState<CalculatorMode>('individual');
  const [individual, setIndividual] = useState({ monthlyIncome: 500000, annualRent: 0, pension: 360000, nhf: 0, nhis: 0, mortgageInterest: 0, lifeInsurance: 0 });
  const [vat, setVat] = useState({ amount: 1000000, inputVat: 0, pricing: 'exclusive', supply: 'taxable' });
  const [company, setCompany] = useState({ turnover: 10000000, profit: 3000000, fixedAssets: 50000000 });

  const updateIndividual = (field: keyof typeof individual, value: number) => setIndividual((current) => ({ ...current, [field]: value }));
  const annualIncome = individual.monthlyIncome * 12;
  const rentRelief = Math.min(individual.annualRent * 0.2, 500000);
  const eligibleDeductions = individual.pension + individual.nhf + individual.nhis + individual.mortgageInterest + individual.lifeInsurance + rentRelief;
  const chargeableIncome = Math.max(0, annualIncome - eligibleDeductions);
  const individualTax = individual.monthlyIncome <= 70000 ? 0 : calculateProgressiveTax(chargeableIncome);
  const monthlyPAYE = individualTax / 12;
  const netAnnualIncome = annualIncome - individualTax - individual.pension - individual.nhf - individual.nhis;

  const isTaxableSupply = vat.supply === 'taxable';
  const vatAmount = !isTaxableSupply ? 0 : vat.pricing === 'inclusive' ? vat.amount * 7.5 / 107.5 : vat.amount * 0.075;
  const taxableValue = !isTaxableSupply ? vat.amount : vat.pricing === 'inclusive' ? vat.amount - vatAmount : vat.amount;
  const vatPayable = Math.max(0, vatAmount - vat.inputVat);
  const isSmallCompany = company.turnover <= 100000000 && company.fixedAssets <= 250000000;
  const cit = isSmallCompany ? 0 : company.profit * 0.3;
  const developmentLevy = isSmallCompany ? 0 : company.profit * 0.04;

  return (
    <main className="min-h-screen bg-transparent">
      <section className="tcc-canvas pt-32 pb-16 px-6 border-b border-slate-200/60"><div className="max-w-4xl mx-auto text-center"><span className="text-blue-700 font-bold tracking-[0.2em] uppercase text-xs mb-4 block animate-fade-in-up">Interactive Fiscal Tool</span><h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 animate-fade-in-up animation-delay-200 opacity-0 [animation-fill-mode:forwards]">Nigeria Tax Calculator.</h1><p className="text-slate-600 max-w-xl mx-auto text-base leading-relaxed animate-fade-in-up animation-delay-400 opacity-0 [animation-fill-mode:forwards]">Estimate 2026 personal income tax, VAT, and company tax obligations using the Nigeria Tax Act 2025 framework.</p></div></section>
      <section className="py-20 px-6 bg-linear-to-br from-blue-950 via-blue-900 to-slate-900 animate-moving-gradient text-white"><div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-2 mb-8 rounded-2xl border border-white/15 bg-white/10">{([['individual', 'Individual / PAYE'], ['vat', 'VAT'], ['company', 'Company tax']] as const).map(([value, label]) => <button key={value} onClick={() => setMode(value)} className={`px-4 py-3 rounded-xl text-sm font-bold transition-colors ${mode === value ? 'bg-amber-400 text-blue-950' : 'text-blue-100 hover:bg-white/10'}`}>{label}</button>)}</div>

        {mode === 'individual' && <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"><div className="md:col-span-7 p-8 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl"><h2 className="text-xl font-extrabold mb-6 flex items-center gap-2"><CalcIcon className="w-5 h-5 text-amber-400" /> Individual / PAYE inputs</h2><div className="grid grid-cols-1 sm:grid-cols-2 gap-5"><MoneyInput label="Monthly employment income" value={individual.monthlyIncome} onChange={(value) => updateIndividual('monthlyIncome', value)} /><MoneyInput label="Annual rent paid" value={individual.annualRent} onChange={(value) => updateIndividual('annualRent', value)} /><MoneyInput label="Annual pension contribution" value={individual.pension} onChange={(value) => updateIndividual('pension', value)} /><MoneyInput label="NHF contribution" value={individual.nhf} onChange={(value) => updateIndividual('nhf', value)} /><MoneyInput label="NHIS contribution" value={individual.nhis} onChange={(value) => updateIndividual('nhis', value)} /><MoneyInput label="Qualifying mortgage interest" value={individual.mortgageInterest} onChange={(value) => updateIndividual('mortgageInterest', value)} /><MoneyInput label="Life insurance / annuity" value={individual.lifeInsurance} onChange={(value) => updateIndividual('lifeInsurance', value)} /></div><div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 text-xs text-blue-100"><ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" /><p>Rent relief is capped at N500,000. Monthly employment income of N70,000 or less is exempt from PAYE.</p></div></div><ResultPanel title="Personal tax estimate"><ResultRow label="Eligible deductions" value={formatNaira(eligibleDeductions)} /><ResultRow label="Chargeable income" value={formatNaira(chargeableIncome)} /><ResultRow label="Annual PIT" value={formatNaira(individualTax)} /><ResultRow label="Estimated monthly PAYE" value={formatNaira(monthlyPAYE)} /><ResultRow label="Estimated net annual income" value={formatNaira(netAnnualIncome)} highlight /></ResultPanel></div>}

        {mode === 'vat' && <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"><div className="md:col-span-7 p-8 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl"><h2 className="text-xl font-extrabold mb-6 flex items-center gap-2"><CalcIcon className="w-5 h-5 text-amber-400" /> VAT inputs</h2><div className="space-y-5"><MoneyInput label="Transaction amount" value={vat.amount} onChange={(value) => setVat((current) => ({ ...current, amount: value }))} /><MoneyInput label="Allowable input VAT" value={vat.inputVat} onChange={(value) => setVat((current) => ({ ...current, inputVat: value }))} /><SelectInput label="Price display" value={vat.pricing} options={[['exclusive', 'Amount before VAT'], ['inclusive', 'Amount already includes VAT']]} onChange={(value) => setVat((current) => ({ ...current, pricing: value }))} /><SelectInput label="Supply category" value={vat.supply} options={[['taxable', 'Taxable supply'], ['zero-rated', 'Zero-rated supply'], ['exempt', 'Exempt supply']]} onChange={(value) => setVat((current) => ({ ...current, supply: value }))} /></div></div><ResultPanel title="VAT estimate"><ResultRow label="Taxable value" value={formatNaira(taxableValue)} /><ResultRow label="Output VAT (7.5%)" value={formatNaira(vatAmount)} /><ResultRow label="Input VAT credit" value={formatNaira(vat.inputVat)} /><ResultRow label="VAT payable" value={formatNaira(vatPayable)} highlight /></ResultPanel></div>}

        {mode === 'company' && <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"><div className="md:col-span-7 p-8 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl"><h2 className="text-xl font-extrabold mb-6 flex items-center gap-2"><CalcIcon className="w-5 h-5 text-amber-400" /> Company tax inputs</h2><div className="space-y-5"><MoneyInput label="Annual gross turnover" value={company.turnover} onChange={(value) => setCompany((current) => ({ ...current, turnover: value }))} /><MoneyInput label="Assessable / chargeable profit" value={company.profit} onChange={(value) => setCompany((current) => ({ ...current, profit: value }))} /><MoneyInput label="Total fixed assets" value={company.fixedAssets} onChange={(value) => setCompany((current) => ({ ...current, fixedAssets: value }))} /></div><div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-blue-100">Small company threshold: turnover up to N100,000,000 and fixed assets up to N250,000,000.</div></div><ResultPanel title="Company tax estimate"><ResultRow label="Company category" value={isSmallCompany ? 'Small company' : 'Other company'} /><ResultRow label="CIT" value={formatNaira(cit)} /><ResultRow label="Development levy (4%)" value={formatNaira(developmentLevy)} /><ResultRow label="Total estimated tax" value={formatNaira(cit + developmentLevy)} highlight /></ResultPanel></div>}
      </div></section>
    </main>
  );
}
