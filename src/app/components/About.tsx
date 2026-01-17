import { Code2, Brain, TrendingUp, Award } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: '5+ Years',
      description: 'Full Stack Development',
    },
    {
      icon: Brain,
      title: 'ML Models',
      description: '20+ Deployed Projects',
    },
    {
      icon: TrendingUp,
      title: 'Data Insights',
      description: 'Driven Business Growth',
    },
    {
      icon: Award,
      title: 'Certified',
      description: 'AWS & Google Cloud',
    },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3Njg2NDM2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Developer"
                className="w-full rounded-xl object-cover aspect-square"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-8 -right-8 w-72 h-72 bg-[#7B2CBF] opacity-20 blur-[100px] rounded-full"></div>
            <div className="absolute -z-10 -bottom-8 -left-8 w-72 h-72 bg-[#7B2CBF] opacity-20 blur-[100px] rounded-full"></div>
          </div>

          {/* Content Section */}
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with a deep focus on building scalable web applications, 
              implementing cutting-edge machine learning solutions, and extracting actionable insights from complex datasets.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              With expertise spanning the entire development lifecycle, I specialize in creating end-to-end solutions 
              that combine modern web technologies with advanced AI/ML capabilities. My work has helped companies 
              increase efficiency by 40% through automated data pipelines and intelligent systems.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-5 hover:border-[#7B2CBF]/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#7B2CBF]/20 group-hover:bg-[#7B2CBF]/30 transition-colors">
                        <Icon className="w-5 h-5 text-[#7B2CBF]" />
                      </div>
                      <div>
                        <div className="font-bold text-white mb-1">{highlight.title}</div>
                        <div className="text-sm text-gray-400">{highlight.description}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
