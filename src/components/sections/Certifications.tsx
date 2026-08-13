import { motion } from 'framer-motion'
import { FaAward, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { Container } from '../common/Container'
import { SectionTitle } from '../common/SectionTitle'
import { certifications } from '../../data/certifications'
import { openPopup } from '../../utils/helpers'

export function Certifications() {
  return (
    <section id="certifications" className="pt-6 pb-24">
      <Container>
        <SectionTitle eyebrow="Validated" title="Certifications" />
        <div className="grid md:grid-cols-2 gap-5">
          {certifications.map((cert, i) => {
            const hasLink = Boolean(cert.link)
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative overflow-hidden bg-theme-card border border-theme-border rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 hover:border-emerald-400 hover:scale-105`}
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-400/10 flex items-center justify-center">
                  <FaAward size={20} className="text-emerald-400" />
                </div>
                <div className="flex-1">
                  <p className="font-sans font-medium text-theme-text mb-1">{cert.title}</p>
                  <p className="font-mono text-xs text-theme-muted">{cert.issuer} • {cert.issuedDate}</p>
                </div>
                <FaArrowUpRightFromSquare
                  size={16}
                  onClick={() => hasLink && openPopup(cert.link)}
                  className={`shrink-0 transition-colors ${hasLink ? 'text-theme-muted hover:text-emerald-400 cursor-pointer' : 'text-theme-border'} `}
                />
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
