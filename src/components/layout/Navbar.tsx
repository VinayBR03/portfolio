import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'
import { navLinks } from '../../data/navigation'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { scrollToSection, scrollToTop, openPopup } from '../../utils/helpers'
import { ThemeToggle } from '../common/ThemeToggle'
import { SocialLinks } from '../common/SocialLinks'
import { Container } from '../common/Container'
import { cn } from '../../utils/cn'

const OPEN_TO_WORK = import.meta.env.VITE_OPEN_TO_WORK === 'true'
const RESUME_URL = 'portfolio/Resume.pdf'

export function Navbar() {
  const active = useScrollSpy(navLinks.map((l) => l.href))
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  function handleNavClick(href: string) {
    setOpen(false)
    setTimeout(() => scrollToSection(href), 300)
  }

  function handleLogoClick() {
    setOpen(false)
    scrollToTop()
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-theme-bg/80 backdrop-blur-md border-b border-theme-border">
        <Container className="flex items-center justify-between py-4">
          <button
            onClick={handleLogoClick}
            className="font-display cursor-pointer font-bold text-lg text-theme-text hover:text-emerald-400 transition-colors"
          >
            VBR
          </button>

          <div className="hidden md:flex gap-8 font-nav text-sm uppercase tracking-wide">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  'text-theme-muted cursor-pointer hover:text-emerald-400 transition-colors',
                  active === link.href && 'text-emerald-400'
                )}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="md:hidden relative z-50 w-9 h-9 flex items-center justify-center rounded-full border border-theme-border text-theme-text hover:border-emerald-400 transition-colors"
            >
              {open ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </Container>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40 bg-theme-bg backdrop-blur-xl"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-emerald-400/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-teal-400/10 blur-3xl" />
            </div>

            <div className="relative h-full flex flex-col justify-center px-8">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.08 * i }}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      'text-left font-display text-4xl font-bold py-3 text-theme-text/70 hover:text-emerald-400 transition-colors',
                      active === link.href && 'text-emerald-400'
                    )}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="mt-16 pt-8 border-t border-theme-border flex items-center justify-between"
              >
                <p className="font-mono text-xs text-theme-muted">Vinay B R</p>
                <SocialLinks />
              </motion.div>

              {OPEN_TO_WORK && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  onClick={() => { setOpen(false); openPopup(RESUME_URL) }}
                  className="relative mt-6 w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-sans font-medium text-sm text-theme-text border-2 border-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(var(--color-bg), var(--color-bg)), conic-gradient(from 0deg, #34D399, #22D3EE, #34D399)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                  }}
                >
                  <FiDownload size={16} /> Download Resume
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
