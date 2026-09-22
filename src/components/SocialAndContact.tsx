import { useState } from 'react';
import { 
  Linkedin, 
  Github, 
  Mail, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function SocialAndContact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', subject: '', message: '' });
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.emailPlaceholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // Open user's default email client with drafted email safely
    const mailtoUrl = `mailto:${personalInfo.emailPlaceholder}?subject=${encodeURIComponent(
      formState.subject || 'Portfolio Inquiry / Collaboration'
    )}&body=${encodeURIComponent(
      `Hi Santhosh,\n\nMy name is ${formState.name}.\n\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 4000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Contact & Socials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            "I'm always interested in learning, building new projects, and connecting with people interested in technology and AI."
          </p>
        </div>

        {/* Two-Column Grid: Social Links + Direct Inquiry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Social Links & Email Placeholder */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-md shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Find Me On
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Connect with me professionally or check out my code repositories and active commits.
              </p>

              {/* Social Buttons */}
              <div className="space-y-3.5">
                
                {/* LinkedIn Button */}
                <a
                  id="link-social-linkedin"
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-[#0077b5]/10 border border-[#0077b5]/30 hover:border-[#0077b5] hover:bg-[#0077b5]/20 text-white transition-all duration-200 group shadow-sm"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#0077b5] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                      <Linkedin className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors">
                        LinkedIn
                      </div>
                      <div className="text-xs text-slate-400">
                        santhosh-mokana-000023418
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>

                {/* GitHub Button */}
                <a
                  id="link-social-github"
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 hover:border-slate-500 hover:bg-slate-800/70 text-white transition-all duration-200 group shadow-sm"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                      <Github className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors">
                        GitHub Profile
                      </div>
                      <div className="text-xs text-slate-400">
                        mokanasanthosh6-ai
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>

                {/* Email Placeholder Box with 1-Click Copy */}
                <div
                  id="contact-email-container"
                  className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-left"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      Email Address (Direct)
                    </span>
                    <span className="text-[10px] text-cyan-400 font-mono">1-Click Copy</span>
                  </div>

                  <div className="flex items-center justify-between gap-2 mt-1">
                    <a
                      href={`mailto:${personalInfo.emailPlaceholder}`}
                      className="text-sm font-mono text-cyan-300 hover:underline truncate"
                      title="Click to send email"
                    >
                      {personalInfo.emailPlaceholder}
                    </a>

                    <button
                      id="btn-copy-email"
                      type="button"
                      onClick={handleCopyEmail}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer border border-slate-700"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Feel free to reach out regarding student projects, study collaborations, or tech discussions.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Quick Message Composer */}
          <div className="lg:col-span-6">
            <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-md shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                Drop a Quick Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Have a question, feedback on my projects, or an AI learning resource to share?
              </p>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <label htmlFor="contact-sender-name" className="block text-xs font-medium text-slate-300 mb-1">
                    Your Name
                  </label>
                  <input
                    id="contact-sender-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-sender-subject" className="block text-xs font-medium text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    id="contact-sender-subject"
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Project Feedback / AI Discussion"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-sender-message" className="block text-xs font-medium text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="contact-sender-message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Write your note here..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  id="btn-submit-contact-form"
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white hover:from-cyan-400 hover:to-purple-500 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via Email Client</span>
                </button>

                {sentNotice && (
                  <p className="text-xs text-emerald-400 text-center animate-in fade-in">
                    ✓ Opening your email client to dispatch the message to Santhosh!
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
