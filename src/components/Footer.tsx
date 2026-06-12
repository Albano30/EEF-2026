import React from 'react';
import { Flame, Shield, MapPin, Phone, Mail, FileText, ChevronRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data';
import logoImg from '../assets/images/regenerated_image_1781259468522.png';

export default function Footer() {
  const links = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#projetos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contacto', href: '#contato' },
  ];

  const servs = [
    { label: 'Manutenção de Extintores', href: '#servicos' },
    { label: 'Sistemas de Incêndio', href: '#servicos' },
    { label: 'Fumigação & Pragas', href: '#servicos' },
    { label: 'Inspeção & Certificação', href: '#servicos' },
    { label: 'Consultoria e Brigadas', href: '#servicos' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-8 text-neutral-400 font-sans" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Column 1 - Brand Identity (Col Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* Logo */}
            <div className="flex items-center space-x-2.5">
              <div className="flex items-center justify-center h-10 w-16 bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden shadow-md shadow-red-950/10">
                <img 
                  id="footer-logo-brand-img"
                  src={logoImg} 
                  alt="EEF Essimela Logo" 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5 leading-none">
                  <span className="font-display font-black text-base tracking-wider text-white">EEF</span>
                  <span className="h-3 w-0.5 bg-neutral-700" />
                  <span className="font-sans font-semibold text-[10px] tracking-wider text-neutral-400 uppercase">Segurança</span>
                </div>
                <span className="font-display font-bold text-[10px] tracking-widest text-red-500 uppercase">ESSIMELA</span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Mais de uma década garantindo proteção contra incêndio ativa e preventiva, manutenção técnica de extintores homologados, desinfestações gerais higiénicas de armazéns logísticos e industriais em todas as províncias do norte de Moçambique.
            </p>

            {/* Compliance badges */}
            <div className="pt-2 flex items-center space-x-3 text-[10px] uppercase font-mono font-bold text-neutral-500">
              <div className="px-2 py-1 bg-neutral-900 border border-neutral-850 rounded">
                Proteção Civil Moçambique
              </div>
              <div className="px-2 py-1 bg-neutral-900 border border-neutral-850 rounded">
                INAE Aprovado
              </div>
            </div>

          </div>

          {/* Column 2 - Links (Col Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-white text-xs tracking-wider uppercase mb-5">Atalhos</h4>
            <ul className="space-y-2.5">
              {links.map(link => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs hover:text-white flex items-center space-x-1 hover:translate-x-1 transition-all"
                  >
                    <ChevronRight className="h-3 w-3 text-red-500" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services (Col Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-white text-xs tracking-wider uppercase mb-5">Serviços Oficiais</h4>
            <ul className="space-y-2.5">
              {servs.map(srv => (
                <li key={srv.label}>
                  <a 
                    href={srv.href}
                    onClick={(e) => handleLinkClick(e, srv.href)}
                    className="text-xs hover:text-white flex items-center space-x-1 hover:translate-x-1 transition-all"
                  >
                    <ChevronRight className="h-3 w-3 text-red-500" />
                    <span>{srv.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact and Legal (Col Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-white text-xs tracking-wider uppercase mb-5">Sede & Jurisdição</h4>
            
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start space-x-2.5">
                <MapPin className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address}</span>
              </div>
              
              <div className="flex items-start space-x-2.5">
                <Phone className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  {COMPANY_DETAILS.phones.map((p, i) => <span key={i}>{p}</span>)}
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <Mail className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.email}</span>
              </div>

              <div className="flex items-start space-x-2.5 pt-2 border-t border-neutral-900 text-neutral-500 font-mono">
                <FileText className="h-4 w-4 text-neutral-600 shrink-0" />
                <span>NUIT Comercial: {COMPANY_DETAILS.nuit}</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom border and copyright terms bar */}
        <div className="border-t border-neutral-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 space-y-4 sm:space-y-0 text-center sm:text-left">
          <div>
            <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. Todos os direitos reservados.</p>
            <p className="mt-0.5 text-neutral-600">Proibida a reprodução de marca, slogan ou media sem autorização formal.</p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hover:text-neutral-400 transition-colors">Termos de Uso</span>
            <span className="h-3 w-px bg-neutral-800" />
            <span className="hover:text-neutral-400 transition-colors">Política de Privacidade</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
