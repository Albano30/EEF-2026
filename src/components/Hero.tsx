import React from 'react';
import { Shield, Sparkles, CheckCircle, Flame, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data';

interface HeroProps {
  onOpenBudgetModal: () => void;
  heroImg: string;
}

export default function Hero({ onOpenBudgetModal, heroImg }: HeroProps) {
  const stats = [
    { value: '+10', label: 'Anos de Atuação' },
    { value: '500+', label: 'Clientes Antendidos' },
    { value: '24/7', label: 'Suporte de Plantão' },
    { value: '100%', label: 'Certificado e Licenciado' }
  ];

  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('servicos');
    if (servicesSection) {
      const navOffset = 80;
      const pos = servicesSection.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio"
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 bg-neutral-50 overflow-hidden"
    >
      
      {/* Background Image with advanced multiple overlays for maximal text readability */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Bombeiro Profissional em Atuação" 
          className="w-full h-full object-cover object-center opacity-20 scale-105 animate-[pulse_8s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-neutral-50/70 to-neutral-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-neutral-50/30 to-neutral-100/40" />
      </div>

      {/* Grid Pattern / Sparkles Overlay for premium editorial feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-200/80 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md animate-fade-in shadow-md shadow-red-100/10">
          <Flame className="h-4 w-4 text-red-500" />
          <span className="text-[11px] sm:text-xs font-display font-bold tracking-widest text-red-700 uppercase">
            Promoção da Segurança Contra Incêndio em Moçambique
          </span>
        </div>

        {/* Dynamic Typography Headings */}
        <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-neutral-900 tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6">
          Protegendo <span className="text-black">vidas e patrimónios</span> com segurança e confiança.
        </h1>

        <p className="font-sans text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-10">
          A <span className="text-neutral-900 font-bold">Essimela Extintores & Fumigações</span> oferece soluções integradas e certificadas em proteção contra incêndios, recargas, desinfestações gerais e consultoria técnica. Atuamos com as melhores práticas de Moçambique.
        </p>

        {/* CTA Button Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button
            onClick={onOpenBudgetModal}
            className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-base rounded-xl flex items-center justify-center space-x-2.5 shadow-xl shadow-red-500/20 hover:-translate-y-0.5 transition-all cursor-pointer"
            id="hero-cta-main"
          >
            <span>Solicitar Orçamento</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          
          <a
            href="#servicos"
            onClick={handleScrollToServices}
            className="w-full sm:w-auto px-8 py-4 border border-neutral-300 hover:border-neutral-400 text-neutral-750 hover:text-neutral-900 font-semibold text-base rounded-xl flex items-center justify-center transition-all bg-white/80 backdrop-blur-sm hover:bg-white cursor-pointer"
          >
            Nossos Serviços
          </a>
        </div>

        {/* Stats Panel Row with bento grid border layout */}
        <div className="border-t border-neutral-200 pt-10" id="hero-stats">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div 
                key={i}
                className="flex flex-col items-center justify-center p-4 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-300 hover:shadow-md transition-all duration-300 magnet"
              >
                <div className="font-display font-black text-3xl sm:text-4xl text-red-600 mb-1 font-mono">
                  {stat.value}
                </div>
                <div className="font-sans text-xs sm:text-sm text-neutral-500 font-semibold whitespace-nowrap">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
