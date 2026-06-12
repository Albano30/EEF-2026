import React from 'react';
import { Award, Zap, Shield, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: Award,
      title: 'Experiência comprovada',
      desc: 'Anos de sólida atuação liderando o mercado de suprimentos de incêndio e desinfestação na província de Nampula com foco em qualidade.'
    },
    {
      icon: Zap,
      title: 'Resposta rápida',
      desc: 'Logística integrada que assegura prontidão de resposta em Nampula, Nacala e arredores. Atendemos emergências comerciais com prioridade.'
    },
    {
      icon: Shield,
      title: 'Confiabilidade absoluta',
      desc: 'Equipamentos certificados, recargas em conformidade com as normas internacionais, e engenheiros especializados devidamente credenciados.'
    },
    {
      icon: HeartHandshake,
      title: 'Atendimento dedicado',
      desc: 'Mais do que vender peças, montamos uma consultoria dedicada de pós-venda com inspeções preventivas e dicas de brigadas para si.'
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-gradient-to-b from-white to-red-50/20 relative overflow-hidden">
      
      {/* Decorative Warm Backlight Glows */}
      <div className="absolute -left-48 bottom-0 h-96 w-96 bg-red-200/10 rounded-full blur-[120px]" />
      <div className="absolute -right-48 top-0 h-96 w-96 bg-yellow-100/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Info */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase block mb-3">
            Nossos Diferenciais
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-neutral-900 tracking-tight leading-none mb-4">
            Por que escolher a EEF?
          </h2>
          <p className="font-sans text-neutral-600 text-sm sm:text-base leading-relaxed">
            Seja em instalações industriais de larga escala, frotas de distribuição ou em pequenas e médias empresas, somos o parceiro mais estruturado em segurança preventiva.
          </p>
        </div>

        {/* 4 Cards Grid - Responsive bento elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-red-100/80 hover:border-red-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-350 relative group"
                id={`why-card-${index}`}
              >
                {/* Glow outline reflection */}
                <div className="absolute inset-0 bg-red-650/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity pointer-events-none" />

                <div className="p-3 bg-red-50 border border-red-200/50 text-red-650 rounded-xl inline-block mb-4 group-hover:scale-105 transition-transform animate-pulse">
                  <Icon className="h-5.5 w-5.5" />
                </div>

                <h3 className="font-display font-bold text-lg text-neutral-900 mb-2 leading-none">
                  {point.title}
                </h3>
                
                <p className="font-sans text-xs text-neutral-600 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
