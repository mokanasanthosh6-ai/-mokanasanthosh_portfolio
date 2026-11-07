import { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Play, 
  Sparkles, 
  Terminal, 
  Workflow, 
  Compass, 
  ArrowUpRight
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import InteractiveModal from './InteractiveModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectIcons: Record<string, typeof Terminal> = {
    'python-vote-eligibility': Terminal,
    'skillpath-ai': Compass,
    'n8n-ai-news-summarizer': Workflow,
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Updated Portfolio Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects & Intelligent Automations
          </h2>
          <p className="mt-3 text-zinc-400 text-base">
            Hands-on applications spanning Python conditional logic, deployed Generative AI tools (SkillPath AI), and autonomous n8n workflow pipelines delivering news digests to email.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projectsData.map((project) => {
            const IconComponent = projectIcons[project.id] || FolderGit2;
            const isAi = project.category === 'ai';
            const isAutomation = project.category === 'automation';
            const isPython = project.category === 'python';

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="flex flex-col justify-between rounded-2xl bg-zinc-950 border border-zinc-800/90 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-500 shadow-xl shadow-black group"
              >
                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-zinc-700 bg-zinc-900 text-white transition-all group-hover:scale-105 group-hover:border-white">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md border border-zinc-800 bg-zinc-900 text-zinc-300">
                      {isAi
                        ? 'Generative AI'
                        : isAutomation
                        ? 'n8n Automation'
                        : 'Python Program'}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white transition-colors mb-3 group-hover:text-zinc-200">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-5 space-y-1.5">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                      Key Highlights:
                    </span>
                    {project.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="text-xs text-zinc-400 flex items-start gap-1.5">
                        <span className="text-white mt-0.5">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="pt-4 border-t border-zinc-800/80 mb-5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Live Web URL Prominent Link (SkillPath AI) */}
                  {project.liveUrl && (
                    <a
                      id={`btn-live-app-${project.id}`}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mb-2 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-all shadow-md cursor-pointer group/link"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-black" />
                      <span>Visit Live Web App (Lovable)</span>
                      <ExternalLink className="w-3.5 h-3.5 text-black group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  )}

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      id={`btn-open-demo-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-white transition-all cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 text-white" />
                      <span>
                        {isPython ? 'Run Python' : isAi ? 'Roadmap Demo' : 'Run Pipeline'}
                      </span>
                    </button>

                    <a
                      id={`btn-github-${project.id}`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-black hover:bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-600 transition-all"
                    >
                      <span>Code Repo</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Dynamic Highlights Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Live AI Tools & Autonomous Email Automations
              </h4>
              <p className="text-xs text-zinc-400">
                Showcasing practical engineering: from Python logic to deployed AI applications at <strong className="text-white font-mono">skillpathai18.lovable.app</strong> and scheduled n8n workflows.
              </p>
            </div>
          </div>
          <a
            id="link-explore-github-all"
            href="https://github.com/mokanasanthosh6-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-zinc-300 hover:underline shrink-0"
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
