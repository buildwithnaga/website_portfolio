import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-24 bg-white dark:bg-slate-900/50 border-y border-[#E2E8F0] dark:border-slate-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-blue-400 mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#172033] dark:text-white tracking-tight">
            Academic Background
          </h2>
          <p className="mt-3 text-base text-[#64748B] dark:text-slate-400">
            Foundational degree coursework in artificial intelligence and machine learning.
          </p>
        </div>

        {/* Education Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F5F7FA] dark:bg-slate-950 border border-[#E2E8F0] dark:border-slate-800 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/70 text-[#2563EB] dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/80 mb-2">
                Bachelor of Technology (B.Tech)
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#172033] dark:text-white">
                Computer Science & Artificial Intelligence and Machine Learning
              </h3>
              <p className="text-base font-semibold text-[#172033] dark:text-slate-200 mt-1">
                Sasi Institute of Technology and Engineering
              </p>

              <div className="flex items-center gap-1.5 text-xs text-[#64748B] dark:text-slate-400 mt-3">
                <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Tadepalligudem, India</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-white dark:bg-slate-800 text-[#64748B] dark:text-slate-300 border border-[#E2E8F0] dark:border-slate-700 self-start">
              <Calendar className="w-3.5 h-3.5 text-[#64748B]" />
              <span>2022 – 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
