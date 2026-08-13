import type { Project } from '../types/project'

export const featuredProject: Project = {
  title: 'Face Liveness Detection',
  description: 'End-to-end anti-spoofing system using a multi-modal PyTorch model (MobileNetV3+LSTM) that analyzes video clips and sensor data, converted through ONNX and TFLite for deployment in a Flask app.',
  tech: ['PyTorch', 'MobileNetV3', 'LSTM', 'ONNX', 'TFLite', 'Flask'],
  github: 'https://github.com/VinayBR03/Face-Liveness-Detection',
  demo: 'https://face-liveness-detection-7prl.onrender.com',
  language: 'Python',
  updated: 'Jul 2026',
  license: 'MIT',
  icon: 'shield',
}

export const projects: Project[] = [
  {
    title: 'Smart Tourist Safety',
    description: 'Safety ecosystem for tourist tracking, blockchain-verified digital IDs, smart wristband monitoring, SOS dispatch, geofencing alerts, and tamper-proof incident logs.',
    tech: ['FastAPI', 'IoT', 'Kafka', 'PostGIS', 'Redis', 'React Native'],
    github: 'https://github.com/VinayBR03/Smart-Tourist-Safety',
    language: 'Python',
    updated: 'Jul 2026',
    license: 'MIT',
    icon: 'radio',
  },
  {
    title: 'Math Learning Assessment',
    description: 'Machine learning pipeline for predicting student mathematics performance with preprocessing, feature engineering, PCA, SMOTE, and ensemble stacking classifiers.',
    tech: ['ML', 'PCA', 'SMOTE', 'Classification', 'Ensembles'],
    github: 'https://github.com/VinayBR03/Math_Learning_Assessment',
    language: 'Jupyter Notebook',
    updated: 'Aug 2025',
    license: 'MIT',
    icon: 'brain',
  },
  {
    title: 'ICU Decision Support RL',
    description: 'Clinical decision-support prototype using reinforcement learning and Q-learning to recommend treatment strategies through an interactive Flask application.',
    tech: ['Q-Learning', 'Reinforcement Learning', 'Flask', 'Healthcare Analytics'],
    github: 'https://github.com/VinayBR03/ICU-Decision-Support-System-RL',
    language: 'Python',
    updated: 'Sept 2025',
    license: 'MIT',
    icon: 'pulse',
  },
  {
    title: 'Domestic Violence Risk Detector',
    description: 'NLP-based risk assessment tool fine-tuning BERT for multi-class risk classification with speech-to-text preprocessing for audio input support.',
    tech: ['BERT', 'Hugging Face', 'Flask', 'NLP'],
    github: 'https://github.com/VinayBR03/bert-domestic-violence-risk-detector',
    language: 'Jupyter Notebook',
    updated: 'Jul 2026',
    license: 'MIT',
    icon: 'brain',
  },
]
