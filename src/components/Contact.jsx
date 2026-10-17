import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MessageSquare, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/profile';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-[#F5F7FA] dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-blue-400 mb-2">
            <MessageSquare className="w-4 h-4" />
            <span>Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#172033] dark:text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-3 text-base text-[#64748B] dark:text-slate-400">
            Open to discussing AI/ML Engineering opportunities, Agentic AI architectures, and practical application development.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-[#E2E8F0] dark:border-slate-800 flex flex-col justify-between transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800/80 flex items-center justify-center text-[#2563EB] dark:text-blue-400 mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#172033] dark:text-white mb-1">
                Email
              </h3>
              <p className="text-xs text-[#64748B] dark:text-slate-400 mb-3">
                Direct inquiries and recruitment
              </p>
              <p className="text-sm font-medium text-[#172033] dark:text-slate-200 break-all mb-4">
                {personalInfo.contact.email}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-[#E2E8F0] dark:border-slate-800/60">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-[#2563EB] text-white hover:bg-blue-700 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
              <button
                onClick={copyEmail}
                title="Copy email to clipboard"
                aria-label="Copy email address"
                className="p-2 rounded-lg border border-[#E2E8F0] dark:border-slate-700 text-[#64748B] dark:text-slate-300 hover:text-[#172033] hover:bg-[#F5F7FA] dark:hover:bg-slate-800 transition-colors"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-[#E2E8F0] dark:border-slate-800 flex flex-col justify-between transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800/80 flex items-center justify-center text-[#2563EB] dark:text-blue-400 mb-4">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#172033] dark:text-white mb-1">
                LinkedIn
              </h3>
              <p className="text-xs text-[#64748B] dark:text-slate-400 mb-3">
                Professional profile & network
              </p>
              <p className="text-sm font-medium text-[#172033] dark:text-slate-200 mb-4">
                linkedin.com/in/buildwithnaga
              </p>
            </div>

            <div className="pt-2 border-t border-[#E2E8F0] dark:border-slate-800/60">
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-[#F5F7FA] dark:bg-slate-800 text-[#172033] dark:text-slate-200 border border-[#E2E8F0] dark:border-slate-700 hover:text-[#2563EB] dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-700/80 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>View LinkedIn</span>
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-[#E2E8F0] dark:border-slate-800 flex flex-col justify-between transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800/80 flex items-center justify-center text-[#2563EB] dark:text-blue-400 mb-4">
                <GithubIcon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#172033] dark:text-white mb-1">
                GitHub
              </h3>
              <p className="text-xs text-[#64748B] dark:text-slate-400 mb-3">
                Open source & repositories
              </p>
              <p className="text-sm font-medium text-[#172033] dark:text-slate-200 mb-4">
                github.com/buildwithnaga
              </p>
            </div>

            <div className="pt-2 border-t border-[#E2E8F0] dark:border-slate-800/60">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-[#F5F7FA] dark:bg-slate-800 text-[#172033] dark:text-slate-200 border border-[#E2E8F0] dark:border-slate-700 hover:text-[#2563EB] dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-700/80 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Visit GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Supplementary Info: Phone & Location */}
        <div className="mt-8 pt-6 border-t border-[#E2E8F0] dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-[#64748B] dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#2563EB]" />
            <span>Phone: <a href={`tel:${personalInfo.contact.phone}`} className="text-[#172033] dark:text-slate-300 font-medium hover:text-[#2563EB]">{personalInfo.contact.phone}</a></span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#2563EB]" />
            <span>{personalInfo.contact.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
