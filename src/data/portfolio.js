export const portfolioData = {
  name: 'Your Name',
  title: 'Software Engineer | AI/DevOps Specialist | Green Tech Advocate',
  bio: `Passionate software engineer with 5+ years in full-stack development, specializing in AI-driven DevOps pipelines and sustainable tech. Mentored at GreenMind Hackathon, built CodeRefiner™ for eco-optimized code. Let's build scalable, green systems together!`,
  photo: '/avatar.jpg', // Add your photo to public/
  resume: '/resume.pdf', // Add to public/
  skills: [
    { name: 'Kubernetes', icon: 'anchor', category: 'DevOps' },
    { name: 'Terraform', icon: 'file-text', category: 'DevOps' },
    { name: 'TensorFlow', icon: 'brain', category: 'AI' },
    { name: 'PyTorch', icon: 'flame', category: 'AI' },
    { name: 'Carbon Audits', icon: 'leaf', category: 'Green Tech' },
    { name: 'React', icon: 'code', category: 'Frontend' },
  ],
  projects: [
    {
      id: 'terraform-iac',
      title: 'Terraform IaC Mastery',
      description: 'Automated scalable cloud infra with green optimizations.',
      metrics: 'Uptime: 99.99% | Emissions Reduced: 15%',
      github: 'https://github.com/yourusername/terraform-iac',
      demo: 'https://demo-terraform.yoursite.com',
      image: '/project1.jpg', // Add to public/
      tech: ['Terraform', 'AWS', 'GreenOps'],
    },
    {
      id: 'k8s-pipeline',
      title: 'K8s DevOps Pipeline',
      description: 'Container orchestration for AI workloads.',
      metrics: 'Pods: 500+ | Latency: 50ms',
      github: 'https://github.com/yourusername/k8s-pipeline',
      demo: 'https://demo-k8s.yoursite.com',
      image: '/project2.jpg',
      tech: ['Kubernetes', 'Jenkins', 'Docker'],
    },
    {
      id: 'ml-scaling',
      title: 'AI Model Scaling',
      description: 'Probabilistic ML inference with DevOps integration.',
      metrics: 'Accuracy: 92% | Latency: 50ms',
      github: 'https://github.com/yourusername/ml-scaling',
      demo: 'https://demo-ml.yoursite.com',
      image: '/project3.jpg',
      tech: ['TensorFlow', 'Kubernetes', 'Prometheus'],
    },
    {
      id: 'anomaly-ai',
      title: 'AI Anomaly Detection',
      description: 'Predictive monitoring for sustainable systems.',
      metrics: 'Detections: 98% | False Positives: 2%',
      github: 'https://github.com/yourusername/anomaly-ai',
      demo: 'https://demo-anomaly.yoursite.com',
      image: '/project4.jpg',
      tech: ['PyTorch', 'Grafana', 'Carbon Tracker'],
    },
  ],
  contact: {
    email: 'your.email@example.com',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername',
    formspree: 'https://formspree.io/f/your-endpoint', // Sign up at formspree.io
  },
};