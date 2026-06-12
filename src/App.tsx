import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BudgetModal from './components/BudgetModal';
import { COMPANY_DETAILS } from './data';
import { MessageSquare, Flame, X, MessageCircle, Send, ArrowUp } from 'lucide-react';

// ES Module imports for images to ensure Vercel and production builds process and bundle assets correctly
import hero_brand_safety from './assets/images/regenerated_image_1781259468522.png';
import hero_inspector_bg from './assets/images/hero_inspector_bg_1781259781550.jpg';
import extinguishers_row from './assets/images/extinguishers_row_1781256643263.jpg';
import pest_control_warehouse from './assets/images/pest_control_warehouse_1781256663557.jpg';
import sprinklers_industrial from './assets/images/regenerated_image_1781260331165.webp';
import recarga_extintores_massa from './assets/images/regenerated_image_1781266623837.png';
import alarme_central from './assets/images/regenerated_image_1781266740624.png';
import treino_brigada from './assets/images/regenerated_image_1781267265664.png';

// Formatted asset paths mapped to ESM imported objects
const ASSET_IMAGES = {
  hero_brand_safety,
  hero_inspector_bg,
  extinguishers_row,
  pest_control_warehouse,
  sprinklers_industrial,
  recarga_extintores_massa,
  alarme_central,
  treino_brigada
};

export default function App() {
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [initialServiceId, setInitialServiceId] = useState<string | undefined>(undefined);
  const [isWpChatOpen, setIsWpChatOpen] = useState(false);
  const [wpMessage, setWpMessage] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBudget = (serviceId?: string) => {
    setInitialServiceId(serviceId);
    setBudgetOpen(true);
  };

  const handleSendWhatsAppChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wpMessage.trim()) return;
    const encoded = encodeURIComponent(wpMessage);
    const url = `https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encoded}`;
    window.open(url, '_blank');
    setWpMessage('');
    setIsWpChatOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 antialiased selection:bg-red-600 selection:text-white" id="main-app">
      
      {/* Decorative top lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent z-50 pointer-events-none" />

      {/* Main Header / Navigation */}
      <Navbar onOpenBudgetModal={() => handleOpenBudget()} />

      {/* Sections scroll layouts */}
      <main>
        {/* Hero Section */}
        <Hero onOpenBudgetModal={() => handleOpenBudget()} heroImg={ASSET_IMAGES.hero_inspector_bg} />

        {/* About Section */}
        <About aboutImg={ASSET_IMAGES.extinguishers_row} />

        {/* Services List and Details Section */}
        <Services onOpenBudgetModal={(id) => handleOpenBudget(id)} />

        {/* Portfolio / Projects Section */}
        <Projects 
          onOpenBudgetModal={(id) => handleOpenBudget(id)} 
          pestControlImg={ASSET_IMAGES.pest_control_warehouse}
          extinguishersRowImg={ASSET_IMAGES.extinguishers_row} 
          sprinklersIndustrialImg={ASSET_IMAGES.sprinklers_industrial}
          recargaExtintoresMassaImg={ASSET_IMAGES.recarga_extintores_massa}
          alarmeCentralImg={ASSET_IMAGES.alarme_central}
          treinoBrigadaImg={ASSET_IMAGES.treino_brigada}
        />

        {/* Value Propositions Group */}
        <WhyChooseUs />

        {/* Reviews and Testimonials Grid */}
        <Testimonials />

        {/* Form and Contact Information Section */}
        <Contact />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Premium Budget / Quotation Simulator Modal Overlay */}
      <BudgetModal 
        isOpen={budgetOpen} 
        onClose={() => setBudgetOpen(false)} 
        initialServiceId={initialServiceId} 
      />

      {/* Floating Active WhatsApp Widget & Chat Bubble */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-4" id="whatsapp-floating-widget">
        
        {/* Floating Quick Dialog Box */}
        {isWpChatOpen && (
          <div className="bg-white border border-neutral-200 rounded-2xl shadow-2xl w-80 overflow-hidden flex flex-col md:w-85 animate-scale-up" id="wp-quick-chat">
            
            {/* Header part */}
            <div className="bg-emerald-600 px-4 py-3.5 flex items-center justify-between text-white">
              <div className="flex items-center space-x-2.5">
                <div className="relative">
                  <div className="h-8 w-8 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <Flame className="h-4.5 w-4.5 text-white animate-pulse" />
                  </div>
                  <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-400 border border-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-none">Consultor Essimela</div>
                  <div className="text-[10px] text-emerald-250 mt-0.5 font-medium flex items-center">
                    <span className="h-1 w-1 bg-emerald-300 rounded-full inline-block mr-1" /> Ativo agora
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsWpChatOpen(false)}
                className="text-white hover:bg-white/10 p-1 rounded-md transition-colors cursor-pointer"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Simulated Chat feed */}
            <div className="p-4 bg-neutral-50 flex-1 space-y-3.5 max-h-48 overflow-y-auto">
              <div className="bg-white border border-neutral-200 p-3 rounded-2xl rounded-tl-none text-xs text-neutral-700 leading-relaxed max-w-[85%] shadow-sm">
                Olá! Sente-se à vontade para nos enviar qualquer dúvida técnica de incêndio ou orçamentos. Responderemos de imediato! 🚀
              </div>
            </div>

            {/* Action input bar */}
            <form onSubmit={handleSendWhatsAppChat} className="p-2 border-t border-neutral-200 bg-neutral-50 flex items-center space-x-1.5">
              <input 
                type="text"
                required
                placeholder="Escreva sua pergunta aqui..."
                value={wpMessage}
                onChange={(e) => setWpMessage(e.target.value)}
                className="flex-1 bg-white border border-neutral-200 rounded-xl px-3 py-1.5 text-xs text-neutral-850 focus:outline-none focus:border-emerald-500 placeholder:text-neutral-400"
              />
              <button 
                type="submit"
                className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors cursor-pointer"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>

          </div>
        )}

        {/* Floating Back To Top Button - styled with Montserrat font styling */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="h-12 w-12 rounded-full bg-white/95 hover:bg-red-600 border border-neutral-200 hover:border-red-650 text-neutral-600 hover:text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            title="Voltar ao início"
            id="back-to-top-btn"
          >
            <ArrowUp className="h-5 w-5 transform group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        )}

        {/* Core Widget Circular Green Trigger */}
        <button
          onClick={() => setIsWpChatOpen(!isWpChatOpen)}
          className={`h-14 w-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer relative ${
            isWpChatOpen ? 'bg-neutral-250 text-neutral-800 rotate-90 border border-neutral-300 shadow-lg' : 'bg-emerald-600 hover:bg-emerald-500 hover:shadow-emerald-950/20'
          }`}
          title="Fale connosco no WhatsApp"
          id="wp-trigger-btn"
        >
          {isWpChatOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <>
              <MessageSquare className="h-6 w-6 fill-current animate-pulse" />
              <span className="absolute -top-1.5 -right-1 bg-red-500 border-2 border-emerald-600 text-white font-mono text-[9px] font-bold h-5 w-5 rounded-full flex items-center justify-center animate-bounce">
                1
              </span>
            </>
          )}
        </button>

      </div>

    </div>
  );
}
