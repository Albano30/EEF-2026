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
    <section id="diferenciais" className="py-24 bg-gradient-to-b from-neutral-900 to-red-950/40 relative overflow-hidden">
      
      {/* Decorative Warm Backlight Glows */}
      <div className="absolute -left-48 bottom-0 h-96 w-96 bg-red-900/10 rounded-full blur-[120px]" />
      <div className="absolute -right-48 top-0 h-96 w-96 bg-yellow-900/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Info */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase block mb-3">
            Nossos Diferenciais
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-none mb-4">
            Por que escolher a EEF?
          </h2>
          <p className="font-sans text-neutral-300 text-sm sm:text-base leading-relaxed">
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
                className="bg-neutral-950/85 border border-red-950/40 hover:border-red-800/40 rounded-2xl p-6 shadow-xl hover:-translate-y-1 transition-all duration-350 relative group"
                id={`why-card-${index}`}
              >
                {/* Glow outline reflection */}
                <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity pointer-events-none" />

                <div className="p-3 bg-red-950/30 border border-red-900/20 text-red-500 rounded-xl inline-block mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="h-5.5 w-5.5" />
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2 leading-none">
                  {point.title}
                </h3>
                
                <p className="font-sans text-xs text-neutral-400 leading-relaxed">
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
