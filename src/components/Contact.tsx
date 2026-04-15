// src/components/Contact.tsx
import { useState, useRef } from 'react';

interface FormState {
  name:    string;
  email:   string;
  message: string;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

interface ContactProps {
  email:        string;
  github:       string;
  linkedin:     string;
  fullName:     string;
  availability: string;
}

export default function Contact({ email, github, linkedin, fullName, availability }: ContactProps) {
  const [form, setForm]       = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus]   = useState<Status>('idle');
  const [focused, setFocused] = useState<string | null>(null);
  const formRef               = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Error sending email');
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission failed:', error);
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inputBase =
    'w-full bg-white/[0.04] border rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-600 outline-none transition-all duration-300 font-sans';
  const inputIdle  = 'border-white/10 hover:border-white/20';
  const inputFocus = 'border-indigo-500/60 bg-white/[0.06] shadow-[0_0_0_3px_rgba(99,102,241,0.12)]';

  // Derive display-friendly strings from props
  const githubHandle   = github.replace('https://github.com/', 'github.com/');
  const linkedinHandle = linkedin.replace('https://www.linkedin.com/', 'linkedin.com/').replace('https://linkedin.com/', 'linkedin.com/');

  return (
    <section id="contact" className="relative py-16 md:py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="mb-16 text-center reveal">
          <p className="text-indigo-400 font-medium text-sm tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold text-white mb-4">
            Contact Me
          </h2>
          <p className="text-slate-400 text-lg max-w-lg mx-auto leading-relaxed">
            Whether you have an opportunity, a question, or just want to say hello — I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">

          {/* ── Left: info ── */}
          <div className="reveal space-y-8">

            {/* Availability badge — driven by personal.availability */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass-light border border-emerald-500/20 text-sm text-slate-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              {availability}
            </div>

            <div>
              <h3 className="font-display text-2xl text-white font-medium mb-3">
                Let's build something great together.
              </h3>
              <p className="text-slate-400 leading-relaxed">
                I'm actively exploring new opportunities. Whether it's a full-time role, a short contract, or a side project — reach out and let's talk.
              </p>
            </div>

            {/* Email link */}
            <div className="space-y-4">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl glass-light border border-white/10 flex items-center justify-center group-hover:border-indigo-500/40 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Email</p>
                  <p className="text-slate-300 text-sm group-hover:text-white transition-colors">{email}</p>
                </div>
              </a>
            </div>

            {/* Social links — all from props */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-600 mb-4">Find me online</p>
              <div className="flex gap-3">

                {/* GitHub */}
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass-light border border-white/10 hover:border-indigo-500/30 text-slate-400 hover:text-white transition-all duration-300 hover:shadow-[0_0_16px_rgba(99,102,241,0.2)] text-sm font-medium"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>

                {/* LinkedIn */}
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass-light border border-white/10 hover:border-indigo-500/30 text-slate-400 hover:text-white transition-all duration-300 hover:shadow-[0_0_16px_rgba(99,102,241,0.2)] text-sm font-medium"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>

              {/* Handle display */}
              <div className="mt-3 space-y-1">
                <p className="text-slate-600 text-xs font-mono">{githubHandle}</p>
                <p className="text-slate-600 text-xs font-mono">{linkedinHandle}</p>
              </div>
            </div>

            {/* Decorative quote */}
            <blockquote className="pl-4 border-l-2 border-indigo-700/50 text-slate-500 text-sm italic leading-relaxed">
              "The best time to start building was yesterday. The second best is right now."
            </blockquote>
          </div>

          {/* ── Right: form ── */}
          <div className="reveal" data-delay="0.15">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative rounded-2xl overflow-hidden"
              noValidate
            >
              <div
                className="glass p-8 rounded-2xl border border-white/[0.08]"
                style={{ background: 'linear-gradient(135deg, rgba(13,15,43,0.7) 0%, rgba(19,21,77,0.5) 100%)' }}
              >
                {/* Top gradient accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.6), rgba(139,92,246,0.6), transparent)' }}
                ></div>

                <div className="space-y-5">

                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      placeholder="Jane Smith"
                      required
                      className={`${inputBase} ${focused === 'name' ? inputFocus : inputIdle}`}
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      placeholder="you@company.com"
                      required
                      className={`${inputBase} ${focused === 'email' ? inputFocus : inputIdle}`}
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      placeholder={`Tell ${fullName.split(' ')[0]} about the opportunity, project, or just say hello...`}
                      rows={5}
                      required
                      className={`${inputBase} resize-none ${focused === 'message' ? inputFocus : inputIdle}`}
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === 'sending' || status === 'success'}
                    className="relative w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 group-hover:from-indigo-500 group-hover:to-violet-500 transition-all duration-300"></span>
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)' }}
                    ></span>

                    <span className="relative flex items-center gap-2">
                      {status === 'sending' && (
                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      )}
                      {status === 'success' && (
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      {status === 'idle' && (
                        <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      )}
                      {status === 'idle'    && 'Send Message'}
                      {status === 'sending' && 'Sending...'}
                      {status === 'success' && 'Message Sent!'}
                      {status === 'error'   && 'Try Again'}
                    </span>
                  </button>

                  {status === 'success' && (
                    <p className="text-center text-emerald-400 text-sm">
                      ✓ Thanks! I'll get back to you within 24 hours.
                    </p>
                  )}

                  <p className="text-center text-slate-600 text-xs">
                    No spam, no newsletters. Just a direct reply from me.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* BG accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom, rgba(99,102,241,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      ></div>
    </section>
  );
}
