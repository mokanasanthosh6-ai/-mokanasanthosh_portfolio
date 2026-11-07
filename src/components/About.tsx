import { GraduationCap, Target, BookOpen, Hammer, Compass, Cpu, TrendingUp, Lightbulb, Workflow, Rocket, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const iconMap: Record<string, typeof BookOpen> = {
    "Programming Mastery": Code2,
    "Startup Vision": Rocket,
    "Building": Hammer,
    "Automation": Workflow,
    "Artificial Intelligence": Cpu,
    "Continuous Improvement": TrendingUp,
    "Learning": BookOpen,
    "Experimenting": Compass,
    "Problem Solving": Lightbulb,
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-3">
            About Me & Grand Ambitions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Curious Mind. Grand Vision.
          </h2>
          <p className="mt-3 text-zinc-400 text-base">
            Taking deliberate steps in Computer Science Engineering toward becoming an elite programming expert and founding my own AI startup.
          </p>
        </div>

        {/* Top 3 Strategic Pillar Cards: Education, Programming Expert, Startup Founder */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Academic Background */}
          <div
            id="about-card-education"
            className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/90 backdrop-blur-sm hover:border-zinc-500 transition-all shadow-md group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white mb-4 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                Academic Background
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                {personalInfo.degree}
              </h3>
              <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-700 text-zinc-300 mb-3">
                {personalInfo.collegeYear}
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Building a rigorous foundation in computational theory, data structures, discrete mathematics, and software design principles.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-850 text-[11px] font-mono text-zinc-400">
              Focus: Core Computer Science
            </div>
          </div>

          {/* Card 2: Goal: Becoming a Programming Expert */}
          <div
            id="about-card-programming-expert"
            className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/90 backdrop-blur-sm hover:border-zinc-500 transition-all shadow-md group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white mb-4 group-hover:scale-105 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                Technical Target
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                Programming Expert
              </h3>
              <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-700 text-zinc-300 mb-3">
                Mastery in Code & Systems
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Dedicated to achieving mastery in algorithmic problem solving, Python architecture, clean code craftsmanship, and complex AI system design.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-850 text-[11px] font-mono text-zinc-400">
              Commitment: Daily Code & Refinement
            </div>
          </div>

          {/* Card 3: Goal: Launching My Own Startup */}
          <div
            id="about-card-startup-founder"
            className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/90 backdrop-blur-sm hover:border-zinc-500 transition-all shadow-md group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white mb-4 group-hover:scale-105 transition-transform">
                <Rocket className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                Entrepreneurial Ambition
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                Launch My Own Startup
              </h3>
              <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-700 text-zinc-300 mb-3">
                Future Tech Founder
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Aiming to found and scale an innovative AI technology company, building proprietary software products that automate workflows and solve real-world problems.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-850 text-[11px] font-mono text-zinc-400">
              Horizon: Venture-Scale AI Products
            </div>
          </div>

        </div>

        {/* Narrative Biography */}
        <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800/90 backdrop-blur-md mb-12 shadow-lg">
          <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white" />
            My Beginning in Tech & Startup Mission
          </h4>
          <p className="text-zinc-300 text-base leading-relaxed mb-4">
            {personalInfo.bio}
          </p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Rather than waiting for graduation, I believe in building now: writing real code, studying scalable system design, understanding the mechanics of AI models, and prototyping practical applications like SkillPath AI and n8n workflows that lay the foundation for my future tech startup.
          </p>
        </div>

        {/* 6 Core Pillars */}
        <div>
          <h4 className="text-base font-semibold text-zinc-200 uppercase tracking-wider font-mono text-center mb-8">
            Core Principles Guiding My Growth
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {personalInfo.aboutPillars.map((pillar) => {
              const IconComponent = iconMap[pillar.label] || BookOpen;
              return (
                <div
                  key={pillar.label}
                  id={`pillar-${pillar.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="p-5 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-600 hover:bg-zinc-900/50 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white group-hover:border-zinc-600 transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h5 className="font-semibold text-zinc-100 text-sm group-hover:text-white transition-colors">
                      {pillar.label}
                    </h5>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
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
