import React from 'react';
import { ArrowDown, Download, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/profile';

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#F5F7FA] dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status / Availability Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-slate-900 text-[#2563EB] dark:text-blue-300 border border-[#E2E8F0] dark:border-slate-800 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
              </span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#172033] dark:text-white leading-[1.15] mb-3">
              Hi, I'm <span className="text-[#2563EB] dark:text-blue-400">{personalInfo.name}</span>
            </h1>

            {/* Title / Role */}
            <div className="flex flex-wrap items-center gap-2 text-lg sm:text-xl font-semibold text-[#172033] dark:text-slate-200 mb-6">
              <span>{personalInfo.role}</span>
              <span className="hidden sm:inline-block text-[#64748B] dark:text-slate-700 font-normal">|</span>
              <span className="text-sm font-normal text-[#64748B] dark:text-slate-400 flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-[#2563EB]" />
                LangChain & LangGraph Workflows
              </span>
            </div>

            {/* Professional Introduction */}
            <p className="text-base sm:text-lg text-[#64748B] dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
              {personalInfo.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[#2563EB] text-white hover:bg-blue-700 active:bg-blue-800 transition-colors"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-[#172033] dark:text-slate-200 bg-white dark:bg-slate-900 border border-[#E2E8F0] dark:border-slate-800 hover:bg-[#F5F7FA] dark:hover:bg-slate-800/80 hover:text-[#2563EB] dark:hover:text-blue-400 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Location & Focus */}
            <div className="mt-10 pt-6 border-t border-[#E2E8F0] dark:border-slate-800/80 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#64748B] dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>{personalInfo.contact.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Practical AI Engineering & Reproducible Pipelines</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border border-[#E2E8F0] dark:border-slate-800 bg-white dark:bg-slate-900">
                <img
                  src={personalInfo.profileImagePath || '/profile.jpg'}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>

              {/* Floating Tech Badge */}
              <div className="absolute -bottom-3 -left-3 sm:-left-4 bg-white dark:bg-slate-900 border border-[#E2E8F0] dark:border-slate-800 rounded-xl px-3.5 py-2 flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB]"></div>
                <div className="text-left">
                  <p className="text-[11px] font-semibold text-[#172033] dark:text-white leading-tight">
                    Agentic AI & ML
                  </p>
                  <p className="text-[10px] text-[#64748B] dark:text-slate-400">
                    Production-Oriented Workflows
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
