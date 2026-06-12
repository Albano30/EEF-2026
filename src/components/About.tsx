import React from 'react';
import { Target, Eye, Heart, Award } from 'lucide-react';

interface AboutProps {
  aboutImg: string;
}

export default function About({ aboutImg }: AboutProps) {
  const values = [
    {
      icon: Target,
      title: 'Missão',
      desc: 'Proteger vidas e patrimónios com soluções técnicas de excelência contra incêndios e controle integrado de pragas, promovendo ambientes seguros e salubres.',
      color: 'text-red-500 bg-red-950/40 border-red-900/35'
    },
    {
      icon: Eye,
      title: 'Visão',
      desc: 'Ser reconhecida como a melhor e mais confiável empresa de engenharia preventiva e desinfestação na província de Nampula e região norte de Moçambique.',
      color: 'text-yellow-500 bg-yellow-950/40 border-yellow-900/35'
    },
    {
      icon: Heart,
      title: 'Valores',
      desc: 'Compromisso inabalável com a integridade das pessoas, conformidade legal rígida, agilidade, excelência técnica, e transparência com o cliente.',
      color: 'text-blue-500 bg-blue-950/40 border-blue-900/35'
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-neutral-900 border-t border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title and Intro */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase block mb-3">
            Sobre a EEF
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-none mb-6">
            Tradição em segurança, foco absoluto em proteger.
          </h2>
          <p className="font-sans text-neutral-300 leading-relaxed text-base sm:text-lg">
            A <span className="font-semibold text-white">Essimela Extintores & Fumigações</span> nasceu de uma sólida visão de salvar vidas e prevenir catástrofes industriais e sanitárias. Somos habilitados e registados para atuar em todo o território nacional. Com sede operacional na <span className="text-red-500 font-medium">Cidade de Nampula</span> e delegações em <span className="text-white font-medium">Nacala</span>, oferecemos uma infraestrutura de ponta e técnicos formados para prover segurança total 24 horas por dia.
          </p>
        </div>

        {/* Bento-like details grid split with beautiful generated image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Card Values Left - Col Span 7 */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <div 
                    key={idx}
                    className="flex flex-col sm:flex-row items-start p-5 bg-neutral-950/50 border border-neutral-800 rounded-2xl hover:border-neutral-750 transition-all group"
                  >
                    <div className={`p-3 rounded-xl border shrink-0 sm:mr-5 mb-4 sm:mb-0 ${v.color} group-hover:scale-105 transition-transform`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-white mb-2">{v.title}</h3>
                      <p className="font-sans text-sm text-neutral-400 leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image Display with badges - Col Span 5 */}
          <div className="lg:col-span-5 relative" id="about-image-wrapper">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600 to-yellow-600 rounded-2xl blur opacity-30 group-hover:opacity-40 transition-opacity" />
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-square">
              <img 
                src={aboutImg} 
                alt="Fileira de Extintores Oficiais de Segurança de Alta Qualidade" 
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Badge overlay bottom left */}
              <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/90 border border-neutral-800/80 backdrop-blur-md p-4 rounded-xl flex items-center space-x-3">
                <div className="bg-red-600 h-10 w-10 rounded-lg flex items-center justify-center shrink-0">
                  <Award className="h-5.5 w-5.5 text-white animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold tracking-wide uppercase text-red-500">EEF SEGURANÇA TOTAL</div>
                  <div className="text-[11px] text-neutral-300 font-sans mt-0.5 font-medium">Equipamentos 100% Homologados pela Proteção Civil</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
