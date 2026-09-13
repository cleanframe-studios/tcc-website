"use client";

import { useState } from 'react';
import { Calculator as CalcIcon, Coins, ShieldCheck } from 'lucide-react';

type CalculatorMode = 'individual' | 'vat' | 'company';
type NumericInput = number | '';

const legalParameters = {
  taxYear: 2026,
  effectiveFrom: '2026-01-01',
  sourceReference: 'Nigeria Tax Act 2025, Fourth Schedule; JTB 2026 PIT Guidelines',
  minimumWageMonthly: 70000,
  rentReliefRate: 0.2,
  rentReliefCap: 500000,
  vatRate: 0.075,
  pitBands: [
    { limit: 800000, rate: 0 },
    { limit: 2200000, rate: 0.15 },
    { limit: 9000000, rate: 0.18 },
    { limit: 13000000, rate: 0.21 },
    { limit: 25000000, rate: 0.23 },
    { limit: Infinity, rate: 0.25 }
  ]
};

const formatNaira = (amount: number) =>
  new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(Math.max(0, amount));

const toNumber = (value: NumericInput) => typeof value === 'number' ? value : 0;
const formatInputValue = (value: NumericInput) => value === '' ? '' : value.toLocaleString('en-NG');

const calculateProgressiveTax = (chargeableIncome: number) => {
  let remaining = Math.max(0, chargeableIncome);
  let tax = 0;
  for (const band of legalParameters.pitBands) {
    const taxableInBand = Math.min(remaining, band.limit);
    tax += taxableInBand * band.rate;
    remaining -= taxableInBand;
    if (remaining <= 0) break;
  }
  return tax;
};

function MoneyInput({ label, value, onChange }: { label: string; value: NumericInput; onChange: (value: NumericInput) => void }) {
  return (
    <label className="block">
      <span className="block text-xs font-bold uppercase tracking-wider text-blue-200 mb-2">{label}</span>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 font-bold">N</span>
        <input
          type="text"
          inputMode="decimal"
          value={formatInputValue(value)}
          onChange={(event) => {
            const rawValue = event.target.value.replace(/,/g, '');
            onChange(rawValue === '' ? '' : Math.max(0, Number(rawValue) || 0));
          }}
          className="w-full pl-10 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-white font-bold focus:outline-none focus:border-amber-400 transition-colors"
        />
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
  const [individual, setIndividual] = useState({
    basicSalary: 300000,
    housingAllowance: 100000,
    transportAllowance: 50000,
    otherAllowances: 0,
    bonus: 0,
    commission: 0,
    otherEmploymentIncome: 0,
    annualRent: 0,
    pension: 360000,
    nhf: 0,
    nhis: 0,
    mortgageInterest: 0,
    lifeInsurance: 0
  });
  const [vat, setVat] = useState<{ amount: NumericInput; inputVat: NumericInput; pricing: string; supply: string }>({ amount: 1000000, inputVat: 0, pricing: 'exclusive', supply: 'taxable' });
  const [company, setCompany] = useState<{ turnover: NumericInput; profit: NumericInput; fixedAssets: NumericInput }>({ turnover: 10000000, profit: 3000000, fixedAssets: 50000000 });

  const updateIndividual = (field: keyof typeof individual, value: NumericInput) => setIndividual((current) => ({ ...current, [field]: value }));
  const monthlyEmploymentIncome = toNumber(individual.basicSalary) + toNumber(individual.housingAllowance) + toNumber(individual.transportAllowance) + toNumber(individual.otherAllowances) + toNumber(individual.bonus) + toNumber(individual.commission) + toNumber(individual.otherEmploymentIncome);
  const annualEmploymentIncome = monthlyEmploymentIncome * 12;
  const annualIncome = annualEmploymentIncome;
  const rentRelief = Math.min(toNumber(individual.annualRent) * legalParameters.rentReliefRate, legalParameters.rentReliefCap);
  const eligibleDeductions = toNumber(individual.pension) + toNumber(individual.nhf) + toNumber(individual.nhis) + toNumber(individual.mortgageInterest) + toNumber(individual.lifeInsurance) + rentRelief;
  const chargeableIncome = Math.max(0, annualIncome - eligibleDeductions);
  const minimumWageExemptionApplies = monthlyEmploymentIncome <= legalParameters.minimumWageMonthly;
  const individualTax = minimumWageExemptionApplies ? 0 : calculateProgressiveTax(chargeableIncome);
  const monthlyPAYE = individualTax / 12;
  const netAnnualIncome = annualIncome - individualTax - toNumber(individual.pension) - toNumber(individual.nhf) - toNumber(individual.nhis);

  const isTaxableSupply = vat.supply === 'taxable';
  const vatAmount = !isTaxableSupply ? 0 : vat.pricing === 'inclusive' ? toNumber(vat.amount) * legalParameters.vatRate / (1 + legalParameters.vatRate) : toNumber(vat.amount) * legalParameters.vatRate;
  const taxableValue = !isTaxableSupply ? toNumber(vat.amount) : vat.pricing === 'inclusive' ? toNumber(vat.amount) - vatAmount : toNumber(vat.amount);
  const vatPayable = Math.max(0, vatAmount - toNumber(vat.inputVat));
  const isSmallCompany = toNumber(company.turnover) <= 100000000 && toNumber(company.fixedAssets) <= 250000000;
  const cit = isSmallCompany ? 0 : toNumber(company.profit) * 0.3;
  const developmentLevy = isSmallCompany ? 0 : toNumber(company.profit) * 0.04;

  return (
    <main className="min-h-screen bg-transparent">
      <section className="tcc-canvas pt-32 pb-16 px-6 border-b border-slate-200/60"><div className="max-w-4xl mx-auto text-center"><span className="text-blue-700 font-bold tracking-[0.2em] uppercase text-xs mb-4 block animate-fade-in-up">Interactive Fiscal Tool</span><h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 animate-fade-in-up animation-delay-200 opacity-0 [animation-fill-mode:forwards]">Nigeria Tax Calculator.</h1><p className="text-slate-600 max-w-xl mx-auto text-base leading-relaxed animate-fade-in-up animation-delay-400 opacity-0 [animation-fill-mode:forwards]">Estimate {legalParameters.taxYear} personal income tax, VAT, and company tax obligations using the Nigeria Tax Act 2025 framework.</p></div></section>
      <section className="py-20 px-6 bg-linear-to-br from-blue-950 via-blue-900 to-slate-900 animate-moving-gradient text-white"><div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-2 mb-8 rounded-2xl border border-white/15 bg-white/10">{([['individual', 'Individual / PAYE'], ['vat', 'VAT'], ['company', 'Company tax']] as const).map(([value, label]) => <button key={value} onClick={() => setMode(value)} className={`px-4 py-3 rounded-xl text-sm font-bold transition-colors ${mode === value ? 'bg-amber-400 text-blue-950' : 'text-blue-100 hover:bg-white/10'}`}>{label}</button>)}</div>
        <p className="mb-6 text-center text-xs text-blue-200/70">All amounts are in Nigerian naira (N); commas are added for readability.</p>

        {mode === 'individual' && <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"><div className="md:col-span-7 p-8 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl"><h2 className="text-xl font-extrabold mb-6 flex items-center gap-2"><CalcIcon className="w-5 h-5 text-amber-400" /> Individual / PAYE inputs</h2><p className="mb-5 text-xs leading-relaxed text-blue-200/70">Enter monthly taxable employment amounts. Pension, NHF, NHIS, mortgage interest, life insurance and rent are annual amounts.</p><div className="grid grid-cols-1 sm:grid-cols-2 gap-5"><MoneyInput label="Basic salary (monthly)" value={individual.basicSalary} onChange={(value) => updateIndividual('basicSalary', value)} /><MoneyInput label="Housing allowance (monthly)" value={individual.housingAllowance} onChange={(value) => updateIndividual('housingAllowance', value)} /><MoneyInput label="Transport allowance (monthly)" value={individual.transportAllowance} onChange={(value) => updateIndividual('transportAllowance', value)} /><MoneyInput label="Other allowances (monthly)" value={individual.otherAllowances} onChange={(value) => updateIndividual('otherAllowances', value)} /><MoneyInput label="Bonus (monthly equivalent)" value={individual.bonus} onChange={(value) => updateIndividual('bonus', value)} /><MoneyInput label="Commission (monthly equivalent)" value={individual.commission} onChange={(value) => updateIndividual('commission', value)} /><MoneyInput label="Other employment income (monthly)" value={individual.otherEmploymentIncome} onChange={(value) => updateIndividual('otherEmploymentIncome', value)} /><MoneyInput label="Qualifying annual rent paid" value={individual.annualRent} onChange={(value) => updateIndividual('annualRent', value)} /><MoneyInput label="Annual pension contribution" value={individual.pension} onChange={(value) => updateIndividual('pension', value)} /><MoneyInput label="Annual NHF contribution" value={individual.nhf} onChange={(value) => updateIndividual('nhf', value)} /><MoneyInput label="Annual NHIS contribution" value={individual.nhis} onChange={(value) => updateIndividual('nhis', value)} /><MoneyInput label="Annual mortgage interest" value={individual.mortgageInterest} onChange={(value) => updateIndividual('mortgageInterest', value)} /><MoneyInput label="Annual life insurance / annuity" value={individual.lifeInsurance} onChange={(value) => updateIndividual('lifeInsurance', value)} /></div><div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 text-xs text-blue-100"><ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" /><p>For {legalParameters.taxYear}, the configurable minimum-wage threshold is {formatNaira(legalParameters.minimumWageMonthly)} monthly. Rent relief is {legalParameters.rentReliefRate * 100}% of qualifying annual rent, capped at {formatNaira(legalParameters.rentReliefCap)}.</p></div></div><ResultPanel title="Personal tax estimate"><ResultRow label="Annual taxable employment income" value={formatNaira(annualIncome)} /><ResultRow label="Eligible deductions" value={formatNaira(eligibleDeductions)} /><ResultRow label="Chargeable income" value={formatNaira(chargeableIncome)} /><ResultRow label="Annual PIT" value={formatNaira(individualTax)} /><ResultRow label="Estimated monthly PAYE" value={formatNaira(monthlyPAYE)} /><ResultRow label="Estimated net annual income" value={formatNaira(netAnnualIncome)} highlight /></ResultPanel></div>}

        {mode === 'vat' && <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"><div className="md:col-span-7 p-8 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl"><h2 className="text-xl font-extrabold mb-6 flex items-center gap-2"><CalcIcon className="w-5 h-5 text-amber-400" /> VAT inputs</h2><div className="space-y-5"><MoneyInput label="Transaction amount" value={vat.amount} onChange={(value) => setVat((current) => ({ ...current, amount: value }))} /><MoneyInput label="Allowable input VAT" value={vat.inputVat} onChange={(value) => setVat((current) => ({ ...current, inputVat: value }))} /><SelectInput label="Price display" value={vat.pricing} options={[['exclusive', 'Amount before VAT'], ['inclusive', 'Amount already includes VAT']]} onChange={(value) => setVat((current) => ({ ...current, pricing: value }))} /><SelectInput label="Supply category" value={vat.supply} options={[['taxable', 'Taxable supply'], ['zero-rated', 'Zero-rated supply'], ['exempt', 'Exempt supply']]} onChange={(value) => setVat((current) => ({ ...current, supply: value }))} /></div></div><ResultPanel title="VAT estimate"><ResultRow label="Taxable value" value={formatNaira(taxableValue)} /><ResultRow label="Output VAT (7.5%)" value={formatNaira(vatAmount)} /><ResultRow label="Input VAT credit" value={formatNaira(toNumber(vat.inputVat))} /><ResultRow label="VAT payable" value={formatNaira(vatPayable)} highlight /></ResultPanel></div>}

        {mode === 'company' && <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"><div className="md:col-span-7 p-8 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl"><h2 className="text-xl font-extrabold mb-6 flex items-center gap-2"><CalcIcon className="w-5 h-5 text-amber-400" /> Company tax inputs</h2><div className="space-y-5"><MoneyInput label="Annual gross turnover" value={company.turnover} onChange={(value) => setCompany((current) => ({ ...current, turnover: value }))} /><MoneyInput label="Assessable / chargeable profit" value={company.profit} onChange={(value) => setCompany((current) => ({ ...current, profit: value }))} /><MoneyInput label="Total fixed assets" value={company.fixedAssets} onChange={(value) => setCompany((current) => ({ ...current, fixedAssets: value }))} /></div><div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-blue-100">Small company threshold: turnover up to N100,000,000 and fixed assets up to N250,000,000.</div></div><ResultPanel title="Company tax estimate"><ResultRow label="Company category" value={isSmallCompany ? 'Small company' : 'Other company'} /><ResultRow label="CIT" value={formatNaira(cit)} /><ResultRow label="Development levy (4%)" value={formatNaira(developmentLevy)} /><ResultRow label="Total estimated tax" value={formatNaira(cit + developmentLevy)} highlight /></ResultPanel></div>}
      </div></section>
    </main>
  );
}
