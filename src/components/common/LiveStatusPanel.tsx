import { motion } from 'framer-motion'
import { FiActivity } from 'react-icons/fi'

const bars = [0.4, 0.7, 0.3, 0.9, 0.5, 0.8, 0.35, 0.65, 0.5, 0.85, 0.4, 0.6]

const metrics = [
  { label: 'Models Live', value: '4' },
  { label: 'Avg. Inference', value: '38ms' },
  { label: 'Edge Uptime', value: '99.9%' },
]

export function LiveStatusPanel() {
  return (
    <div className="bg-theme-card border border-theme-border rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <p className="font-mono text-xs text-theme-muted">System status</p>
        </div>
        <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-emerald-400 border border-emerald-400/40 rounded-full px-2 py-1">
          <FiActivity size={11} /> Online
        </span>
      </div>

      <div className="flex items-end gap-1.5 h-20 mb-6">
        {bars.map((h, i) => (
          <motion.span
            key={i}
            className="flex-1 rounded-t-sm bg-linear-to-t from-emerald-400 to-teal-300"
            style={{ transformOrigin: 'bottom' }}
            initial={{ scaleY: h }}
            animate={{ scaleY: [h, h * 0.4, h * 1.1, h * 0.6, h] }}
            transition={{
              duration: 2.4 + (i % 4) * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.12,
            }}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3">
        {metrics.map((m) => (
          <div key={m.label} className="text-center">
            <p className="font-display font-bold text-lg text-theme-text">{m.value}</p>
            <p className="font-mono text-[10px] text-theme-muted uppercase tracking-wide">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
