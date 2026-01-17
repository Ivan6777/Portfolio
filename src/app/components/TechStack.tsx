import { Code2, Brain, Database, Layers, Cpu, BarChart3 } from 'lucide-react';

const technologies = [
  { name: 'Python', icon: Code2, color: '#7B2CBF' },
  { name: 'JavaScript', icon: Code2, color: '#7B2CBF' },
  { name: 'React', icon: Layers, color: '#7B2CBF' },
  { name: 'PyTorch', icon: Brain, color: '#7B2CBF' },
  { name: 'Pandas', icon: Database, color: '#7B2CBF' },
  { name: 'TensorFlow', icon: Cpu, color: '#7B2CBF' },
  { name: 'Node.js', icon: Cpu, color: '#7B2CBF' },
  { name: 'SQL', icon: Database, color: '#7B2CBF' },
  { name: 'Scikit-Learn', icon: BarChart3, color: '#7B2CBF' },
  { name: 'TypeScript', icon: Code2, color: '#7B2CBF' },
  { name: 'Docker', icon: Layers, color: '#7B2CBF' },
  { name: 'MongoDB', icon: Database, color: '#7B2CBF' },
];

export function TechStack() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Tech Stack & Skills
        </h2>

        {/* Grid of tech cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="group relative"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {/* Glassmorphism card */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-[#7B2CBF]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7B2CBF]/20">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7B2CBF]/0 to-[#7B2CBF]/0 group-hover:from-[#7B2CBF]/10 group-hover:to-[#7B2CBF]/5 transition-all duration-300"></div>
                  
                  {/* Icon */}
                  <div className="relative flex flex-col items-center gap-3">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#7B2CBF]/20 group-hover:bg-[#7B2CBF]/30 transition-colors">
                      <Icon className="w-6 h-6 text-[#7B2CBF]" />
                    </div>
                    
                    {/* Tech name */}
                    <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors text-center">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
