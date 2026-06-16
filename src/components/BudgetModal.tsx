import React, { useState } from 'react';
import { X, Send, Calculator, AlertCircle, Sparkles, CheckCircle2, Mail } from 'lucide-react';
import { QuoteRequest } from '../types';
import { SERVICES, COMPANY_DETAILS } from '../data';

interface BudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export default function BudgetModal({ isOpen, onClose, initialServiceId }: BudgetModalProps) {
  const [formData, setFormData] = useState<QuoteRequest>({
    name: '',
    email: '',
    phone: '',
    services: initialServiceId ? [initialServiceId] : [],
    message: '',
    urgency: 'medium'
  });

  // Simulator values
  const [extinguisherCount, setExtinguisherCount] = useState<number>(0);
  const [areaSize, setAreaSize] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => {
      const isSelected = prev.services.includes(serviceId);
      const newServices = isSelected
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId];
      return { ...prev, services: newServices };
    });
  };

  const hasFumigacaoOrSistemas = formData.services.some(s => s === 'fumigação' || s === 'sistemas');
  const hasRecarga = formData.services.some(s => s === 'recarga');

  const handleSendEmail = () => {
    const serviceLabels = SERVICES.filter(s => formData.services.includes(s.id)).map(s => s.title).join(', ');
    const subject = `Solicitação de Orçamento Técnico - ${formData.name}`;
    const body = `Olá, EEF / Essimela,\n\nSolicito um orçamento técnico personalizado com os seguintes detalhes:\n\n` +
      `• Nome / Empresa: ${formData.name}\n` +
      `• Telefone: ${formData.phone}\n` +
      `• Email: ${formData.email}\n` +
      `• Serviços: ${serviceLabels || 'Gerais'}\n` +
      `• Urgência: ${formData.urgency === 'high' ? 'Alta (Imediata) 🔴' : formData.urgency === 'medium' ? 'Média (Esta semana) 🟡' : 'Normal 🟢'}\n` +
      (hasRecarga ? `• Nº Extintores: ${extinguisherCount || 5} unidades\n` : '') +
      (hasFumigacaoOrSistemas ? `• Área estimada: ${areaSize} m²\n` : '') +
      `• Mensagem / Notas: ${formData.message || 'Sem comentários adicionais.'}\n\n` +
      `--\n` +
      `Pedido enviado a partir do site.`;

    const mailtoUrl = `mailto:${COMPANY_DETAILS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendEmail();
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const serviceLabels = SERVICES.filter(s => formData.services.includes(s.id)).map(s => s.title).join(', ');
    
    const text = `Olá Essimela! Solicito um orçamento técnico para:\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Serviços:* ${serviceLabels || 'Gerais'}\n` +
      `*Urgência:* ${formData.urgency === 'high' ? 'Alta 🔴' : formData.urgency === 'medium' ? 'Média 🟡' : 'Normal 🟢'}\n` +
      (hasRecarga ? `*Nº Extintores:* ${extinguisherCount || 5} unidades\n` : '') +
      (hasFumigacaoOrSistemas ? `*Área aproximada:* ${areaSize} m²\n` : '') +
      `*Mensagem:* ${formData.message}\n\n` +
      `Aguardando contacto técnico para envio de proposta e levantamento.`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" id="budget-modal">
      <div className="relative w-full max-w-3xl bg-white border border-neutral-200 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-scale-up" id="budget-modal-container">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
          <div className="flex items-center space-x-2">
            <Calculator className="h-6 w-6 text-red-600 animate-pulse" />
            <span className="font-display font-bold text-xl text-neutral-900 tracking-tight">Solicitar Orçamento personalizado</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
            id="budget-modal-close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="overflow-y-auto flex-1 p-6 space-y-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Services selection */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-neutral-700 block">
                  1. Selecione os Serviços Desejados:
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {SERVICES.map(service => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => handleServiceToggle(service.id)}
                      className={`flex items-start text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                        formData.services.includes(service.id)
                          ? 'bg-red-50 border-red-500 text-neutral-900 shadow-sm'
                          : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-350 hover:bg-neutral-50'
                      }`}
                    >
                      <div className={`mt-1 mr-3 h-4 w-4 rounded flex items-center justify-center border transition-all ${
                        formData.services.includes(service.id)
                          ? 'bg-red-500 border-red-500 text-white'
                          : 'border-neutral-300 bg-transparent'
                      }`}>
                        {formData.services.includes(service.id) && (
                          <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-sm text-neutral-800">{service.title}</div>
                        <div className="text-xs text-neutral-500 line-clamp-1 mt-0.5">{service.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Interactive metrics depending on service */}
              {(hasRecarga || hasFumigacaoOrSistemas) && (
                <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl space-y-4">
                  <div className="flex items-center space-x-1.5 text-xs text-red-600 font-bold tracking-wide uppercase">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Dados do Local & Quantidades</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {hasRecarga && (
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-neutral-700 block">Número aproximado de extintores:</label>
                        <div className="flex items-center space-x-2">
                          <input 
                            type="range" 
                            min="1" 
                            max="100" 
                            value={extinguisherCount || 5} 
                            onChange={(e) => setExtinguisherCount(parseInt(e.target.value))}
                            className="w-full accent-red-600 cursor-pointer"
                          />
                          <span className="text-sm font-mono text-red-600 font-bold bg-white px-2 py-1 rounded border border-neutral-200 w-14 text-center">
                            {extinguisherCount || 5}
                          </span>
                        </div>
                      </div>
                    )}
                    {hasFumigacaoOrSistemas && (
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-neutral-700 block">Área do local em metros quadrados (m²):</label>
                        <div className="flex items-center space-x-2">
                          <input 
                            type="number" 
                            min="0" 
                            placeholder="Ex: 150"
                            value={areaSize || ''} 
                            onChange={(e) => setAreaSize(parseInt(e.target.value) || 0)}
                            className="bg-white border border-neutral-200 rounded-lg px-3 py-1.5 text-sm text-neutral-800 w-full focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 shadow-sm"
                          />
                          <span className="text-xs text-neutral-500 font-mono">m²</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Contact details */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-neutral-700 block">
                  2. Suas Informações de Contacto:
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-xs text-neutral-600 block font-semibold">Nome completo / Nome da Empresa *</span>
                    <input 
                      type="text" 
                      required
                      placeholder="Ex: Albano Luís ou Empresa LDA"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-800 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 placeholder:text-neutral-400 transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-neutral-600 block font-semibold">Nº de Telefone (WhatsApp preferencial) *</span>
                    <input 
                      type="tel" 
                      required
                      placeholder="Ex: +258 849 378 149"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-800 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 placeholder:text-neutral-400 transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div className="space-y-1">
                    <span className="text-xs text-neutral-600 block font-semibold">Email *</span>
                    <input 
                      type="email" 
                      required
                      placeholder="Ex: jose.silva@exemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                      className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-800 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 placeholder:text-neutral-400 transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-neutral-600 block font-semibold">Nível de Urgência</span>
                    <select
                      value={formData.urgency}
                      onChange={(e) => setFormData(p => ({ ...p, urgency: e.target.value as any }))}
                      className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-800 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 shadow-sm cursor-pointer"
                    >
                      <option value="low">Normal (Planeamento)</option>
                      <option value="medium">Urgente (Esta semana)</option>
                      <option value="high">Altamente Crítico (Imediato)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1 mt-2">
                  <span className="text-xs text-neutral-600 block font-semibold">Mensagem / Detalhes Adicionais (Opcional)</span>
                  <textarea 
                    rows={3}
                    placeholder="Especifique pormenores, tipo de extintor, pragas predominantes, localização exata ou outras instruções necessárias."
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full bg-white border border-neutral-200 rounded-xl p-4 text-sm text-neutral-800 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 placeholder:text-neutral-400 transition-all resize-none shadow-sm"
                  />
                </div>
              </div>

              {/* Note */}
              <div className="flex items-start space-x-2.5 text-xs text-neutral-600 bg-neutral-50 p-3.5 border border-neutral-200 rounded-xl">
                <AlertCircle className="h-4.5 w-4.5 text-red-500 shrink-0 mt-0.5 animate-bounce" />
                <span>
                  O nosso pessoal técnico analisará o seu pedido em pormenor, podendo sugerir um levantamento de segurança in loco inteiramente gratuito em Nampula e províncias vizinhas para desenhar a solução técnica definitiva.
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 text-sm font-semibold text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-xl transition-all cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-xl flex items-center justify-center space-x-2 shadow hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Obter Proposta</span>
                </button>
              </div>
            </form>
          ) : (
            // Success view
            <div className="py-8 text-center space-y-6 animate-fade-in flex flex-col items-center">
              <div className="h-16 w-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center border border-green-200/50">
                <CheckCircle2 className="h-10 w-10 animate-bounce" />
              </div>
              <div className="space-y-2 max-w-md">
                <h3 className="font-display font-bold text-2xl text-neutral-900">Orçamento Direcionado com Sucesso!</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Agradecemos o seu contacto, <span className="font-bold text-neutral-900">{formData.name}</span>. Os seus dados técnicos foram recolhidos e preparados para correspondência oficial com o endereço <span className="font-bold text-neutral-950 underline">vendas@eef.co.mz</span>.
                </p>
              </div>

              <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl max-w-md text-xs text-neutral-600 leading-relaxed">
                <p className="font-bold text-neutral-900 mb-1">Escolha como pretende dar seguimento 👇</p>
                Pode abrir automaticamente o seu cliente de correio para enviar a mensagem formatada para novas propostas ou acelerar o atendimento via WhatsApp Oficial.
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full max-w-lg justify-center items-center">
                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm rounded-xl flex items-center justify-center space-x-2 shadow hover:-translate-y-0.5 transition-all cursor-pointer w-full sm:w-auto"
                >
                  <Mail className="h-4 w-4" />
                  <span>Enviar por Email</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm rounded-xl flex items-center justify-center space-x-2 shadow hover:-translate-y-0.5 transition-all cursor-pointer w-full sm:w-auto"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.388 1.45 5.216 1.451 5.4 0 9.794-4.397 9.797-9.798.002-2.618-1.017-5.08-2.87-6.934-1.852-1.854-4.311-2.875-6.93-2.875-5.4 0-9.79 4.399-9.794 9.8-.002 1.908.497 3.77 1.442 5.394l-.999 3.648 3.738-.981zM18.156 14.854c-.337-.17-1.996-.985-2.308-1.098-.31-.115-.536-.17-.761.17-.225.337-.872 1.098-1.069 1.323-.197.225-.394.254-.731.085-.337-.17-1.422-.524-2.709-1.672-.998-.89-1.673-1.99-1.87-2.327-.197-.337-.021-.519.148-.687.152-.152.337-.394.507-.591.169-.197.225-.337.337-.563.113-.225.056-.423-.028-.591-.084-.169-.761-1.832-1.042-2.507-.274-.66-.554-.57-.761-.58l-.647-.011c-.225 0-.591.085-.9.423-.31.337-1.183 1.155-1.183 2.817 0 1.662 1.211 3.268 1.38 3.493.169.225 2.385 3.641 5.776 5.102.807.348 1.437.556 1.927.712.81.258 1.547.222 2.13.135.65-.098 1.996-.817 2.278-1.606.282-.788.282-1.464.197-1.606-.084-.14-.31-.225-.647-.394z"/>
                  </svg>
                  <span>Enviar para WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-3 border border-neutral-300 hover:border-neutral-400 text-neutral-600 hover:text-neutral-900 font-semibold text-sm rounded-xl transition-all cursor-pointer w-full sm:w-auto"
                >
                  Fechar Janela
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
