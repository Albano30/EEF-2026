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
      color: 'text-red-650 bg-red-50 border-red-200/80'
    },
    {
      icon: Eye,
      title: 'Visão',
      desc: 'Ser reconhecida como a melhor e mais confiável empresa de engenharia preventiva e desinfestação na província de Nampula e região norte de Moçambique.',
      color: 'text-amber-600 bg-amber-50 border-amber-200/80'
    },
    {
      icon: Heart,
      title: 'Valores',
      desc: 'Compromisso inabalável com a integridade das pessoas, conformidade legal rígida, agilidade, excelência técnica, e transparência com o cliente.',
      color: 'text-blue-650 bg-blue-50 border-blue-200/80'
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title and Intro */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase block mb-3">
            Sobre a EEF
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-neutral-900 tracking-tight leading-none mb-6">
            Tradição em segurança, foco absoluto em proteger.
          </h2>
          <p className="font-sans text-neutral-600 leading-relaxed text-base sm:text-lg">
            A <span className="font-bold text-neutral-900">Essimela Extintores & Fumigações</span> nasceu de uma sólida visão de salvar vidas e prevenir catástrofes industriais e sanitárias. Somos habilitados e registados para atuar em todo o território nacional. Com sede operacional na <span className="text-red-600 font-semibold">Cidade de Nampula</span> e delegações em <span className="text-neutral-900 font-semibold">Nacala</span>, oferecemos uma infraestrutura de ponta e técnicos formados para prover segurança total 24 horas por dia.
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
                    className="flex flex-col sm:flex-row items-start p-5 bg-neutral-50 border border-neutral-200 rounded-2xl hover:border-neutral-300 transition-all group shadow-sm"
                  >
                    <div className={`p-3 rounded-xl border shrink-0 sm:mr-5 mb-4 sm:mb-0 ${v.color} group-hover:scale-105 transition-transform`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-neutral-900 mb-2">{v.title}</h3>
                      <p className="font-sans text-sm text-neutral-600 leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image Display with badges - Col Span 5 */}
          <div className="lg:col-span-5 relative" id="about-image-wrapper">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl blur opacity-15 group-hover:opacity-25 transition-opacity" />
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-white aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-square">
              <img 
                src={aboutImg} 
                alt="Fileira de Extintores Oficiais de Segurança de Alta Qualidade" 
                className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Badge overlay bottom left */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 border border-neutral-250 backdrop-blur-md p-4 rounded-xl flex items-center space-x-3 shadow-md">
                <div className="bg-red-600 h-10 w-10 rounded-lg flex items-center justify-center shrink-0">
                  <Award className="h-5.5 w-5.5 text-white animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold tracking-wide uppercase text-red-600">EEF SEGURANÇA TOTAL</div>
                  <div className="text-[11px] text-neutral-600 font-sans mt-0.5 font-semibold">Equipamentos 100% Homologados pela Proteção Civil</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
