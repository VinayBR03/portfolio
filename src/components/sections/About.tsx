import { motion } from 'framer-motion'
import { Container } from '../common/Container'
import { SectionTitle } from '../common/SectionTitle'

export function About() {
  return (
    <section id="about" className="pt-6 pb-24">
      <Container className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle eyebrow="About" title="Who I Am" />
          <div className="space-y-4 font-sans text-theme-muted leading-relaxed text-lg">
            <p>
              I'm a Computer Science and Engineering graduate from Presidency University, Bengaluru, specializing
              in AI & ML, class of 2026.
            </p>
            <p>
              My focus spans AI & ML model development and full-stack engineering — taking a model from training
              to production, whether that means a web app, a mobile app, a desktop tool, or an embedded device
              running at the edge.
            </p>
            <p>
              Outside of engineering, I'm an audiophile who can spend hours going through the same genre across
              different masters, just to hear how each one breathes.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="absolute -bottom-8 -right-6 w-48 h-48 rounded-full bg-teal-400/20 blur-3xl" />

          <div className="absolute -inset-3 rounded-4xl border border-emerald-400/30 rotate-3" />

          <div className="relative rounded-4xl overflow-hidden border border-theme-border -rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src='/portfolio/profile.jpg'
              alt="Vinay B R"
              className="w-full aspect-4/5 object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
