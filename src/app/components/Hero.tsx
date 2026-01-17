import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToWork = () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#7B2CBF] opacity-10 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#7B2CBF] opacity-10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Main headline */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-[#7B2CBF] bg-clip-text text-transparent animate-fade-in">
          Full Stack Developer
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Crafting innovative solutions across{' '}
          <span className="text-[#7B2CBF] font-semibold">Web Development</span>,{' '}
          <span className="text-[#7B2CBF] font-semibold">Machine Learning</span>, and{' '}
          <span className="text-[#7B2CBF] font-semibold">Data Analytics</span>
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToWork}
          className="group relative inline-flex items-center gap-3 bg-[#7B2CBF] hover:bg-[#9333EA] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105"
        >
          View Work
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#7B2CBF] rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-[#7B2CBF] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
