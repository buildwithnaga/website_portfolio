import React, { useState } from 'react';
import { FolderGit2, Filter } from 'lucide-react';
import { projects, projectFilterCategories } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter(
          (p) =>
            p.filterCategories && p.filterCategories.includes(selectedCategory)
        );

  return (
    <section id="projects" className="py-20 md:py-24 bg-[#F5F7FA] dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-blue-400 mb-2">
              <FolderGit2 className="w-4 h-4" />
              <span>Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#172033] dark:text-white tracking-tight">
              Featured AI & ML Systems
            </h2>
            <p className="mt-3 text-base text-[#64748B] dark:text-slate-400">
              Tool-using conversational agents, multi-agent research pipelines, and predictive healthcare models.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 text-xs text-[#64748B] dark:text-slate-500 mr-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </div>
            {projectFilterCategories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    isSelected
                      ? 'bg-[#2563EB] text-white border border-[#2563EB]'
                      : 'bg-white dark:bg-slate-900 text-[#64748B] dark:text-slate-300 border border-[#E2E8F0] dark:border-slate-800 hover:text-[#172033] dark:hover:text-white hover:bg-[#F5F7FA] dark:hover:bg-slate-800'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
