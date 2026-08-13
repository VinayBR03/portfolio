export interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  demo?: string
  language: string
  updated: string
  license: string
  icon: 'shield' | 'radio' | 'brain' | 'pulse'
}
