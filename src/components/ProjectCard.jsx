import React from 'react';
import { ExternalLink, Tag, Check, BarChart2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project }) {
  const {
    title,
    displayCategory,
    description,
    technologies,
    features,
    githubUrl,
    demoUrl,
    evaluationMetrics,
    metricsDisclaimer
  } = project;

  const hasAnyLink = Boolean(githubUrl || demoUrl);

  return (
    <article className="flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 border border-[#E2E8F0] dark:border-slate-800 p-6 sm:p-7 transition-colors">
      <div>
        {/* Category Pill */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/70 text-[#2563EB] dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/80">
            <Tag className="w-3 h-3 text-[#2563EB]" />
            {displayCategory}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#172033] dark:text-white mb-3 tracking-tight leading-snug">
          {title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-[#64748B] dark:text-slate-300 leading-relaxed mb-5">
          {description}
        </p>

        {/* Key Features List */}
        {features && features.length > 0 && (
          <div className="mb-5 p-4 rounded-xl bg-[#F5F7FA] dark:bg-slate-800/40 border border-[#E2E8F0] dark:border-slate-800">
            <p className="text-xs font-bold uppercase tracking-wider text-[#172033] dark:text-slate-200 mb-2.5">
              Key Features
            </p>
            <ul className="space-y-1.5">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#64748B] dark:text-slate-300 leading-normal">
                  <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Reported Evaluation Metrics */}
        {evaluationMetrics && (
          <div className="mb-5 p-3.5 rounded-xl bg-[#F5F7FA] dark:bg-slate-800/40 border border-[#E2E8F0] dark:border-slate-800">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] dark:text-blue-300 mb-2">
              <BarChart2 className="w-3.5 h-3.5 text-[#2563EB] dark:text-blue-400" />
              <span>Reported Model Evaluation Accuracy</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center mb-2">
              {evaluationMetrics.map((metric, idx) => (
                <div key={idx} className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-[#E2E8F0] dark:border-slate-700">
                  <div className="text-xs font-bold text-[#172033] dark:text-white">{metric.value}</div>
                  <div className="text-[10px] text-[#64748B] dark:text-slate-400 truncate">{metric.label}</div>
                </div>
              ))}
            </div>
            {metricsDisclaimer && (
              <p className="text-[11px] text-[#64748B] dark:text-slate-400 italic leading-snug">
                {metricsDisclaimer}
              </p>
            )}
          </div>
        )}

        {/* Technologies Used */}
        <div className="mb-6">
          <p className="text-xs font-medium text-[#64748B] dark:text-slate-400 mb-2 uppercase tracking-wider">
            Technologies
          </p>
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#F5F7FA] dark:bg-slate-800 text-[#172033] dark:text-slate-300 border border-[#E2E8F0] dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      {hasAnyLink ? (
        <div className="pt-4 border-t border-[#E2E8F0] dark:border-slate-800/80 flex items-center gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#172033] dark:text-slate-200 bg-[#F5F7FA] dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-[#E2E8F0] dark:border-slate-700 hover:text-[#2563EB] dark:hover:text-blue-400 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#2563EB] hover:bg-blue-700 active:bg-blue-800 transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      ) : (
        <div className="pt-3 border-t border-[#E2E8F0] dark:border-slate-800/80 text-xs text-[#64748B] dark:text-slate-500 italic">
          Internal academic pipeline; code & demo offline.
        </div>
      )}
    </article>
  );
}
