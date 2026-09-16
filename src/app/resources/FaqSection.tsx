"use client";

import { useState } from 'react';
import { ChevronDown, ExternalLink, HelpCircle, MessageCircle } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

type FaqCategory = {
  label: string;
  title: string;
  items: FaqItem[];
};

const faqCategories: FaqCategory[] = [
  {
    label: '01 / What changed?',
    title: 'Understanding the new tax regime',
    items: [
      {
        question: 'What are the new tax laws in Nigeria?',
        answer: <>The 2025 tax reform consists principally of four Acts: the Nigeria Tax Act, Nigeria Tax Administration Act, Nigeria Revenue Service (Establishment) Act, and Joint Revenue Board of Nigeria (Establishment) Act. Together, they consolidate substantial parts of the previous framework and restructure tax administration.</>
      },
      {
        question: 'When did the new tax laws take effect?',
        answer: <>The Nigeria Tax Act 2025 generally commenced on 1 January 2026. The Federal Government&apos;s transition guidance confirms that the Tax Acts apply from their respective commencement dates.</>
      },
      {
        question: 'Does the new tax law apply retroactively?',
        answer: <>Generally, no. Pre-2026 liabilities, assessments, audits, investigations, disputes and enforcement actions are handled under the repealed framework. Periods beginning under the new regime are administered under the new Acts.</>
      },
      {
        question: 'Is every Nigerian automatically required to pay tax?',
        answer: <>Not necessarily. Registration and compliance obligations are different from owing a particular tax. The law provides specific exemptions, thresholds, reliefs and zero-rate provisions, so your actual liability depends on your circumstances.</>
      }
    ]
  },
  {
    label: '02 / Does this apply to me?',
    title: 'Individuals, workers and residence',
    items: [
      {
        question: 'What personal income tax rates apply from 2026?',
        answer: <>Individual tax is progressive: the first N800,000 is taxed at 0%, followed by bands at 15%, 18%, 21%, 23% and 25% as chargeable income increases. The highest rate is not applied to all income simply because someone reaches that band.</>
      },
      {
        question: 'What is the new rent relief?',
        answer: <>Rent relief is 20% of qualifying annual rent paid, capped at N500,000. It is a tax relief used in the chargeable-income calculation, not a cash payment made to every tenant.</>
      },
      {
        question: 'Do freelancers, influencers, creators and online workers fall under the new tax regime?',
        answer: <>Potentially, yes. The relevant questions are whether the person earns taxable income, where that income arises, and the person&apos;s residence and other applicable circumstances. The framework is not limited to conventional office employees.</>
      },
      {
        question: 'What makes someone a Nigerian tax resident?',
        answer: <>Residence can depend on factors including domicile, a permanent home, habitual abode, substantial economic and immediate family ties, or being in Nigeria for an aggregate of at least 183 days in a 12-month period. It is broader than counting travel days alone.</>
      },
      {
        question: 'If I live abroad, can Nigeria still tax me?',
        answer: <>Potentially, yes. Residence, the source of income and the nature of the income all matter. Living outside Nigeria does not automatically remove every Nigerian tax obligation.</>
      }
    ]
  },
  {
    label: '03 / How much tax?',
    title: 'VAT, companies and gains',
    items: [
      {
        question: 'Did the VAT rate become 10% under the new law?',
        answer: <>No. The standard VAT rate under the Nigeria Tax Act 2025 remains 7.5%.</>
      },
      {
        question: 'What is the difference between VAT-exempt and zero-rated?',
        answer: <>A zero-rated supply is still within the VAT system but carries a 0% rate. An exempt supply is excluded from VAT under the exemption rules. The two categories have different legal and input-credit consequences.</>
      },
      {
        question: 'Is company tax calculated on turnover?',
        answer: <>Generally, company income tax is based on taxable or chargeable profit, not simply gross turnover. Turnover can still matter when determining eligibility for particular statutory treatments.</>
      },
      {
        question: 'What is the 4% Development Levy?',
        answer: <>It is a separate levy on assessable profits of companies chargeable under the relevant provisions. Small companies and non-resident companies are excluded, so it should not simply be described as a universal 34% company tax.</>
      },
      {
        question: 'Can gains from shares or other assets be taxable?',
        answer: <>Potentially, yes. Individuals and companies are treated differently, and the applicable rates, exemptions and reliefs depend on the asset and transaction. Not every gain is automatically taxed in the same way.</>
      }
    ]
  },
  {
    label: '04 / What do I have to do?',
    title: 'Tax ID, filing and compliance',
    items: [
      {
        question: 'What is a Tax ID and how do I retrieve it?',
        answer: <>A Tax ID is the taxpayer identifier used for tax administration. Taxpayers can use the official national portal to retrieve or verify their details: <a href="https://taxid.nrs.gov.ng/" target="_blank" rel="noopener noreferrer" className="font-bold text-amber-300 underline decoration-amber-300/50 underline-offset-4 hover:text-white">taxid.nrs.gov.ng</a>.</>
      },
      {
        question: 'Does every taxable person have to file a return even if no tax is payable?',
        answer: <>The Nigeria Tax Administration Act requires every taxable person to file an income-tax return annually, whether or not tax is ultimately payable. The practical deadline depends on the taxpayer and return involved.</>
      },
      {
        question: 'When are individual annual income-tax returns due?',
        answer: <>The 2026 JRB guidance places the individual annual return deadline at 31 March of the relevant year of assessment.</>
      },
      {
        question: 'When is a VAT return due?',
        answer: <>A VAT return is generally due on or before the 21st day of the following month, subject to the applicable small-business exemption rules.</>
      },
      {
        question: 'What happens if I fail to file or register?',
        answer: <>The administration law provides monthly penalties for failure to file returns and separate penalties for failure to register. The amount can increase for each subsequent month of default, so it is better to regularise early and seek professional guidance.</>
      },
      {
        question: 'Does e-invoicing mean every business must build its own software?',
        answer: <>No. The NRS provides integration options and compliant solution providers. Existing accounting software may be able to integrate through approved access-point providers, subject to the required technical standards.</>
      }
    ]
  },
  {
    label: '05 / What is misinformation?',
    title: 'Common misconceptions',
    items: [
      {
        question: 'Will every Nigerian now pay 30% tax?',
        answer: <>False. Individual taxation uses progressive personal-income-tax bands. The 30% rate is associated with the ordinary company-income-tax regime, not a universal personal tax rate.</>
      },
      {
        question: 'Will the government tax every N100,000 entering my bank account?',
        answer: <>False. A transfer is not automatically taxable income simply because it enters a bank account. The nature and source of the receipt matter, such as salary, business income, a loan, reimbursement, gift or transfer between your own accounts.</>
      },
      {
        question: 'Does every bank transfer now have 7.5% VAT?',
        answer: <>False. Where VAT applies to a banking service, it concerns the relevant service fee, not the principal money transferred. A transfer of N100,000 is not itself a 7.5% VAT charge.</>
      },
      {
        question: 'Is N50 million the universal definition of a small business?',
        answer: <>False. Thresholds differ depending on the statutory provision. The relevant VAT and administration threshold should not be combined with company-tax tests into one universal SME threshold.</>
      },
      {
        question: 'Is FIRS still the federal tax authority?',
        answer: <>The federal tax administration structure has changed. The Nigeria Revenue Service was established under the 2025 framework, replacing the former FIRS statutory structure. Old records and pre-2026 obligations are not automatically invalidated by the transition.</>
      }
    ]
  },
  {
    label: '06 / What are my rights?',
    title: 'Disputes and the Tax Ombud',
    items: [
      {
        question: 'What is the Tax Ombud?',
        answer: <>The Tax Ombud is an independent institution established to deal with complaints about tax administration and maladministration, including delays, unreasonable enforcement and failures to respond.</>
      },
      {
        question: 'Can the Tax Ombud cancel or reduce my tax assessment?',
        answer: <>No. The Ombud cannot overturn a tax assessment. Its role focuses on administrative fairness, complaints and maladministration within its mandate.</>
      },
      {
        question: 'Is the Tax Ombud&apos;s service free?',
        answer: <>Yes. The Ombud&apos;s complaint-resolution services are stated to be free. Taxpayers should generally first raise the matter with the relevant tax or revenue authority.</>
      }
    ]
  }
];

export default function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState('');

  return (
    <section className="border-t border-slate-200 bg-slate-50 px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-3xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Tax clarity, one question at a time</span>
          <h2 className="mb-5 flex items-center gap-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            <HelpCircle className="h-8 w-8 shrink-0 text-amber-500" />
            Frequently Asked Questions
          </h2>
          <p className="leading-relaxed text-slate-600">
            Clear, public-facing answers to common questions about Nigeria&apos;s 2025 tax Acts and the 2026 transition. Select a question to read the answer.
          </p>
        </div>

        <div className="space-y-10">
          {faqCategories.map((category) => (
            <div key={category.label}>
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">{category.label}</span>
                  <h3 className="mt-1 text-xl font-extrabold text-slate-900">{category.title}</h3>
                </div>
                <span className="text-xs font-semibold text-slate-400">{category.items.length} questions</span>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                {category.items.map((item) => {
                  const questionId = `${category.label}-${item.question}`;
                  const isOpen = openQuestion === questionId;
                  return (
                    <div key={item.question} className="border-b border-slate-200 last:border-b-0">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`${questionId}-answer`}
                        onClick={() => setOpenQuestion(isOpen ? '' : questionId)}
                        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition-colors hover:bg-blue-50/60 sm:px-6"
                      >
                        <span className="font-bold leading-relaxed text-slate-900">{item.question}</span>
                        <ChevronDown className={`h-5 w-5 shrink-0 text-blue-700 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div id={`${questionId}-answer`} className="px-5 pb-6 text-sm leading-7 text-slate-600 sm:px-6">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl bg-linear-to-br from-blue-950 via-blue-900 to-slate-900 p-8 text-center text-white shadow-xl sm:p-12">
          <MessageCircle className="mx-auto mb-5 h-10 w-10 text-amber-400" />
          <h3 className="mb-4 text-2xl font-extrabold sm:text-3xl">Still have a personal tax question?</h3>
          <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-blue-100">
            General information cannot replace advice about your specific income, records or filing position. Join the TCC community to ask questions, learn with other taxpayers and connect with professionals.
          </p>
          <a
            href="https://forms.gle/gVJT1HFsKJQW8dtc6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-blue-900 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-50"
          >
            Join the TCC Community
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-8 text-center text-xs leading-relaxed text-slate-400">
          Educational information only. Tax treatment depends on the facts and applicable law. Consult the official Acts, NRS, JRB or a qualified tax professional for advice on your specific position.
        </p>
      </div>
    </section>
  );
}
