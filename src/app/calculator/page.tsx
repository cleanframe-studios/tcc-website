"use client";

import { useState } from 'react';
import { Calculator as CalcIcon, Coins, ShieldCheck, Plus, Minus } from 'lucide-react';

export default function Calculator() {
  const [grossIncome, setGrossIncome] = useState<number>(5000000);
  const [pensionPercent, setPensionPercent] = useState<number>(8);

  const handlePensionChange = (delta: number) => {
    setPensionPercent(prev => Math.min(100, Math.max(0, prev + delta)));
  };

  // Nigerian Tax Calculation Logic
  const annualPension = (grossIncome * pensionPercent) / 100;
  const cra = Math.max(grossIncome * 0.01, 200000) + (grossIncome * 0.20);
  const totalReliefs = annualPension + cra;
  const taxableIncome = Math.max(0, grossIncome - totalReliefs);

  const calculateTax = (income: number) => {
    let tax = 0;
    let remaining = income;

    const band1 = Math.min(remaining, 300000);
    tax += band1 * 0.07;
    remaining -= band1;
    if (remaining <= 0) return tax;

    const band2 = Math.min(remaining, 300000);
    tax += band2 * 0.11;
    remaining -= band2;
    if (remaining <= 0) return tax;

    const band3 = Math.min(remaining, 500000);
    tax += band3 * 0.15;
    remaining -= band3;
    if (remaining <= 0) return tax;

    const band4 = Math.min(remaining, 500000);
    tax += band4 * 0.19;
    remaining -= band4;
    if (remaining <= 0) return tax;

    const band5 = Math.min(remaining, 1600000);
    tax += band5 * 0.21;
    remaining -= band5;
    if (remaining <= 0) return tax;

    tax += remaining * 0.24;
    return tax;
  };

  const annualTax = calculateTax(taxableIncome);
  const monthlyTax = annualTax / 12;
  const netAnnualIncome = grossIncome - annualTax - annualPension;
  const netMonthlyIncome = netAnnualIncome / 12;

  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <main className="min-h-screen bg-transparent">
      
      {/* HEADER */}
      <section className="tcc-canvas pt-32 pb-16 px-6 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-blue-700 font-bold tracking-[0.2em] uppercase text-xs mb-4 block animate-fade-in-up">
            Interactive Fiscal Tool
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 animate-fade-in-up animation-delay-200 opacity-0 [animation-fill-mode:forwards]">
            Nigerian Personal Income <br/> Tax Calculator.
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-base leading-relaxed animate-fade-in-up animation-delay-400 opacity-0 [animation-fill-mode:forwards]">
            Estimate your annual and monthly tax obligations instantly based on current statutory relief schedules and progressive tax bands.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="py-20 px-6 bg-linear-to-br from-blue-950 via-blue-900 to-slate-900 animate-moving-gradient text-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* INPUT CONTROLS */}
          <div className="md:col-span-6 p-8 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl">
            <h2 className="text-xl font-extrabold mb-6 flex items-center gap-2 text-white">
              <CalcIcon className="w-5 h-5 text-amber-400" /> Income Parameters
            </h2>

            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-blue-200 mb-2">
                Gross Annual Income (₦)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 font-bold">₦</span>
                <input 
                  type="number"
                  value={grossIncome}
                  onChange={(e) => setGrossIncome(Number(e.target.value))}
                  className="w-full pl-10 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-white font-bold text-lg focus:outline-none focus:border-amber-400 transition-colors [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-blue-200">
                  Pension Contribution (%)
                </label>
                <div className="flex gap-1">
                  <button 
                    onClick={() => handlePensionChange(-1)}
                    className="p-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-bold text-white transition-all active:scale-95 cursor-pointer"
                    title="Decrease 1%"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <button 
                    onClick={() => handlePensionChange(1)}
                    className="p-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-bold text-white transition-all active:scale-95 cursor-pointer"
                    title="Increase 1%"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <input 
                type="number"
                value={pensionPercent}
                onChange={(e) => setPensionPercent(Number(e.target.value))}
                className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-white font-bold text-lg focus:outline-none focus:border-amber-400 transition-colors [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 text-xs text-blue-100">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p>Calculations incorporate statutory Consolidated Relief Allowance (CRA) and progressive tax brackets in compliance with Nigerian tax regulations.</p>
            </div>
          </div>

          {/* RESULTS DISPLAY */}
          <div className="md:col-span-6 p-8 rounded-3xl border border-amber-400/30 bg-white/15 backdrop-blur-md shadow-2xl flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-extrabold mb-6 text-amber-300 flex items-center gap-2">
                <Coins className="w-5 h-5" /> Tax Breakdown Summary
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-sm text-blue-200">Annual Tax Due:</span>
                  <span className="text-lg font-extrabold text-white">{formatNaira(annualTax)}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-sm text-blue-200">Estimated Monthly Tax:</span>
                  <span className="text-lg font-extrabold text-white">{formatNaira(monthlyTax)}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-sm text-blue-200">Annual Pension Deduction:</span>
                  <span className="text-base font-bold text-blue-100">{formatNaira(annualPension)}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-sm text-blue-200">Net Annual Take-Home:</span>
                  <span className="text-xl font-extrabold text-amber-300">{formatNaira(netAnnualIncome)}</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-900/60 border border-blue-400/30 text-center">
              <p className="text-xs text-blue-200 mb-1">Net Monthly Take-Home Pay</p>
              <div className="text-2xl font-black text-white">{formatNaira(netMonthlyIncome)}</div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}