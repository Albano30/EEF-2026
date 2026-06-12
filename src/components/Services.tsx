import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenBudgetModal: (serviceId?: string) => void;
}

export default function Services({ onOpenBudgetModal }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Dynamic Lucide helper resolver
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldAlert': return Icons.ShieldAlert;
      case 'Flame': return Icons.Flame;
      case 'FileCheck': return Icons.FileCheck;
      case 'Sparkles': return Icons.Sparkles;
      case 'Users': return Icons.Users;
      case 'Wrench': return Icons.Wrench;
      default: return Icons.Flame;
    }
  };

  return (
    <section id="servicos" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase block mb-3">
            O que fazemos
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-none mb-4">
            Nossos Serviços Especializados
          </h2>
          <p className="font-sans text-neutral-400 text-base sm:text-lg">
            Soluções completas e credenciadas em segurança preventiva contra incêndio e imunização sanitária profissional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = getIcon(service.iconName);
            const isExpanded = selectedService === service.id;

            return (
              <div 
                key={service.id}
                className="group flex flex-col justify-between bg-neutral-900 border border-neutral-850 rounded-2xl p-6 hover:border-red-500/50 hover:bg-neutral-900/80 transition-all duration-300 relative overflow-hidden"
                id={`service-card-${service.id}`}
              >
                {/* Visual Top Highlight Line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-600 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                
                <div>
                  {/* Icon Panel with soft colored glow ring */}
                  <div className="inline-flex p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-red-500 mb-5 group-hover:bg-red-950/20 group-hover:border-red-900/50 transition-colors">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Title and Body */}
                  <h3 className="font-display font-bold text-xl text-white tracking-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-neutral-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Dropdown collapsible details lists for interactive look */}
                  <div className="mb-6 whitespace-nowrap overflow-hidden">
                    <button 
                      onClick={() => setSelectedService(isExpanded ? null : service.id)}
                      className="text-xs font-mono font-bold text-neutral-400 group-hover:text-red-400 flex items-center space-x-1 hover:underline cursor-pointer"
                    >
                      <span>{isExpanded ? 'Esconder Especificidades' : 'Ver Pormenores Técnicos'}</span>
                      <Icons.ChevronRight className={`h-3 w-3 transform transition-transform ${isExpanded ? 'rotate-90' : 'rotate-0'}`} />
                    </button>
                    
                    {isExpanded && (
                      <ul className="mt-4 space-y-2 bg-neutral-950/50 p-3 rounded-xl border border-neutral-850 animate-fade-in whitespace-normal">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-xs text-neutral-300 leading-relaxed font-sans">
                            <Icons.Check className="h-3.5 w-3.5 text-red-500 shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Card CTA bottom triggers */}
                <div className="pt-4 border-t border-neutral-800/60 mt-auto flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-wide text-neutral-500 group-hover:text-neutral-400 uppercase">
                    Serviço Homologado
                  </span>
                  
                  <button
                    onClick={() => onOpenBudgetModal(service.id)}
                    className="flex items-center space-x-1.5 text-xs font-semibold px-3.5 py-2 bg-neutral-950 hover:bg-red-600 text-red-500 hover:text-white rounded-lg border border-neutral-800 hover:border-red-600 transition-all cursor-pointer"
                  >
                    <span>Orçar</span>
                    <Icons.ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
