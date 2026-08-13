
import { 
  FiShield,   // Shield
  FiRadio,          // Radio
  FiActivity,      // Activity (Pulse/ECG line)
} from "react-icons/fi";

import { BiBrain } from "react-icons/bi";

import type { Project } from '../../types/project'

const icons = {
  shield: FiShield,
  radio: FiRadio,
  brain: BiBrain,
  pulse: FiActivity,
}

/*const icon = {
  shield: Shield,
  radio: Radio,
  brain: Brain,
  pulse: Activity,
}*/

export function ProjectIcon({ icon }: { icon: Project['icon'] }) {
  const Icon = icons[icon]
  return <Icon size={22} className="text-emerald-400" />
}
