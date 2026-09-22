import { GraduationCap, Code2, Sparkles, FolderGit2, Bot, CheckCircle, Clock } from 'lucide-react';
import { journeyTimeline } from '../data/portfolioData';

export default function LearningJourney() {
  const iconMap: Record<string, typeof GraduationCap> = {
    GraduationCap,
    Code2,
    Sparkles,
    FolderGit2,
    Bot,
  };

  return (
    <section id="journey" className="py-20 relative bg-slate-950/50 border-y border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Milestones & Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Learning Journey
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            From first-year admission to hands-on projects and future AI aspirations.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line through timeline */}
          <div className="hidden sm:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500/60 via-purple-500/50 to-cyan-500/20 -translate-x-1/2" />
          <div className="sm:hidden absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500/60 via-purple-500/50 to-cyan-500/20" />

          {/* Timeline Items */}
          <div className="space-y-10">
            {journeyTimeline.map((step, index) => {
              const IconComponent = iconMap[step.iconName] || Code2;
              const isEven = index % 2 === 0;
              const isInProgress = step.status === 'in-progress';

              return (
                <div
                  key={step.title}
                  id={`journey-step-${index + 1}`}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] pl-14 sm:pl-0">
                    <div
                      className={`p-6 rounded-2xl bg-slate-900/70 border backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40 shadow-lg ${
                        isInProgress
                          ? 'border-cyan-500/50 bg-gradient-to-br from-slate-900/90 to-cyan-950/20 shadow-cyan-950/30'
                          : 'border-slate-800/90'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span
                          className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                            isInProgress
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                              : 'bg-slate-800 text-slate-400 border border-slate-700/60'
                          }`}
                        >
                          {step.tag}
                        </span>
                        
                        <div className="flex items-center gap-1.5 text-xs">
                          {isInProgress ? (
                            <span className="flex items-center gap-1 text-cyan-400 font-medium">
                              <Clock className="w-3 h-3 animate-pulse" />
                              Current Focus
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-emerald-400 font-medium">
                              <CheckCircle className="w-3 h-3" />
                              Completed
                            </span>
                          )}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-1">
                        {step.title}
                      </h3>

                      <div className="text-xs font-mono text-cyan-400/90 mb-2">
                        {step.subtitle}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node / Circle */}
                  <div
                    className={`absolute sm:left-1/2 left-6 -translate-x-1/2 flex items-center justify-center w-11 h-11 rounded-full border-2 transition-transform duration-200 z-10 ${
                      isInProgress
                        ? 'bg-slate-900 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/30 ring-4 ring-cyan-500/15'
                        : 'bg-slate-900 border-purple-500/60 text-purple-300 shadow-sm shadow-purple-900/30'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Empty spacer for desktop symmetry */}
                  <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestone Goal Statement */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-purple-950/40 border border-slate-800 max-w-2xl text-slate-300 text-sm">
            <p className="font-semibold text-white mb-1">
              "Learning → Building → Improving → Becoming an AI Engineer"
            </p>
            <p className="text-xs text-slate-400">
              Each milestone represents committed steps in self-study, academic coursework, and practical code implementation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
