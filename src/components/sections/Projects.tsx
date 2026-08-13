import { motion } from 'framer-motion'
import { FaArrowUpRightFromSquare, FaCode } from "react-icons/fa6";
import { Container } from '../common/Container'
import { SectionTitle } from '../common/SectionTitle'
import { Badge } from '../common/Badge'
import { Button } from '../common/Button'
import { ProjectIcon } from '../common/ProjectIcon'
import { projects, featuredProject } from '../../data/projects'
import { openPopup } from '../../utils/helpers'

export function Projects() {

  return (
    <section id="projects" className="pt-6 pb-24">
      <Container>
        <SectionTitle eyebrow="Work" title="Featured Projects" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl mb-16 bg-theme-card border border-emerald-400/50 transition-all duration-300 hover:scale-[1.01]"
        >
          <div className="absolute inset-0">
            <img
              src='/portfolio/FLD.png'
              alt=""
              className="w-full h-full object-cover object-center opacity-100"
            />
            <div className="absolute inset-0 bg-linear-to-r from-theme-card via-theme-card/90 to-theme-card/60" />
          </div>

          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-emerald-400/10 blur-2xl" />
          <div className="absolute -bottom-20 -left-10 w-52 h-52 rounded-full bg-teal-400/10 blur-2xl" />

          <div className="relative grid md:grid-cols-[auto,1fr] gap-8 p-8 md:p-10">
            <div className="flex md:flex-col items-center md:items-start gap-4 md:w-40 shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center">
                <ProjectIcon icon={featuredProject.icon} />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 border border-emerald-400/40 rounded-full px-3 py-1">
                Live &amp; Hosted
              </span>
            </div>

            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-theme-text mb-3">{featuredProject.title}</h3>
              <p className="font-sans text-theme-muted mb-5 max-w-2xl">{featuredProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.tech.map((t) => (
                  <Badge key={t} label={t} />
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="fill" className="cursor-pointer" onClick={() => openPopup(featuredProject.demo!)}>
                  <span className="flex items-center gap-2"><FaArrowUpRightFromSquare size={16} /> Live Demo</span>
                </Button>
                <Button variant="outline" className="cursor-pointer" onClick={() => openPopup(featuredProject.github)}>
                  <span className="flex items-center gap-2"><FaCode size={16} /> View Code</span>
                </Button>
                <div className="font-mono text-xs text-theme-muted flex gap-3 ml-auto">
                  <span>{featuredProject.language}</span>
                  <span>·</span>
                  <span>Updated {featuredProject.updated}</span>
                  <span>·</span>
                  <span>{featuredProject.license}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden bg-theme-card border border-theme-border rounded-2xl p-6 flex flex-col transition-all duration-300 hover:border-emerald-400 hover:scale-[1.03]"
            >
              <div className="relative flex items-start justify-between mb-5 z-10">
                <div className="w-11 h-11 rounded-xl bg-emerald-400/10 flex items-center justify-center">
                  <ProjectIcon icon={project.icon} />
                </div>

                <FaCode
                  size={18}
                  className="peer text-theme-muted hover:{text-emerald-400, scale-120} transition-colors cursor-pointer"
                  onClick={() => openPopup(project.github)}
                />

                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-400/5 rounded-bl-full pointer-events-none transition-all duration-300 peer-hover:bg-emerald-400/20 -mr-6 -mt-6" />
              </div>

              <h3 className="font-display text-xl font-bold text-theme-text mb-2">{project.title}</h3>
              <p className="font-sans text-sm text-theme-muted mb-5 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <Badge key={t} label={t} />
                ))}
              </div>
              <div className="flex items-center gap-3 font-mono text-xs text-theme-muted pt-4 border-t border-theme-border">
                <span>{project.language}</span>
                <span>·</span>
                <span>Updated {project.updated}</span>
                <span>·</span>
                <span>{project.license}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
