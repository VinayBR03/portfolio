import { FaXTwitter, FaGithub, FaLinkedin, FaStackOverflow, FaReddit } from 'react-icons/fa6'
import { socials } from '../../data/social'

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a href={socials.github} target="_blank" rel="noreferrer" className="text-theme-muted hover:text-emerald-400 transition-colors">
        <FaGithub size={20} title="GitHub" />
      </a>
      <a href={socials.linkedin} target="_blank" rel="noreferrer" className="text-theme-muted hover:text-emerald-400 transition-colors">
        <FaLinkedin size={20} title="LinkedIn" />
      </a>
      <a href={socials.twitter} target="_blank" rel="noreferrer" className="translate-y-1px text-theme-muted hover:text-emerald-400 transition-colors">
        <FaXTwitter size={20} title="X (formerly Twitter)" />
      </a>
      <a href={socials.stackoverflow} target="_blank" rel="noreferrer" className="text-theme-muted hover:text-emerald-400 transition-colors">
        <FaStackOverflow size={20} title="Stack Overflow" />
      </a>
      <a href={socials.reddit} target="_blank" rel="noreferrer" className="text-theme-muted hover:text-emerald-400 transition-colors">
        <FaReddit size={20} title="Reddit" />
      </a>
    </div>
  )
}