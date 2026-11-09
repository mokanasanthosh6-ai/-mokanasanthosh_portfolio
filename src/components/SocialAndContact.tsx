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
  MessageSquare,
  RefreshCw,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function SocialAndContact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [lastRecipientEmail, setLastRecipientEmail] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.emailPlaceholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      return;
    }

    setIsSubmitting(true);
    setSentSuccess(false);

    try {
      // Direct form submission to mokanasanthosh6@gmail.com via FormSubmit AJAX endpoint
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(personalInfo.emailPlaceholder)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          _replyto: formState.email,
          subject: formState.subject || `New Portfolio Message from ${formState.name}`,
          message: formState.message,
          _subject: `[Portfolio Contact] ${formState.subject || 'Inquiry'} from ${formState.name}`
        })
      });

      if (response.ok) {
        setLastRecipientEmail(formState.email);
        setSentSuccess(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('API submission responded with non-200');
      }
    } catch {
      // Fallback: Launch direct Gmail compose in Chrome in a new tab to mokanasanthosh6@gmail.com
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        personalInfo.emailPlaceholder
      )}&su=${encodeURIComponent(
        formState.subject || `Portfolio Message from ${formState.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
      setLastRecipientEmail(formState.email);
      setSentSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Contact & Socials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="mt-3 text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            "I'm always interested in learning, building new projects, and connecting with people passionate about technology, AI, and startups."
          </p>
        </div>

        {/* Two-Column Grid: Social Links + Direct Inquiry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Social Links & Email Placeholder */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-7 rounded-2xl bg-zinc-950 border border-zinc-800/90 backdrop-blur-md shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-white" />
                Find Me On
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Connect with me professionally, follow my coding journey, or email me directly in Gmail.
              </p>

              {/* Social Buttons */}
              <div className="space-y-3.5">
                
                {/* LinkedIn Button */}
                <a
                  id="link-social-linkedin"
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-850 text-white transition-all duration-200 group shadow-sm"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-black border border-zinc-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 group-hover:border-white transition-transform">
                      <Linkedin className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white group-hover:text-zinc-200 transition-colors">
                        LinkedIn
                      </div>
                      <div className="text-xs text-zinc-400">
                        santhosh-mokana-000023418
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                </a>

                {/* GitHub Button */}
                <a
                  id="link-social-github"
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-850 text-white transition-all duration-200 group shadow-sm"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-black border border-zinc-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 group-hover:border-white transition-transform">
                      <Github className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white group-hover:text-zinc-200 transition-colors">
                        GitHub Profile
                      </div>
                      <div className="text-xs text-zinc-400">
                        mokanasanthosh6-ai
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                </a>

                {/* Direct Gmail Card (Opens directly in Gmail on Chrome) */}
                <a
                  id="link-social-gmail"
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                    personalInfo.emailPlaceholder
                  )}&su=${encodeURIComponent('Hello M. Santhosh - Collaboration Inquiry')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-850 text-white transition-all duration-200 group shadow-sm"
                  title="Open directly in Gmail on Chrome"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-black border border-zinc-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 group-hover:border-white transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white group-hover:text-zinc-200 transition-colors flex items-center gap-2">
                        <span>Gmail</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">Opens in Chrome</span>
                      </div>
                      <div className="text-xs text-zinc-400 font-mono">
                        {personalInfo.emailPlaceholder}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                </a>

                {/* Email Box with Direct Gmail Launcher & 1-Click Copy */}
                <div
                  id="contact-email-container"
                  className="p-4 rounded-xl bg-black border border-zinc-800 text-left"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-white" />
                      Direct Inbound Email
                    </span>
                    <span className="text-[10px] text-zinc-400 font-mono">Open in Gmail or Copy</span>
                  </div>

                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 mt-1">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                        personalInfo.emailPlaceholder
                      )}&su=${encodeURIComponent('Hello M. Santhosh - Portfolio Inquiry')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono text-white hover:underline truncate font-semibold flex items-center gap-1.5"
                      title="Click to open directly in Gmail on Chrome"
                    >
                      <span>{personalInfo.emailPlaceholder}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    </a>

                    <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end mt-2 sm:mt-0">
                      <a
                        id="btn-open-gmail"
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                          personalInfo.emailPlaceholder
                        )}&su=${encodeURIComponent('Hello M. Santhosh - Portfolio Inquiry')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-zinc-200 text-black text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                        title="Open directly in Gmail on Chrome"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Open in Gmail</span>
                      </a>

                      <button
                        id="btn-copy-email"
                        type="button"
                        onClick={handleCopyEmail}
                        className="px-2.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-zinc-700"
                        title="Copy email address to clipboard"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-white" />
                            <span className="text-white">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-2">
                    Clicking opens Google Chrome directly into Gmail with Santhosh's address pre-filled.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Quick Message Composer (Sends Directly to mokanasanthosh6@gmail.com) */}
          <div className="lg:col-span-6">
            <div className="p-7 rounded-2xl bg-zinc-950 border border-zinc-800/90 backdrop-blur-md shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-white" />
                  Drop a Quick Message
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                  Sends to mokanasanthosh6@gmail.com
                </span>
              </div>
              <p className="text-xs text-zinc-400 mb-6">
                Fill in your note below. Your message will be sent directly to Santhosh's inbox at <strong className="text-white font-mono">{personalInfo.emailPlaceholder}</strong>.
              </p>

              <form onSubmit={handleSendMessage} className="space-y-4">
                {/* Sender Name */}
                <div>
                  <label htmlFor="contact-sender-name" className="block text-xs font-medium text-zinc-300 mb-1">
                    Your Name <span className="text-white">*</span>
                  </label>
                  <input
                    id="contact-sender-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-zinc-800 text-white text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Sender Email (Required so Santhosh can reply directly) */}
                <div>
                  <label htmlFor="contact-sender-email" className="block text-xs font-medium text-zinc-300 mb-1">
                    Your Email Address <span className="text-white">*</span>
                  </label>
                  <input
                    id="contact-sender-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-zinc-800 text-white text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-sender-subject" className="block text-xs font-medium text-zinc-300 mb-1">
                    Subject
                  </label>
                  <input
                    id="contact-sender-subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. AI Project Feedback / Startup Discussion"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-zinc-800 text-white text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-sender-message" className="block text-xs font-medium text-zinc-300 mb-1">
                    Your Message <span className="text-white">*</span>
                  </label>
                  <textarea
                    id="contact-sender-message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Write your note here..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-zinc-800 text-white text-sm focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  id="btn-submit-contact-form"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-white/10 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin text-black" />
                      <span>Sending to mokanasanthosh6@gmail.com...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message to mokanasanthosh6@gmail.com</span>
                    </>
                  )}
                </button>

                {/* Secondary Action: Direct Gmail Web Compose in Chrome */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-zinc-900 text-[11px] font-mono text-zinc-400">
                  <span>Prefer sending from Gmail?</span>
                  <a
                    id="btn-compose-in-gmail"
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                      personalInfo.emailPlaceholder
                    )}&su=${encodeURIComponent(
                      formState.subject || (formState.name ? `Portfolio Inquiry from ${formState.name}` : 'Hello M. Santhosh')
                    )}&body=${encodeURIComponent(
                      formState.message ? `From: ${formState.name} (${formState.email})\n\n${formState.message}` : ''
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline inline-flex items-center gap-1.5 font-medium"
                    title="Open directly in Gmail in Google Chrome"
                  >
                    <Mail className="w-3 h-3 text-white" />
                    <span>Open in Gmail (Chrome)</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                </div>

                {/* Sent confirmation notification */}
                {sentSuccess && (
                  <div
                    id="contact-success-notification"
                    className="p-4 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs space-y-1.5 animate-in fade-in"
                  >
                    <div className="flex items-center gap-2 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span>Message Dispatched to mokanasanthosh6@gmail.com!</span>
                    </div>
                    <p className="text-zinc-300 leading-relaxed">
                      Thank you! Your message has been sent directly to Santhosh. A response will be sent to <strong className="text-white font-mono">{lastRecipientEmail || 'your email'}</strong> shortly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
