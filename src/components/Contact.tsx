import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageSquare, ShieldAlert } from 'lucide-react';
import { COMPANY_DETAILS } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call or form submission
    setIsSubmitted(true);
  };

  const handleWhatsAppChat = () => {
    const text = 'Olá Essimela Extintores! Gostaria de falar com um consultor técnico sobre serviços de segurança.';
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encoded}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-neutral-900 border-t border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start">
          
          {/* Left Column - Contact Info Details (Col Span 5) */}
          <div className="lg:col-span-5 space-y-8" id="contact-info">
            
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase block">
                Fale Connosco
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-none">
                Solicite o seu orçamento personalizado
              </h2>
              <p className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed">
                Estamos prontos para atender a sua empresa, obra, armazém ou condomínio residencial em Nampula, Nacala e arredores. Entre em contacto para obter preços oficiais.
              </p>
            </div>

            {/* List details */}
            <div className="space-y-6">
              
              {/* Address card */}
              <div className="flex items-start space-x-4 p-4 bg-neutral-950/65 border border-neutral-850 rounded-xl">
                <div className="p-2.5 bg-red-950/40 text-red-500 rounded-lg shrink-0 mt-0.5 border border-red-900/10">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">Endereço Operacional</h4>
                  <p className="text-sm font-sans text-white font-medium mt-1 leading-relaxed">
                    {COMPANY_DETAILS.address}
                  </p>
                </div>
              </div>

              {/* Phone card */}
              <div className="flex items-start space-x-4 p-4 bg-neutral-950/65 border border-neutral-850 rounded-xl">
                <div className="p-2.5 bg-red-950/40 text-red-500 rounded-lg shrink-0 mt-0.5 border border-red-900/10">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">Telefone e Apoio Rápido</h4>
                  <div className="flex flex-col mt-1 space-y-0.5">
                    {COMPANY_DETAILS.phones.map((phone, i) => (
                      <a 
                        key={i} 
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="text-sm font-sans text-white font-medium hover:text-red-400 transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email card */}
              <div className="flex items-start space-x-4 p-4 bg-neutral-950/65 border border-neutral-850 rounded-xl">
                <div className="p-2.5 bg-red-950/40 text-red-500 rounded-lg shrink-0 mt-0.5 border border-red-900/10">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">Correio Eletrónico Coletivo</h4>
                  <a 
                    href={`mailto:${COMPANY_DETAILS.email}`} 
                    className="text-sm font-sans text-white font-medium hover:text-red-400 transition-colors block mt-1"
                  >
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </div>

            </div>

            {/* Green WhatsApp Contact Trigger Panel */}
            <div className="pt-4">
              <button
                type="button"
                onClick={handleWhatsAppChat}
                className="w-full sm:w-auto px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl flex items-center justify-center space-x-2.5 shadow-lg shadow-emerald-950/30 transition-all hover:-translate-y-0.5 cursor-pointer"
                id="contact-whatsapp-btn"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Conversar no WhatsApp Comercial</span>
              </button>
            </div>

          </div>

          {/* Right Column - Contact Form Box (Col Span 7) */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-850 p-6 sm:p-8 rounded-2xl shadow-2xl relative" id="contact-form-wrapper">
            
            <div className="absolute top-0 right-8 transform -translate-y-1/2">
              <div className="bg-neutral-900 border border-neutral-800 text-neutral-400 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase flex items-center space-x-1.5 shadow">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-ping inline-block" />
                <span>Resposta em até 24h</span>
              </div>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-xl text-white">Envie uma mensagem direta</h3>
                  <p className="text-xs text-neutral-400">Preencha o formulário abaixo e nós entraremos em contacto por telefone ou email.</p>
                </div>

                <div className="space-y-4 pt-2">
                  
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-xs text-neutral-400 block font-semibold">Seu nome ou Razão Social *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ex: Albano Luís"
                      value={formData.name}
                      onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 placeholder:text-neutral-600 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email field */}
                    <div className="space-y-1">
                      <label className="text-xs text-neutral-400 block font-semibold">Email *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="Ex: albano@exemplo.com"
                        value={formData.email}
                        onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 placeholder:text-neutral-600 transition-all"
                      />
                    </div>
                    
                    {/* Phone field */}
                    <div className="space-y-1">
                      <label className="text-xs text-neutral-400 block font-semibold">Telefone de Contacto *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="Ex: +258 849 378 149"
                        value={formData.phone}
                        onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 placeholder:text-neutral-600 transition-all"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-1">
                    <label className="text-xs text-neutral-400 block font-semibold">Escreva sua mensagem ou dúvida técnica *</label>
                    <textarea 
                      rows={4}
                      required
                      placeholder="Indique como podemos ajudá-lo hoje: se precisa de inspeção, extintor novo, recarga de cilindro de CO2 ou dedetização..."
                      value={formData.message}
                      onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 placeholder:text-neutral-600 transition-all resize-none"
                    />
                  </div>

                </div>

                {/* Submit button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-red-650 hover:bg-red-700 text-white font-bold text-sm rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-red-950/30 hover:-translate-y-0.5 transition-all cursor-pointer"
                    id="contact-submit"
                  >
                    <span>Enviar mensagem direta</span>
                    <Send className="h-4 w-4" />
                  </button>
                </div>

                {/* Regulatory License note */}
                <div className="flex items-start space-x-2 text-[10px] text-neutral-500 pt-2 border-t border-neutral-900">
                  <ShieldAlert className="h-3.5 w-3.5 text-neutral-600 shrink-0 mt-0.5" />
                  <span>Seus dados de contacto são protegidos de forma inteiramente confidencial pela Essimela e utilizados unicamente para elaboração da vossa proposta comercial.</span>
                </div>

              </form>
            ) : (
              // Success feedback
              <div className="py-12 text-center space-y-6 flex flex-col items-center animate-fade-in" id="contact-success-panel">
                <div className="h-16 w-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center border border-red-500/25">
                  <CheckCircle2 className="h-10 w-10 animate-bounce" />
                </div>
                <div className="space-y-2 max-w-sm">
                  <h3 className="font-display font-bold text-2xl text-white">Mensagem Enviada!</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Olá <span className="font-semibold text-white">{formData.name}</span>, recebemos sua mensagem. Um consultor técnico da nossa equipa em Nampula entrará em contacto muito brevemente.
                  </p>
                </div>
                
                <button
                  onClick={() => {
                    setFormData({ name: '', email: '', phone: '', message: '' });
                    setIsSubmitted(false);
                  }}
                  className="px-5 py-2.5 border border-neutral-800 hover:border-neutral-600 text-neutral-350 hover:text-white font-semibold text-xs rounded-xl transition-all cursor-pointer"
                >
                  Enviar Outra Mensagem
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
