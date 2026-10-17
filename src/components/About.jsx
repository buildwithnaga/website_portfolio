import React from 'react';
import { UserCheck } from 'lucide-react';
import { personalInfo } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 bg-white dark:bg-slate-900/50 border-y border-[#E2E8F0] dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-blue-400 mb-2">
            <UserCheck className="w-4 h-4" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#172033] dark:text-white tracking-tight">
            Background & Focus
          </h2>
        </div>

        {/* Narrative Card */}
        <div className="p-6 sm:p-9 rounded-2xl bg-[#F5F7FA] dark:bg-slate-950 border border-[#E2E8F0] dark:border-slate-800 space-y-5 text-base sm:text-lg leading-relaxed">
          {personalInfo.about.paragraphs.map((paragraph, idx) => (
            <p
              key={idx}
              className={
                idx === 0
                  ? "text-lg sm:text-xl font-medium text-[#172033] dark:text-white leading-relaxed"
                  : "text-[#64748B] dark:text-slate-300"
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
