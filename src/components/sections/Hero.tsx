import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import { Container } from '../common/Container'
import { Button } from '../common/Button'
import { Typewriter } from '../common/Typewriter'
import { scrollToSection, openPopup } from '../../utils/helpers'

const OPEN_TO_WORK = import.meta.env.VITE_OPEN_TO_WORK === 'true'
const RESUME_URL = '/portfolio/Resume.pdf'

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.svg
          className="absolute -top-16 -left-16 w-55 h-55 sm:w-105 sm:h-105 opacity-20"
          viewBox="0 0 400 400"
          fill="none"
          animate={{ x: [0, 25, -15, 0], y: [0, -20, 10, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        >
          <circle cx="200" cy="200" r="180" stroke="#34D399" strokeWidth="1" />
          <circle cx="200" cy="200" r="120" stroke="#2DD4BF" strokeWidth="1" />
        </motion.svg>
        <motion.svg
          className="absolute bottom-0 right-0 w-60 h-60 sm:w-125 sm:h-125 opacity-20"
          viewBox="0 0 400 400"
          fill="none"
          animate={{ x: [0, -30, 15, 0], y: [0, 20, -15, 0], rotate: [0, 6, -4, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="40" y="40" width="320" height="320" rx="40" stroke="#2DD4BF" strokeWidth="1" />
          <rect x="90" y="90" width="220" height="220" rx="30" stroke="#34D399" strokeWidth="1" />
        </motion.svg>
        <motion.svg
          className="hidden sm:block absolute top-1/3 right-1/4 w-40 h-40 opacity-10"
          viewBox="0 0 100 100"
          fill="none"
          animate={{ x: [0, -18, 12, 0], y: [0, 15, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        >
          <line x1="0" y1="0" x2="100" y2="100" stroke="#34D399" strokeWidth="1" />
          <line x1="100" y1="0" x2="0" y2="100" stroke="#34D399" strokeWidth="1" />
        </motion.svg>
        <motion.div
          className="absolute top-1/4 left-1/3 w-40 h-40 sm:w-72 sm:h-72 rounded-full bg-emerald-400/10 blur-3xl"
          animate={{ x: [0, 40, -30, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-44 h-44 sm:w-80 sm:h-80 rounded-full bg-teal-400/10 blur-3xl"
          animate={{ x: [0, -35, 25, 0], y: [0, 25, -20, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-emerald-400 text-sm md:text-base mb-4">Hi, I'm Vinay B R</p>
          <h1 className="font-display text-[11vw] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight wrap-break-words max-w-full">
            <Typewriter
              lines={[
                { text: 'I build', className: 'text-theme-text' },
                { text: 'intelligent', className: 'gradient-text' },
                { text: 'systems.', className: 'gradient-text' },
              ]}
            />
          </h1>
          <p className="font-sans text-theme-muted text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
            AI/ML developer specializing in deep learning, edge deployment, and IoT-integrated real-world solutions.
            I turn research-grade models into products people can actually use — from computer vision pipelines
            and NLP systems to full-stack apps and embedded firmware that runs reliably in the real world.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="fill" className="cursor-pointer" onClick={() => scrollToSection('#projects')}>View Projects</Button>
            {OPEN_TO_WORK ? (
              <button
                onClick={() => openPopup(RESUME_URL)}
                className="relative px-6 py-3 rounded-full font-sans font-medium text-sm text-theme-text cursor-pointer border-2 border-transparent bg-origin-border bg-clip-padding transition-opacity hover:opacity-90"
                style={{
                  backgroundImage:
                    'linear-gradient(var(--color-bg), var(--color-bg)), conic-gradient(from 0deg, #34D399, #22D3EE, #34D399)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                }}
              >
                <span className="flex items-center gap-2">
                  <FiDownload size={16} /> Resume
                </span>
              </button>
            ) : (
              <Button variant="outline" onClick={() => scrollToSection('#contact')}>Contact Me</Button>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
