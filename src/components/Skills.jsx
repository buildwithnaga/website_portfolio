import React from 'react';
import { Layers } from 'lucide-react';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24 bg-white dark:bg-slate-900/50 border-y border-[#E2E8F0] dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-blue-400 mb-2">
            <Layers className="w-4 h-4" />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#172033] dark:text-white tracking-tight">
            Core Competencies & Tooling
          </h2>
          <p className="mt-3 text-base text-[#64748B] dark:text-slate-400">
            Categorized technical skills spanning agentic frameworks, LLM orchestration, machine learning, and application deployment.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((item) => (
            <div
              key={item.category}
              className="p-6 rounded-2xl bg-[#F5F7FA] dark:bg-slate-950 border border-[#E2E8F0] dark:border-slate-800 transition-colors flex flex-col"
            >
              <div className="mb-4">
                <h3 className="text-base font-bold text-[#172033] dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
                  {item.category}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 text-[#172033] dark:text-slate-200 border border-[#E2E8F0] dark:border-slate-700/80 hover:border-[#2563EB] hover:text-[#2563EB] dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
