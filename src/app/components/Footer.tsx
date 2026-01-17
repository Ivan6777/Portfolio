import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <footer className="relative py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-[#7B2CBF]/50 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#7B2CBF] transition-colors" />
                </a>
              );
            })}
          </div>

          {/* Contact Email */}
          <div className="text-center">
            <p className="text-gray-400 mb-2">Let's build something amazing together</p>
            <a
              href="mailto:contact@example.com"
              className="text-xl font-semibold text-white hover:text-[#7B2CBF] transition-colors"
            >
              contact@example.com
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>© 2026 Full Stack Developer. Made with</span>
            <Heart className="w-4 h-4 text-[#7B2CBF] fill-[#7B2CBF]" />
            <span>and lots of coffee</span>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#7B2CBF]/50 to-transparent"></div>
      </div>
    </footer>
  );
}
