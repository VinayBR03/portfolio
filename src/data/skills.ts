import Git from '@devicon/react/git/original'
import Github from '@devicon/react/github/original'
import Docker from '@devicon/react/docker/original'
import ReactIcon from '@devicon/react/react/original'
import Postgresql from '@devicon/react/postgresql/original'
import Pytorch from '@devicon/react/pytorch/original'
import Tailwindcss from '@devicon/react/tailwindcss/original'
import Redis from '@devicon/react/redis/original'
import Vitejs from '@devicon/react/vitejs/original'
import Scikitlearn from '@devicon/react/scikitlearn/original'
import Opencv from '@devicon/react/opencv/original'
import Firebase from '@devicon/react/firebase/original'
import Fastapi from '@devicon/react/fastapi/original'
import Sqlalchemy from '@devicon/react/sqlalchemy/original'
import Tensorflow from '@devicon/react/tensorflow/original'
import Apachekafka from '@devicon/react/apachekafka/original'

import Onnx from '@thesvg/react/onnx'
import Spacy from '@thesvg/react/spacy'
import Mqtt from '@thesvg/react/mqtt'
import Huggingface from '@thesvg/react/hugging-face'
import Supabase from '@thesvg/react/supabase'
import Pydantic from '@thesvg/react/pydantic'
import Polars from '@thesvg/react/polars'
import Expo from '@thesvg/react/expo'

export interface SkillItem {
  name: string
  Icon: React.ComponentType<{ size?: number; className?: string }>
  variant: 'devicon' | 'thesvg'
  darkFix?: string // extra className applied only to fix black-only icons in dark theme
}

export const skills: Record<string, SkillItem[]> = {
  'AI & Deep Learning': [
    { name: 'PyTorch', Icon: Pytorch, variant: 'devicon' },
    { name: 'Hugging Face', Icon: Huggingface, variant: 'thesvg' },
    { name: 'scikit-learn', Icon: Scikitlearn, variant: 'devicon' },
    { name: 'OpenCV', Icon: Opencv, variant: 'devicon' },
    { name: 'Polars', Icon: Polars, variant: 'thesvg' },
    { name: 'TensorFlow', Icon: Tensorflow, variant: 'devicon' },
    { name: 'Spacy', Icon: Spacy, variant: 'thesvg' },
    { name: 'ONNX', Icon: Onnx, variant: 'thesvg' },
  ],
  'Full-Stack & Systems': [
    { name: 'React', Icon: ReactIcon, variant: 'devicon' },
    { name: 'FastAPI', Icon: Fastapi, variant: 'devicon' },
    { name: 'PostgreSQL', Icon: Postgresql, variant: 'devicon' },
    { name: 'Pydantic', Icon: Pydantic, variant: 'thesvg' },
    {
      name: 'SQLAlchemy',
      Icon: Sqlalchemy,
      variant: 'devicon',
      darkFix: 'dark:[&_path:nth-child(1)]:fill-white',
    },
    { name: 'Redis', Icon: Redis, variant: 'devicon' },
    { name: 'Tailwind CSS', Icon: Tailwindcss, variant: 'devicon' },
    { name: 'Vite', Icon: Vitejs, variant: 'devicon' },
  ],
  'Tools & Integrations': [
    { name: 'Git', Icon: Git, variant: 'devicon' },
    {
      name: 'GitHub',
      Icon: Github,
      variant: 'devicon',
      darkFix: 'dark:[&_path]:fill-white',
    },
    { name: 'Docker', Icon: Docker, variant: 'devicon' },
    {
      name: 'Apache Kafka',
      Icon: Apachekafka,
      variant: 'devicon',
      darkFix: 'dark:[&_path]:fill-white',
    },
    { name: 'MQTT', Icon: Mqtt, variant: 'thesvg' },
    { name: 'Supabase', Icon: Supabase, variant: 'thesvg' },
    { name: 'Firebase', Icon: Firebase, variant: 'devicon' },
    {
      name: 'Expo',
      Icon: Expo,
      variant: 'thesvg',
      darkFix: 'dark:[&_path]:fill-white',
    },
  ],
}
