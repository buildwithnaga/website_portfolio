import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/profile';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E2E8F0] dark:border-slate-800 bg-white dark:bg-slate-950 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Note */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-[#172033] dark:text-white">
              {personalInfo.name} <span className="font-normal text-[#64748B] dark:text-slate-400">— {personalInfo.role}</span>
            </p>
            <p className="text-xs text-[#64748B] dark:text-slate-400 mt-1">
              Building reliable machine learning systems & generative AI applications.
            </p>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personalInfo.contact.email}`}
              aria-label="Email"
              className="p-2 rounded-lg text-[#64748B] hover:text-[#2563EB] dark:hover:text-blue-400 hover:bg-[#F5F7FA] dark:hover:bg-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-[#64748B] hover:text-[#2563EB] dark:hover:text-blue-400 hover:bg-[#F5F7FA] dark:hover:bg-slate-800 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-[#64748B] hover:text-[#2563EB] dark:hover:text-blue-400 hover:bg-[#F5F7FA] dark:hover:bg-slate-800 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <div className="w-px h-5 bg-[#E2E8F0] dark:bg-slate-800 mx-1" />

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-1 text-xs font-medium text-[#64748B] dark:text-slate-400 hover:text-[#172033] dark:hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-[#E2E8F0] dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] dark:text-slate-500 gap-2">
          <p>© {CURRENT_YEAR} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
