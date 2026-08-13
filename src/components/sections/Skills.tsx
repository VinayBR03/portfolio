import { motion } from 'framer-motion'
import { Container } from '../common/Container'
import { SectionTitle } from '../common/SectionTitle'
import { skills } from '../../data/skills'

const allSkills = Object.values(skills).flat()

export function Skills() {
  return (
    <section id="skills" className="pt-6 pb-24">
      <Container>
        <SectionTitle eyebrow="Stack" title="Technical Skills" />

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-8 gap-y-8 justify-items-center max-w-4xl mx-auto perspective-midrange">
          {allSkills.map(({ name, Icon, variant, darkFix }, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24, rotateX: -50 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ type: 'spring', stiffness: 140, damping: 14, delay: (idx % 10) * 0.05 }}
              className="group flex flex-col items-center gap-3 w-20"
            >
              <div className="transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-110">
                {variant === 'devicon' ? (
                  <Icon size={52} className={darkFix} />
                ) : (
                  <Icon className={`h-13 w-13 ${darkFix ?? ''}`} />
                )}
              </div>
              <span className="font-mono text-xs text-theme-muted text-center transition-colors duration-300 group-hover:text-emerald-400">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
