import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const responsibilities = [
    'Developed the diabetes prediction module for a multi-disease prediction system as part of a four-member team.',
    'Trained and evaluated an XGBoost classifier.',
    'Evaluated the model using classification reports and a confusion matrix.',
    'Achieved 0.97 weighted precision and 0.89 macro F1-score.'
  ];

  return (
    <section id="experience" className="py-20 md:py-24 bg-[#F5F7FA] dark:bg-slate-950 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-blue-400 mb-2">
            <Briefcase className="w-4 h-4" />
            <span>Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#172033] dark:text-white tracking-tight">
            Internship Experience
          </h2>
          <p className="mt-3 text-base text-[#64748B] dark:text-slate-400">
            Practical industry training in machine learning and deep learning pipelines.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#E2E8F0] dark:border-slate-800 ml-2 sm:ml-4">
          {/* Timeline Dot */}
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#2563EB] border-4 border-[#F5F7FA] dark:border-slate-950"></div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-[#E2E8F0] dark:border-slate-800 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-xl font-bold text-[#172033] dark:text-white">
                  Machine Learning & Deep Learning Intern
                </h3>
                <p className="text-base font-semibold text-[#2563EB] dark:text-blue-400 mt-0.5">
                  Huebits Tech Pvt. Ltd.
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-[#F5F7FA] dark:bg-slate-800 text-[#64748B] dark:text-slate-300 border border-[#E2E8F0] dark:border-slate-700 self-start sm:self-auto">
                <Calendar className="w-3.5 h-3.5 text-[#64748B]" />
                <span>January 2026 – March 2026</span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="mt-5 space-y-3">
              {responsibilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#64748B] dark:text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
