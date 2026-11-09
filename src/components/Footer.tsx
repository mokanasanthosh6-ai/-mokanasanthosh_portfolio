import { ArrowUp, Terminal, Linkedin, Github, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="border-t border-zinc-900 bg-black text-zinc-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white text-sm block">
                {personalInfo.name}
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                First-Year B.Tech CSE • Aspiring Programming Expert & Tech Founder
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-5 text-xs text-zinc-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-white transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              id="footer-link-linkedin"
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-500 text-zinc-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="footer-link-github"
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-500 text-zinc-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="footer-link-gmail"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.emailPlaceholder)}&su=Hello%20M.%20Santhosh`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open in Gmail (Chrome)"
              title="Open in Gmail (Chrome)"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-500 text-zinc-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              id="btn-back-to-top"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-white text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p id="footer-copyright-text">
            © 2026 M. Santhosh. Built with curiosity and code.
          </p>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-400">
            <span>Focused on genuine learning</span>
            <span>•</span>
            <span className="text-white font-medium">Programming Mastery • Tech Startup Vision</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
