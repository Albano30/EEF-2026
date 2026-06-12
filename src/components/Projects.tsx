import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { ProjectItem } from '../types';
import { Filter, Eye, X, ArrowUpRight, Shield, ArrowUp } from 'lucide-react';

interface ProjectsProps {
  onOpenBudgetModal: (serviceId?: string) => void;
  pestControlImg: string;
  extinguishersRowImg: string;
  sprinklersIndustrialImg: string;
  recargaExtintoresMassaImg: string;
  alarmeCentralImg: string;
  treinoBrigadaImg: string;
}

export default function Projects({ onOpenBudgetModal, pestControlImg, extinguishersRowImg, sprinklersIndustrialImg, recargaExtintoresMassaImg, alarmeCentralImg, treinoBrigadaImg }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Filter items
  const categories = ['Todos', 'Sistemas', 'Fumigação', 'Recarga', 'Inspeção', 'Consultoria'];

  // Map generated / online images
  const getProjectImage = (proj: ProjectItem) => {
    if (proj.image === 'pest_control_warehouse') {
      return pestControlImg;
    }
    if (proj.image === 'extinguishers_row') {
      return extinguishersRowImg;
    }
    if (proj.image === 'sprinklers_industrial') {
      return sprinklersIndustrialImg;
    }
    if (proj.image === 'recarga_extintores_massa') {
      return recargaExtintoresMassaImg;
    }
    if (proj.image === 'alarme_central') {
      return alarmeCentralImg;
    }
    if (proj.image === 'treino_brigada') {
      return treinoBrigadaImg;
    }
    return proj.image;
  };

  const filteredProjects = activeFilter === 'Todos'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projetos" className="py-24 bg-white border-t border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase block mb-3">
              Portfólio de Sucesso
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-neutral-900 tracking-tight leading-none">
              Projetos Realizados de Alta Envergadura
            </h2>
            <p className="font-sans text-neutral-600 text-sm sm:text-base mt-2">
              Explore o registo fotográfico real de soluções estruturadas e preventivas que mantêm empresas moçambicanas de pé.
            </p>
          </div>

          {/* Filter Categories list */}
          <div className="flex flex-wrap gap-1.5 mt-6 md:mt-0" id="project-filters">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-500/10'
                    : 'bg-white border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
          {filteredProjects.map(project => {
            const displayImg = getProjectImage(project);
            return (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-300 transition-all duration-300 flex flex-col hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-50 shrink-0">
                  <img 
                    src={displayImg} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Pill Tag Overlay top left */}
                  <span className="absolute top-3 left-3 bg-white/90 border border-neutral-200 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase text-red-650 z-10">
                    {project.category}
                  </span>
 
                  {/* Dark Glass Overlay with magnifying eye */}
                  <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] z-0">
                    <div className="bg-red-600 p-3.5 rounded-full transform scale-75 group-hover:scale-100 transition-all shadow-lg animate-pulse">
                      <Eye className="h-5.5 w-5.5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg text-neutral-900 leading-tight group-hover:text-red-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-neutral-600 text-xs leading-relaxed mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-xs font-mono font-bold text-red-600 mt-4 group-hover:translate-x-1.5 transition-transform">
                    <span>Ver Estudo de Caso</span>
                    <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Interactive Lightbox Modal Component */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in" id="project-lightbox">
            <div className="relative w-full max-w-2xl bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-2xl animate-scale-up">
              
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-1.5 bg-white/90 hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900 rounded-lg border border-neutral-200 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-[16/9] w-full bg-neutral-50 relative">
                <img 
                  src={getProjectImage(selectedProject)} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white to-transparent h-24" />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-red-50 border border-red-200 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase text-red-650">
                    {selectedProject.category}
                  </span>
                  <span className="text-[10px] text-neutral-500 font-mono">PROJETO HOMOLOGADO</span>
                </div>

                <h3 className="font-display font-black text-2xl text-neutral-900 tracking-tight">
                  {selectedProject.title}
                </h3>

                <p className="font-sans text-neutral-600 text-sm leading-relaxed">
                  {selectedProject.description} Este projeto foi implementado conforme todas as exigências legais vigentes em Moçambique, utilizando materiais certificados de altíssima durabilidade. Os testes hidrostáticos e relatórios de conformidade foram homologados para licenciamento comercial e industrial completo.
                </p>

                <div className="flex items-center space-x-2 text-xs text-neutral-600 bg-neutral-50 p-3 rounded-xl border border-neutral-200">
                  <Shield className="h-4.5 w-4.5 text-green-650 shrink-0" />
                  <span>Segurança validada por técnicos qualificados da Essimela Extintores.</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-neutral-150">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-3 py-2 font-semibold text-xs text-red-600 hover:text-white hover:bg-red-600 rounded-lg transition-colors cursor-pointer flex items-center space-x-1.5 group"
                    title="Fechar e voltar ao início da página"
                  >
                    <ArrowUp className="h-4 w-4 transform group-hover:-translate-y-0.5 transition-transform duration-300" />
                    <span>Voltar ao início</span>
                  </button>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                      }}
                      className="px-4 py-2 font-medium text-xs text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
                    >
                      Fechar
                    </button>
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        // Pre-select related services
                        let mappedId: string | undefined = undefined;
                        if (selectedProject.category === 'Recarga') mappedId = 'recarga';
                        if (selectedProject.category === 'Sistemas') mappedId = 'sistemas';
                        if (selectedProject.category === 'Fumigação') mappedId = 'fumigação';
                        if (selectedProject.category === 'Inspeção') mappedId = 'inspeção';
                        onOpenBudgetModal(mappedId);
                      }}
                      className="px-4.5 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-lg transition-all cursor-pointer shadow shadow-red-500/10"
                    >
                      Solicitar Serviço Igual
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
