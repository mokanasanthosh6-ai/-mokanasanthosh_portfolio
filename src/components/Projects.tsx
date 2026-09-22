import { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Play, 
  Code2, 
  Sparkles, 
  Calculator, 
  CheckSquare, 
  BrainCircuit,
  ArrowUpRight
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import InteractiveModal from './InteractiveModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectIcons: Record<string, typeof Calculator> = {
    'grade-calculator': Calculator,
    'voting-calculator': CheckSquare,
    'generative-ai-projects': BrainCircuit,
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Portfolio Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects & Experiments
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Hands-on applications built to master conditional logic, calculations, web fundamentals, and emerging AI concepts.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projectsData.map((project) => {
            const IconComponent = projectIcons[project.id] || FolderGit2;
            const isAi = project.category === 'ai';

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className={`flex flex-col justify-between rounded-2xl bg-slate-900/60 border backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg group ${
                  isAi
                    ? 'border-purple-500/30 hover:border-purple-500/60 shadow-purple-950/20'
                    : 'border-slate-800/90 hover:border-cyan-500/40 shadow-slate-950/50'
                }`}
              >
                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${
                        isAi
                          ? 'bg-purple-500/15 border-purple-500/30 text-purple-400 group-hover:scale-105'
                          : 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400 group-hover:scale-105'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                        isAi
                          ? 'bg-purple-950/50 text-purple-300 border-purple-800/60'
                          : 'bg-slate-800/80 text-cyan-300 border-slate-700/80'
                      }`}
                    >
                      {isAi ? 'Generative AI' : 'Web Application'}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-5 space-y-1.5">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Highlights:
                    </span>
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="text-xs text-slate-400 flex items-start gap-1.5">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="pt-4 border-t border-slate-800/80 mb-5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/40 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      id={`btn-open-demo-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/30 transition-all cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Interactive App</span>
                    </button>

                    <a
                      id={`btn-github-${project.id}`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold bg-slate-800/80 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-700/80 hover:border-slate-600 transition-all"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Flexible Roadmap Notice for Project 3 */}
        <div className="mt-12 p-5 rounded-2xl bg-gradient-to-r from-slate-900/60 to-purple-950/20 border border-purple-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Expanding AI Projects Workspace
              </h4>
              <p className="text-xs text-slate-400">
                Designed to host upcoming experiments in Python, prompt engineering, and intelligent agents as studies progress.
              </p>
            </div>
          </div>
          <a
            id="link-explore-github-all"
            href="https://github.com/mokanasanthosh6-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:underline shrink-0"
          >
            <span>Follow on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Interactive Live Modal */}
      {selectedProject && (
        <InteractiveModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
