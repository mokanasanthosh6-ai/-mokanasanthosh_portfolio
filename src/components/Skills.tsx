import { useState } from 'react';
import { 
  FileCode2, 
  Palette, 
  Code, 
  Layout, 
  Terminal, 
  Sparkles, 
  Cpu, 
  CheckCircle2,
  Layers,
  Filter,
  Workflow
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Programming', 'AI & Learning'];

  const iconComponents: Record<string, typeof FileCode2> = {
    FileCode2,
    Palette,
    Code,
    Layout,
    Terminal,
    Sparkles,
    Cpu,
    Workflow,
  };

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative bg-zinc-950/60 border-y border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Technical Skillset
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Foundations & Technologies
          </h2>
          <p className="mt-3 text-zinc-400 text-base">
            Skills actively studied and practiced in coursework and hands-on projects.
          </p>

          {/* Realistic Student Note */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span>Honest Level: Foundational / Exploring — focused on solid basics without exaggerated claims</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          <span className="text-xs text-zinc-400 mr-2 flex items-center gap-1 font-mono">
            <Filter className="w-3.5 h-3.5 text-white" />
            Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-skill-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-black font-semibold border border-white shadow-sm'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:bg-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const IconComponent = iconComponents[skill.iconName] || Code;
            
            return (
              <div
                key={skill.name}
                id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/90 backdrop-blur-sm hover:border-zinc-500 hover:bg-zinc-900/40 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white group-hover:scale-105 group-hover:border-white transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-zinc-200 transition-colors mb-2">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {skill.levelDescription}
                  </p>
                </div>

                {/* Topics / Practice areas */}
                <div className="pt-4 border-t border-zinc-800/70">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                    Key Focus Areas:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.topics.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-300 border border-zinc-800"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Learning philosophy card */}
        <div className="mt-12 p-5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between flex-wrap gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2.5">
            <Layers className="w-4 h-4 text-white shrink-0" />
            <span>
              <strong className="text-white">Learning Philosophy:</strong> Mastering the core syntax and understanding logic before jumping into heavy abstractions or complex frameworks.
            </span>
          </div>
          <div className="font-mono text-zinc-300">
            Commitment: Daily code & build
          </div>
        </div>

      </div>
    </section>
  );
}
