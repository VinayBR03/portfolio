import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiMail } from 'react-icons/fi'
import { Container } from '../common/Container'
import { SectionTitle } from '../common/SectionTitle'
import { Button } from '../common/Button'
import { SocialLinks } from '../common/SocialLinks'
import { socials } from '../../data/social'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY
const OPEN_TO_WORK = import.meta.env.VITE_OPEN_TO_WORK === 'true'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const formData = new FormData(e.currentTarget)
    formData.append('access_key', WEB3FORMS_KEY)

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    if (res.ok) {
      setStatus('sent')
      e.currentTarget.reset()
    } else {
      setStatus('idle')
    }
  }

  return (
    <section id="contact" className="pt-6 pb-8">
      <Container className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle eyebrow="Contact" title="Let's Build Something" />

          {OPEN_TO_WORK && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/40"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="font-mono text-xs text-emerald-400">Looking for new opportunities</span>
            </motion.div>
          )}
          <p className="font-sans text-theme-muted text-lg mb-4 max-w-md">
            Have a project in mind, a research idea, or just want to talk AI and edge systems? My inbox is always
            open.
          </p>

          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3 text-theme-muted font-sans">
              <a href={`mailto:${socials.email}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 whitespace-nowrap">
                <FiMail size={18} className="text-emerald-400" />
                <span>{socials.email}</span>
              </a>
            </div>
            <div className="flex items-center gap-3 text-theme-muted font-sans">
              <FiMapPin size={18} className="text-emerald-400" /> {socials.location}
            </div>
          </div>

          <p className="font-mono text-xs uppercase tracking-widest text-theme-muted mb-3">Find me on</p>
          <SocialLinks />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-4 bg-theme-card border border-theme-border rounded-2xl p-8 md:mt-16"
        >
          <input
            name="name"
            required
            placeholder="Name"
            autoComplete="name"
            className="w-full px-4 py-3 rounded-lg bg-theme-bg border border-theme-border text-theme-text font-sans focus:outline-none focus:border-emerald-400"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            autoComplete="email"
            className="w-full px-4 py-3 rounded-lg bg-theme-bg border border-theme-border text-theme-text font-sans focus:outline-none focus:border-emerald-400"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Message"
            className="w-full px-4 py-3 rounded-lg bg-theme-bg border border-theme-border text-theme-text font-sans focus:outline-none focus:border-emerald-400"
          />
          <Button type="submit" variant="fill" disabled={status === 'sending'} className="w-full">
            {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent ✓' : 'Send Message'}
          </Button>
        </motion.form>
      </Container>
    </section>
  )
}
