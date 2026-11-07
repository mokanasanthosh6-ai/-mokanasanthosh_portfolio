import { GraduationCap, Code2, Sparkles, Workflow, Trophy, Rocket, CheckCircle, Clock } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  const iconMap: Record<string, typeof GraduationCap> = {
    GraduationCap,
    Code2,
    Sparkles,
    Workflow,
    Trophy,
    Rocket,
  };

  return (
    <section id="achievements" className="py-20 relative bg-black border-y border-zinc-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Milestones & Recognition
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Key Achievements
          </h2>
          <p className="mt-3 text-zinc-400 text-base">
            Academic milestones, live platform deployments, and autonomous workflow engineering accomplished throughout my engineering path.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line through timeline in clean white gradient */}
          <div className="hidden sm:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-white/70 via-zinc-600 to-white/20 -translate-x-1/2" />
          <div className="sm:hidden absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-white/70 via-zinc-600 to-white/20" />

          {/* Timeline Items */}
          <div className="space-y-10">
            {achievementsData.map((step, index) => {
              const IconComponent = iconMap[step.iconName] || Trophy;
              const isEven = index % 2 === 0;
              const isInProgress = step.status === 'in-progress';

              return (
                <div
                  key={step.title}
                  id={`achievement-step-${index + 1}`}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] pl-14 sm:pl-0">
                    <div
                      className={`p-6 rounded-2xl bg-zinc-950 border backdrop-blur-sm transition-all duration-300 hover:border-zinc-500 shadow-lg ${
                        isInProgress
                          ? 'border-white/80 bg-zinc-900/90 shadow-white/5'
                          : 'border-zinc-800/90'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span
                          className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                            isInProgress
                              ? 'bg-white text-black font-semibold'
                              : 'bg-zinc-900 text-zinc-300 border border-zinc-700'
                          }`}
                        >
                          {step.tag}
                        </span>
                        
                        <div className="flex items-center gap-1.5 text-xs">
                          {isInProgress ? (
                            <span className="flex items-center gap-1 text-white font-medium">
                              <Clock className="w-3 h-3 animate-pulse text-white" />
                              Active Pursuit
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-zinc-300 font-medium">
                              <CheckCircle className="w-3 h-3 text-white" />
                              Achieved
                            </span>
                          )}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-1">
                        {step.title}
                      </h3>

                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-xs font-mono text-zinc-400">
                          {step.subtitle}
                        </span>
                        {step.metric && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black border border-zinc-800 text-zinc-300">
                            {step.metric}
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node / Circle */}
                  <div
                    className={`absolute sm:left-1/2 left-6 -translate-x-1/2 flex items-center justify-center w-11 h-11 rounded-full border-2 transition-transform duration-200 z-10 ${
                      isInProgress
                        ? 'bg-black border-white text-white shadow-lg ring-4 ring-white/20'
                        : 'bg-black border-zinc-500 text-zinc-300 shadow-sm'
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
          <div className="inline-block p-6 rounded-2xl bg-zinc-950 border border-zinc-800 max-w-2xl text-zinc-300 text-sm">
            <p className="font-semibold text-white mb-1">
              "Continuous Progress • Rigorous Fundamentals • Shipped Solutions"
            </p>
            <p className="text-xs text-zinc-400">
              Every milestone represents committed dedication in coursework, hands-on software development, and real-world AI applications.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
