import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../../hooks/useTheme'

export function ThemeToggle() {
  const { dark, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2 rounded-full border border-theme-border hover:border-emerald-400 transition-colors"
    >
      {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  )
}