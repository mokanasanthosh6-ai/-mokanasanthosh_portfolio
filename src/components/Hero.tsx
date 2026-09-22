import { ArrowRight, Mail, FolderGit2, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status / Motto Badge */}
            <div
              id="hero-status-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-medium mb-6 shadow-sm shadow-cyan-950/40 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="tracking-wide">{personalInfo.motto}</span>
            </div>

            {/* Main Greeting */}
            <h1
              id="hero-greeting"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight"
            >
              {personalInfo.heroGreeting}
            </h1>

            {/* Subtitle / Role */}
            <h2
              id="hero-subtitle"
              className="text-xl sm:text-2xl lg:text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6"
            >
              {personalInfo.heroSubtitle}
            </h2>

            {/* Short Introduction */}
            <p
              id="hero-intro"
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8"
            >
              {personalInfo.heroIntro}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                id="hero-cta-projects"
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-cta-contact"
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Focus highlights */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-lg border-t border-slate-800/80 pt-6 text-left">
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">Current Phase</span>
                <span className="text-sm font-bold text-slate-100">1st Year B.Tech CSE</span>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">Core Track</span>
                <span className="text-sm font-bold text-cyan-300">Aspiring AI Eng.</span>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">Mindset</span>
                <span className="text-sm font-bold text-purple-300">Hands-on Practice</span>
              </div>
            </div>

          </div>

          {/* AI / Coding Tech Visual Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              id="hero-terminal-card"
              className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800/90 rounded-2xl p-5 shadow-2xl shadow-cyan-950/30 relative overflow-hidden group hover:border-cyan-500/40 transition-colors"
            >
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>santhosh@student-cse:~$</span>
                </div>
                <div className="text-[10px] font-mono text-slate-400">python3</div>
              </div>

              {/* Terminal Code Body */}
              <div className="space-y-2.5 font-mono text-xs leading-relaxed">
                <p className="text-slate-400 flex items-center gap-2">
                  <span className="text-cyan-400">❯</span> cat profile.json
                </p>
                
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-slate-300 space-y-1">
                  <div><span className="text-purple-400">"student"</span>: <span className="text-emerald-300">"M. Santhosh"</span>,</div>
                  <div><span className="text-purple-400">"branch"</span>: <span className="text-emerald-300">"B.Tech Computer Science"</span>,</div>
                  <div><span className="text-purple-400">"year"</span>: <span className="text-amber-300">"1st Year (2026)"</span>,</div>
                  <div><span className="text-purple-400">"target_role"</span>: <span className="text-cyan-300">"AI Engineer"</span>,</div>
                  <div><span className="text-purple-400">"active_explorations"</span>: [</div>
                  <div className="pl-4 text-cyan-300/90">"HTML/CSS/JS", "Python Fundamentals", "Generative AI"</div>
                  <div>]</div>
                </div>

                <p className="text-slate-400 flex items-center gap-2 pt-1">
                  <span className="text-cyan-400">❯</span> python3 -m journey.run
                </p>

                <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-cyan-200 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Status:</span> Building foundations through small practical projects and continuous curiosity.
                  </div>
                </div>

                {/* Floating Micro Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] bg-slate-800/80 border border-slate-700/80 text-slate-300">
                    <Code2 className="w-3 h-3 text-cyan-400" />
                    Clean Code
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] bg-slate-800/80 border border-slate-700/80 text-slate-300">
                    <Cpu className="w-3 h-3 text-purple-400" />
                    AI Foundations
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] bg-slate-800/80 border border-slate-700/80 text-slate-300">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    Curiosity Driven
                  </span>
                </div>
              </div>

              {/* Decorative accent gradient on card */}
              <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
