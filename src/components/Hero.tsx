import { ArrowRight, Mail, FolderGit2, Sparkles, Terminal, Code2, Cpu, Rocket } from 'lucide-react';
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
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950/90 border border-zinc-800 text-zinc-300 text-xs font-medium mb-6 shadow-sm shadow-black/40 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
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
              className="text-xl sm:text-2xl lg:text-2xl font-semibold text-zinc-400 mb-6"
            >
              {personalInfo.heroSubtitle}
            </h2>

            {/* Short Introduction */}
            <p
              id="hero-intro"
              className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8"
            >
              {personalInfo.heroIntro}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                id="hero-cta-projects"
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white text-black hover:bg-zinc-200 transition-all duration-200 shadow-lg shadow-white/10 hover:shadow-white/20 hover:-translate-y-0.5"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-cta-contact"
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-zinc-950 hover:bg-zinc-900 text-zinc-200 hover:text-white border border-zinc-800 hover:border-zinc-600 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>Connect with Me</span>
              </a>
            </div>

            {/* Focus highlights: Current Phase, Technical Mastery, Startup Vision */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-lg border-t border-zinc-800/80 pt-6 text-left">
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-zinc-400">Current Phase</span>
                <span className="text-sm font-bold text-white">1st Year B.Tech CSE</span>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-zinc-400">Technical Goal</span>
                <span className="text-sm font-bold text-zinc-200">Programming Expert</span>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-zinc-400">Venture Vision</span>
                <span className="text-sm font-bold text-zinc-300">Launch AI Startup</span>
              </div>
            </div>

          </div>

          {/* AI / Coding Tech Visual Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              id="hero-terminal-card"
              className="w-full max-w-md bg-zinc-950 backdrop-blur-xl border border-zinc-800/90 rounded-2xl p-5 shadow-2xl shadow-black relative overflow-hidden group hover:border-zinc-600 transition-colors"
            >
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-600" />
                  <div className="w-3 h-3 rounded-full bg-zinc-500" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                  <Terminal className="w-3.5 h-3.5 text-white" />
                  <span>santhosh@founder-cse:~$</span>
                </div>
                <div className="text-[10px] font-mono text-zinc-500">python3</div>
              </div>

              {/* Terminal Code Body */}
              <div className="space-y-2.5 font-mono text-xs leading-relaxed">
                <p className="text-zinc-400 flex items-center gap-2">
                  <span className="text-white">❯</span> cat profile.json
                </p>
                
                <div className="p-3 rounded-lg bg-black border border-zinc-800/90 text-zinc-300 space-y-1">
                  <div><span className="text-zinc-400">"student"</span>: <span className="text-white">"M. Santhosh"</span>,</div>
                  <div><span className="text-zinc-400">"academic_program"</span>: <span className="text-zinc-200">"B.Tech Computer Science"</span>,</div>
                  <div><span className="text-zinc-400">"technical_target"</span>: <span className="text-white font-semibold">"Programming Expert"</span>,</div>
                  <div><span className="text-zinc-400">"startup_vision"</span>: <span className="text-white font-semibold">"Launch Own AI Startup"</span>,</div>
                  <div><span className="text-zinc-400">"active_explorations"</span>: [</div>
                  <div className="pl-4 text-zinc-300">"Python Systems", "SkillPath AI", "n8n Pipelines", "GenAI"</div>
                  <div>]</div>
                </div>

                <p className="text-zinc-400 flex items-center gap-2 pt-1">
                  <span className="text-white">❯</span> python3 -m startup.vision
                </p>

                <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-white mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Dual Mission:</span> Mastering software engineering to expert depth while designing scalable products for my future tech startup.
                  </div>
                </div>

                {/* Floating Micro Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] bg-zinc-900 border border-zinc-800 text-zinc-300">
                    <Code2 className="w-3 h-3 text-white" />
                    Programming Expert
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] bg-zinc-900 border border-zinc-800 text-zinc-300">
                    <Rocket className="w-3 h-3 text-white" />
                    Startup Founder Goal
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] bg-zinc-900 border border-zinc-800 text-zinc-300">
                    <Cpu className="w-3 h-3 text-white" />
                    AI Systems
                  </span>
                </div>
              </div>

              {/* Decorative accent subtle monochrome glow on card */}
              <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-white/[0.03] rounded-full blur-xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
