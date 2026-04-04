import React, { useState, useEffect } from 'react';
import {
  Code2,
  Cpu,
  Globe,
  Lightbulb,
  Rocket,
  Terminal,
  ChevronRight,
  ChevronDown,
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
  const [activeAccordion, setActiveAccordion] = useState(0);

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
      title: "1. Assessment",
      description: "We begin with an honest conversation about your business issues and goals to determine where improvements can be made. I utilize key performance tools to minimize emotion and maximize production.",
      points: [
        "Sales Channels and Growth Analysis",
        "Cost of Goods Sold (COGS) Analysis",
        "Core vs. Non-core Product Analysis",
        "Perceived Capacity Constraints"
      ]
    },
    {
      title: "2. Strategy Development",
      description: "Connecting dots is not always obvious. Sometimes you need an outside perspective. After an assessment, I'll develop a long-term strategy and recommend immediate short-term needs that take into consideration:",
      points: [
        "Agile Methodology & Lean Operations",
        "Positive People Culture",
        "Total Cost vs. Value Analysis",
        "Supply Chain Rationalization"
      ]
    },
    {
      title: "3. Business Case",
      description: "Once a strategy has been developed, I make formal recommendations that include a comprehensive analysis to meet executive and stakeholder expectations. I understand the importance of having all teams on board.",
      points: []
    },
    {
      title: "4. Delivery",
      description: "We decide the best next step after delivering an executive proposal. I can continue working with your team to ensure process improvements are seamlessly implemented and remain 'on-call' for any future needs.",
      points: []
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-['Inter'] selection:bg-teal-500/30">

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-slate-800 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-['Outfit'] font-bold tracking-tight bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
          >
            HB
          </button>

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

        {/* Placeholder Photo */}
        <div className="w-40 h-40 rounded-full border-4 border-slate-800 bg-slate-900 flex items-center justify-center mb-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-500"></div>
          <span className="text-slate-500 text-sm font-medium z-10">Photo Placeholder</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-['Outfit'] font-extrabold tracking-tight mb-8 leading-[1.1]">
          Hi, I am <span className="bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Harsh Bheda</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-slate-200 tracking-wide mb-12">
          I help you scale business processes
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="https://www.linkedin.com/in/hrbheda/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium flex items-center justify-center gap-3 transition-colors shadow-lg shadow-blue-500/20">
            <Linkedin className="w-5 h-5" fill="currentColor" />
            Connect with me on LinkedIn
          </a>
          <button onClick={() => scrollToSection('services')} className="px-8 py-4 bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white hover:bg-slate-800 rounded-full font-medium flex items-center justify-center gap-2 transition-all">
            Show me how <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 md:px-12 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-teal-400 uppercase mb-3">Tailored Solutions</h2>
            <h3 className="text-3xl md:text-5xl font-['Outfit'] font-bold text-white mb-6">A 4-Step Process for Positive Impact</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Consulting services are unique. My process leverages speed in assessment and implementation to help you quickly take advantage of your greatest opportunities and realize ROI.
            </p>
          </div>

          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className={`border ${activeAccordion === index ? 'border-teal-500/50 bg-slate-800/80 shadow-lg shadow-teal-900/20' : 'border-slate-800 bg-slate-900/50 hover:bg-slate-800/80'} rounded-2xl overflow-hidden transition-all duration-300`}>
                <button 
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full text-left px-6 md:px-8 py-6 flex justify-between items-center outline-none"
                >
                  <span className={`text-xl font-semibold md:text-2xl transition-colors ${activeAccordion === index ? 'text-white' : 'text-slate-300'}`}>
                    {service.title}
                  </span>
                  <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-transform duration-300 ${activeAccordion === index ? 'rotate-180 bg-teal-500/20 text-teal-400' : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 md:px-8 pb-8 pt-2 border-t border-slate-700/50">
                    <p className="text-slate-300 leading-relaxed mb-4 text-lg">
                      {service.description}
                    </p>
                    {service.points && service.points.length > 0 && (
                      <ul className="space-y-3 mt-4">
                        {service.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-4" >
                            <div className="mt-2 w-2 h-2 rounded-full bg-teal-400 flex-shrink-0 shadow-[0_0_8px_rgba(45,212,191,0.8)]"></div>
                            <span className="text-slate-400 text-base">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Experience Section */}
      <section id="experience" className="pt-20 pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto flex flex-col md:items-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold tracking-wide mb-6 md:mb-8 self-start md:self-center">
            7+ Years Experience
          </div>
          
          <h2 className="text-3xl md:text-5xl font-['Outfit'] font-bold mb-8 md:text-center">Driving Operational Excellence & Supply Chain Innovation.</h2>
          
          <p className="text-slate-300 mb-10 text-base md:text-lg leading-relaxed md:text-center">
            With deep expertise in biotechnology and pharmaceutical operations, I specialize in scaling technical operations and driving strategic supply chain management. My experience spans advancing first-in-class CRISPR/Cas9 cell and gene therapies to clinical readiness, to implementing robust Lean Six Sigma methodologies for GMP/Non-GMP manufacturing. I have a proven track record of optimizing global procurement, aggressively reducing COGS through rigorous vendor management, and mastering the procure-to-pay cycle. By aligning scientific process development with precise production planning (MRP) and S&OP, I ensure seamless operations and sustainable cost optimization.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {[
              "Production & Supply Planning",
              "Global Strategic Procurement",
              "Vendor & Supplier Management",
              "Cost Optimization (COGS, RFQ)",
              "Lean Six Sigma & Kaizen",
              "Cell/Gene Therapy Process Dev",
              "GMP / Non-GMP Operations",
              "Procure-to-Pay Cycles"
            ].map((skill, index) => (
              <div key={index} className="flex flex-col items-center justify-center gap-3 bg-slate-900/50 hover:bg-slate-800/50 border border-slate-800/50 hover:border-teal-500/30 transition-colors duration-300 rounded-xl p-4 text-center">
                <div className="w-2 h-2 rounded-full bg-teal-400 flex-shrink-0 shadow-[0_0_8px_rgba(45,212,191,0.8)]"></div>
                <span className="text-slate-300 text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 px-6 md:px-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <p className="text-sm font-semibold text-slate-500 mb-8 text-center">
            Previously Associated With
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
            {[
              { name: 'MIT', src: '/logos/mit sloan.jpg', className: 'h-[70px] md:h-[80px] mix-blend-multiply' },
              { name: 'Thermo Fisher', src: '/logos/Thermo Fisher Logo.jpeg', className: 'h-[50px] md:h-[70px] mix-blend-multiply' },
              { name: 'Be Bio', src: '/logos/be biopharma logo.jpg', className: 'h-[50px] md:h-[70px] mix-blend-multiply' },
              { name: 'Northeastern University', src: '/logos/Northeastern-University_thumb.png', className: 'h-[70px] md:h-[100px] mix-blend-multiply' },
              { name: 'Resolute Marine Energy', src: '/logos/resolute marine energy.png', className: 'h-[70px] md:h-[100px] mix-blend-multiply' }
            ].map((logo, index) => (
              <div key={index} className="flex items-center justify-center transform hover:scale-105 transition-all duration-300 opacity-80 hover:opacity-100">
                <img 
                  src={logo.src} 
                  alt={`${logo.name} logo`} 
                  className={`w-auto object-contain ${logo.className}`}
                />
              </div>
            ))}
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
