import { GraduationCap, Target, BookOpen, Hammer, Compass, Cpu, TrendingUp, Lightbulb } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const iconMap: Record<string, typeof BookOpen> = {
    "Learning": BookOpen,
    "Building": Hammer,
    "Experimenting": Compass,
    "Problem Solving": Lightbulb,
    "Artificial Intelligence": Cpu,
    "Continuous Improvement": TrendingUp,
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Curious Mind. Grounded Journey.
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Taking the first deliberate steps in Computer Science Engineering toward AI engineering.
          </p>
        </div>

        {/* Top 2 Cards: Education & Career Goal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Education Card */}
          <div
            id="about-card-education"
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-cyan-500/40 transition-all shadow-md group"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Academic Background
            </span>
            <h3 className="text-xl font-bold text-white mt-1 mb-2">
              {personalInfo.degree}
            </h3>
            <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 mb-3">
              {personalInfo.collegeYear}
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Actively mastering core fundamentals of computer science, algorithms, and computational principles as a foundation for advanced AI specializations.
            </p>
          </div>

          {/* Career Goal Card */}
          <div
            id="about-card-career-goal"
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-purple-500/40 transition-all shadow-md group"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-105 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
              Career Aspiration
            </span>
            <h3 className="text-xl font-bold text-white mt-1 mb-2">
              Aspiring AI Engineer
            </h3>
            <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-950/60 border border-purple-500/30 text-purple-300 mb-3">
              Target Field: AI & GenAI Systems
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {personalInfo.careerGoal}
            </p>
          </div>

        </div>

        {/* Narrative Biography */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-950/80 border border-slate-800/90 backdrop-blur-md mb-12 shadow-lg">
          <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            My Beginning in Tech
          </h4>
          <p className="text-slate-300 text-base leading-relaxed mb-4">
            {personalInfo.bio}
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Rather than jumping ahead with theoretical claims, my focus is on genuine practice: writing code, understanding how algorithms work under the hood, experimenting with generative prompts, and building small tools that solve everyday calculations.
          </p>
        </div>

        {/* 6 Core Pillars */}
        <div>
          <h4 className="text-base font-semibold text-slate-200 uppercase tracking-wider font-mono text-center mb-8">
            Core Principles Guiding My Growth
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {personalInfo.aboutPillars.map((pillar) => {
              const IconComponent = iconMap[pillar.label] || BookOpen;
              return (
                <div
                  key={pillar.label}
                  id={`pillar-${pillar.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h5 className="font-semibold text-slate-100 text-sm group-hover:text-cyan-300 transition-colors">
                      {pillar.label}
                    </h5>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
