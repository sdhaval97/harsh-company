import React, { useState, useEffect } from 'react';
import {
  Code2,
  Cpu,
  Globe,
  Lightbulb,
  Rocket,
  Terminal,
  ChevronRight,
  Mail,
  Linkedin,
  Github,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <Lightbulb className="w-8 h-8 text-teal-400" />,
      title: "Tech Strategy",
      description: "Aligning your technology infrastructure with business goals to drive growth, efficiency, and scalability."
    },
    {
      icon: <Cpu className="w-8 h-8 text-indigo-400" />,
      title: "Architecture Design",
      description: "Designing robust, highly available, and secure system architectures for web and mobile platforms."
    },
    {
      icon: <Rocket className="w-8 h-8 text-rose-400" />,
      title: "Digital Transformation",
      description: "Modernizing legacy systems and adopting cutting-edge technologies to keep you ahead of the curve."
    },
    {
      icon: <Code2 className="w-8 h-8 text-amber-400" />,
      title: "Custom Development",
      description: "End-to-end software development using modern frameworks, ensuring maintainable and scalable codebases."
    },
    {
      icon: <Globe className="w-8 h-8 text-emerald-400" />,
      title: "Cloud Solutions",
      description: "Cloud migration and infrastructure optimization across AWS, Azure, and Google Cloud Platform."
    },
    {
      icon: <Terminal className="w-8 h-8 text-purple-400" />,
      title: "Technical Audits",
      description: "Comprehensive review of your existing codebase, security practices, and deployment pipelines."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-['Inter'] selection:bg-teal-500/30">

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-slate-800 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-2xl font-['Outfit'] font-bold tracking-tight bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
            HB
          </div>

          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-white transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-white transition-colors">Services</button>
            <button onClick={() => scrollToSection('experience')} className="text-slate-300 hover:text-white transition-colors">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-white transition-colors">Contact</button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-slate-300">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden">
          <button onClick={() => scrollToSection('about')} className="text-2xl font-medium text-slate-300 hover:text-white transition-colors">About</button>
          <button onClick={() => scrollToSection('services')} className="text-2xl font-medium text-slate-300 hover:text-white transition-colors">Services</button>
          <button onClick={() => scrollToSection('experience')} className="text-2xl font-medium text-slate-300 hover:text-white transition-colors">Experience</button>
          <button onClick={() => scrollToSection('contact')} className="text-2xl font-medium text-slate-300 hover:text-white transition-colors">Contact</button>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-md text-sm font-medium text-teal-400">
          Available for new opportunities in Q4 2026
        </div>

        <h1 className="text-5xl md:text-7xl font-['Outfit'] font-extrabold tracking-tight mb-8 leading-[1.1]">
          Architecting the future of <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">digital businesses.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 font-light">
          I'm Harsh Bheda. I help companies navigate complex technical challenges, build scalable architectures, and accelerate their digital transformation journey.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button onClick={() => scrollToSection('contact')} className="group px-8 py-4 bg-white text-slate-950 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-slate-200 transition-all">
            Let's Talk <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={() => scrollToSection('services')} className="px-8 py-4 bg-slate-900 border border-slate-800 rounded-lg font-medium hover:bg-slate-800 transition-all">
            Explore Services
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 md:px-12 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end">
            <div>
              <h2 className="text-3xl md:text-5xl font-['Outfit'] font-bold mb-4">Areas of Expertise</h2>
              <p className="text-slate-400 max-w-xl text-lg">Delivering robust, scalable, and forward-thinking solutions tailored to your unique business needs.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl"></div>
                </div>
                <div className="mb-6 inline-block p-3 rounded-xl bg-slate-950/50 ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Experience Section */}
      <section id="experience" className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 relative group">
              {/* Optional: Add an image here instead of gradient placeholder */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-teal-900/40 group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center p-12 text-center text-slate-500 font-light italic">
                [Photograph of Harsh Bheda]
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-8 -right-8 md:-right-12 bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-xl">
              <div className="text-4xl font-bold text-teal-400 mb-1">10+</div>
              <div className="text-sm font-medium text-slate-400">Years Experience</div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-['Outfit'] font-bold mb-6">Partnering for true innovation.</h2>
            <p className="text-slate-300 mb-6 text-lg leading-relaxed">
              With a deep background in software engineering and technical leadership, I bridge the gap between complex engineering concepts and strategic business outcomes.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              My approach is hands-on and pragmatic. Whether you're a startup looking to establish a scalable MVP, or an enterprise undergoing modernization, I provide the technical vision and implementation execution to get you there seamlessly.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
                <ChevronRight className="w-5 h-5 text-teal-400" />
                <span className="text-slate-200">Former Staff Engineer at Top Tier Tech</span>
              </div>
              <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
                <ChevronRight className="w-5 h-5 text-teal-400" />
                <span className="text-slate-200">Cloud Certified Architect (AWS, GCP)</span>
              </div>
              <div className="flex items-center gap-4 pb-4">
                <ChevronRight className="w-5 h-5 text-teal-400" />
                <span className="text-slate-200">Speaker at international developer conferences</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-slate-900/30 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500/10 text-teal-400 mb-8">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-6">Ready to transform?</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Let's discuss how we can elevate your technology stack and drive your business forward.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="mailto:hello@harshbheda.example.com" className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-950 rounded-lg font-semibold transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
              hello@harshbheda.example.com
            </a>
            <div className="flex items-center gap-4">
              <a href="#" className="p-4 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white text-slate-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="p-4 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white text-slate-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800/50 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Harsh Bheda Consulting. All rights reserved.</p>
      </footer>
    </div>
  );
}
