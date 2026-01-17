import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

type ProjectCategory = 'web' | 'ml' | 'data';

interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  // Web Development Projects
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack MERN application with real-time inventory management, payment integration, and admin dashboard.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY4NTc3ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'Real-time analytics dashboard with WebSocket integration, featuring user engagement metrics and content scheduling.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY4NTUwNzgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Task Management API',
    description: 'RESTful API with JWT authentication, role-based access control, and comprehensive documentation.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY4NTc3ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Python', 'FastAPI', 'Redis', 'Docker'],
    githubUrl: '#',
  },

  // Machine Learning Projects
  {
    id: 4,
    title: 'Image Classification CNN',
    description: 'Convolutional neural network achieving 95% accuracy on custom dataset using transfer learning with ResNet50.',
    category: 'ml',
    image: 'https://images.unsplash.com/photo-1761740533449-b8d4385e60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3Njg1ODU2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['PyTorch', 'CNN', 'Transfer Learning', 'Python'],
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'NLP Sentiment Analyzer',
    description: 'Transformer-based model for multi-class sentiment analysis with real-time inference API and web interface.',
    category: 'ml',
    image: 'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBhaXxlbnwxfHx8fDE3Njg2MjA2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['TensorFlow', 'BERT', 'NLP', 'Flask'],
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Predictive Maintenance System',
    description: 'Time-series forecasting model for equipment failure prediction using LSTM networks and IoT sensor data.',
    category: 'ml',
    image: 'https://images.unsplash.com/photo-1761740533449-b8d4385e60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3Njg1ODU2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['PyTorch', 'LSTM', 'Time-Series', 'MLOps'],
    githubUrl: '#',
  },

  // Data Analytics Projects
  {
    id: 7,
    title: 'Sales Analytics Dashboard',
    description: 'Interactive Tableau dashboard with KPI tracking, revenue forecasting, and customer segmentation analysis.',
    category: 'data',
    image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2ODU5ODY0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Python', 'Pandas', 'Plotly', 'SQL'],
    liveUrl: '#',
  },
  {
    id: 8,
    title: 'Customer Churn Analysis',
    description: 'Comprehensive analysis identifying key churn predictors and actionable insights to reduce customer attrition by 23%.',
    category: 'data',
    image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2ODU5ODY0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['R', 'ggplot2', 'Scikit-Learn', 'Statistics'],
    githubUrl: '#',
  },
  {
    id: 9,
    title: 'ETL Pipeline & Visualization',
    description: 'Automated data pipeline processing 1M+ daily records with Power BI dashboards for executive reporting.',
    category: 'data',
    image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2ODU5ODY0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Apache Airflow', 'PostgreSQL', 'Power BI', 'Python'],
    githubUrl: '#',
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('web');

  const filteredProjects = projects.filter(p => p.category === activeCategory);

  const categories = [
    { id: 'web' as ProjectCategory, label: 'Web Development' },
    { id: 'ml' as ProjectCategory, label: 'Machine Learning' },
    { id: 'data' as ProjectCategory, label: 'Data Analytics' },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A showcase of my work across different domains
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#7B2CBF] text-white shadow-lg shadow-[#7B2CBF]/30'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-[#7B2CBF]/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#7B2CBF]/20"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#7B2CBF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs bg-[#7B2CBF]/20 text-[#7B2CBF] border border-[#7B2CBF]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#7B2CBF] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#7B2CBF] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7B2CBF]/0 to-[#7B2CBF]/0 group-hover:from-[#7B2CBF]/5 group-hover:to-[#7B2CBF]/10 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
