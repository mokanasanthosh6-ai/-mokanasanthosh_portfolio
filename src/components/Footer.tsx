import { ArrowUp, Heart, Terminal, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="border-t border-slate-800/80 bg-[#060911] text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white text-sm block">
                {personalInfo.name}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                First-Year B.Tech CSE • Aspiring AI Engineer
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400">
            <a href="#home" className="hover:text-cyan-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#journey" className="hover:text-cyan-300 transition-colors">Journey</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </nav>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              id="footer-link-linkedin"
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#0077b5] text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="footer-link-github"
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-500 text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              id="btn-back-to-top"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright notice specified in prompt */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p id="footer-copyright-text">
            © 2026 M. Santhosh. Built with curiosity and code.
          </p>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
            <span>Focused on genuine learning</span>
            <span>•</span>
            <span className="text-cyan-400">Continuous Growth</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
