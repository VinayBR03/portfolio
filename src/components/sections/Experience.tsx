import { motion } from 'framer-motion'
import { Container } from '../common/Container'
import { SectionTitle } from '../common/SectionTitle'
import { education, highlights } from '../../data/experience'

export function Experience() {
  return (
    <section id="experience" className="pt-6 pb-24">
      <Container>
        <SectionTitle eyebrow="Background" title="Education & Highlights" />
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-display font-bold text-lg text-theme-text mb-8">Education</h3>
            <div className="relative border-l border-theme-border pl-8 space-y-10">
              {education.map((e, i) => (
                <motion.div
                  key={e.school}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-9.25 top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <p className="font-mono text-xs text-emerald-400 mb-2">{e.duration}</p>
                  <p className="font-sans font-medium text-lg text-theme-text mb-1">{e.school}</p>
                  <p className="font-sans text-theme-muted">{e.degree}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg text-theme-text mb-8">Highlights</h3>
            <div className="relative border-l border-theme-border pl-8 space-y-10">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-9.25 top-1.5 w-2.5 h-2.5 rounded-full bg-teal-400" />
                  <p className="font-sans font-medium text-lg text-theme-text mb-1">{h.title}</p>
                  <p className="font-sans text-theme-muted">{h.context}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
