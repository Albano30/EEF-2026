import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section className="py-20 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Group */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase block mb-3">
            Depoimentos Reais
          </span>
          <h2 className="font-display font-black text-3xl text-neutral-900 tracking-tight leading-none mb-3">
            Quem confia no nosso compromisso
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-600">
            A satisfação dos nossos parceiros corporativos e comerciais é o nosso principal indicador de segurança bem-sucedida.
          </p>
        </div>

        {/* Testimonials Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map(t => (
            <div 
              key={t.id}
              className="bg-neutral-50 border border-neutral-200 p-6 rounded-2xl flex flex-col justify-between hover:border-neutral-300 hover:bg-white transition-all shadow-sm"
            >
              <div className="space-y-4">
                {/* Stars Row and Quote Mark */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-neutral-300 rotate-180" />
                </div>

                <p className="font-sans text-sm text-neutral-705 italic leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-neutral-150 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-neutral-900">{t.name}</h4>
                  <p className="text-xs text-neutral-550 mt-0.5">{t.role}</p>
                </div>
                <span className="text-[10px] font-mono font-bold text-red-650 tracking-wider bg-red-50 border border-red-150 px-2 py-1 rounded">
                  {t.company}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
