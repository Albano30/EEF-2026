import React, { useState, useEffect } from 'react';
import { Menu, X, Flame, Shield, HelpCircle, PhoneCall } from 'lucide-react';
import { COMPANY_DETAILS } from '../data';
import logoImg from '../assets/images/regenerated_image_1781259468522.png';

interface NavbarProps {
  onOpenBudgetModal: () => void;
}

export default function Navbar({ onOpenBudgetModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Por que EEF', href: '#diferenciais' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
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
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled || isOpen
        ? 'bg-white/95 border-b border-neutral-200/80 backdrop-blur-md py-4 shadow-md' 
        : 'bg-transparent py-5'
    }`} id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#inicio" className="flex items-center space-x-2.5 group" onClick={(e) => handleLinkClick(e, '#inicio')} id="nav-logo">
            <div className="relative flex items-center justify-center h-10 w-16 bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm group-hover:scale-105 transition-transform">
              <img 
                id="nav-logo-brand-img"
                src={logoImg} 
                alt="EEF Essimela Logo" 
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1">
                <span className="font-display font-black text-lg tracking-wider text-neutral-900">EEF</span>
                <span className="h-3.5 w-0.5 bg-neutral-300" />
                <span className="font-sans font-semibold text-[11px] tracking-widest text-neutral-500 uppercase">Segurança</span>
              </div>
              <span className="font-display font-bold text-xs tracking-widest text-red-500 uppercase -mt-1">ESSIMELA</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="font-sans text-sm font-semibold text-neutral-700 hover:text-red-600 hover:-translate-y-0.5 transition-all duration-250 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href={`tel:${COMPANY_DETAILS.phones[0].replace(/\s/g, '')}`} 
              className="flex items-center text-xs font-mono text-neutral-500 hover:text-red-600 transition-colors"
              id="navbar-phone"
            >
              <PhoneCall className="h-3.5 w-3.5 text-red-500 mr-1.5" />
              {COMPANY_DETAILS.phones[0]}
            </a>
            <button
              onClick={onOpenBudgetModal}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm rounded-xl hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/10 transition-all cursor-pointer"
              id="navbar-cta-btn"
            >
              Solicitar Orçamento
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={onOpenBudgetModal}
              className="px-3 py-1.5 bg-red-600 text-white font-bold text-xs rounded-lg cursor-pointer"
              id="navbar-cta-mobile"
            >
              Orçamento
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg cursor-pointer transition-colors"
              id="navbar-mobile-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Panel */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-2 pb-6 space-y-3 shadow-xl animate-fade-in" id="navbar-mobile-panel">
          {menuItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="block px-3 py-2.5 rounded-xl font-semibold text-neutral-700 hover:text-red-600 hover:bg-neutral-50 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-neutral-100 flex flex-col space-y-3 px-3">
            <a 
              href={`tel:${COMPANY_DETAILS.phones[0].replace(/\s/g, '')}`} 
              className="flex items-center text-sm text-neutral-600 hover:text-red-600"
            >
              <PhoneCall className="h-4 w-4 text-red-500 mr-2" />
              {COMPANY_DETAILS.phones[0]}
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBudgetModal();
              }}
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white text-center font-bold text-sm rounded-xl cursor-pointer"
            >
              Solicitar Orçamento Grátis
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
