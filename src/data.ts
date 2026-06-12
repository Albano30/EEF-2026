import { ServiceItem, ProjectItem, TestimonialItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'recarga',
    title: 'Manutenção e Recarga de Extintores',
    description: 'Recarga, teste hidrostático e manutenção preventiva conforme normas técnicas vigentes.',
    details: [
      'Teste hidrostático pressurizado',
      'Pintura e selagem oficial de segurança',
      'Substituição de peças desgastadas ou danificadas',
      'Garantia de conformidade com normas nacionais'
    ],
    iconName: 'ShieldAlert'
  },
  {
    id: 'sistemas',
    title: 'Sistemas de Combate a Incêndio',
    description: 'Projeto, instalação e manutenção de redes de hidrantes, sprinklers e centrais de alarme endereçáveis.',
    details: [
      'Instalação de sprinklers automáticos',
      'Montagem de bombas e redes de hidrantes',
      'Sistemas de detecção de fumo e calor de última geração',
      'Integração com centrais e sirenes de alarme'
    ],
    iconName: 'Flame'
  },
  {
    id: 'inspeção',
    title: 'Inspeção e Certificação',
    description: 'Vistorias técnicas e emissão de relatórios oficiais e certificados de conformidade em segurança contra incêndios.',
    details: [
      'Auditorias de segurança para licenciamento',
      'Avaliação técnica de riscos específicos',
      'Emissão de laudos para seguradoras',
      'Verificação periódica de equipamentos e sinalização'
    ],
    iconName: 'FileCheck'
  },
  {
    id: 'fumigação',
    title: 'Fumigação e Controle de Pragas',
    description: 'Desinfestação profunda de armazéns, escritórios e residências com produtos certificados e de alta eficácia.',
    details: [
      'Desinfestação de armazéns e silos de graneis',
      'Combate integrado a roedores e insetos rastejantes',
      'Sanitização ecológica de escritórios e áreas comuns',
      'Garantia de segurança alimentar e sanitária'
    ],
    iconName: 'Sparkles'
  },
  {
    id: 'consultoria',
    title: 'Consultoria e Formação',
    description: 'Desenvolvimento de planos de emergência contra incêndios, organização de planos de evacuação e formação profissional de brigadas.',
    details: [
      'Treino prático de manuseamento de extintores',
      'Desenvolvimento de planos de fuga e sinalização',
      'Exercícios de evacuação simulada',
      'Formação de Brigadas de Emergência Internas'
    ],
    iconName: 'Users'
  },
  {
    id: 'técnicos',
    title: 'Serviços Técnicos e Customizados',
    description: 'Atendimento corporativo, industrial e comercial em toda a região com equipas altamente equipadas e qualificadas.',
    details: [
      'Contratos de manutenção preventiva anual',
      'Manutenção preventiva e corretiva rápida',
      'Atendimento de emergência 24/7 para clientes cadastrados',
      'Dimensionamento personalizado de extintores por área'
    ],
    iconName: 'Wrench'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'sprinklers-industrial',
    title: 'Sistema de sprinklers industriais',
    category: 'Sistemas',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    description: 'Instalação completa de rede de tubulação de ferro galvanizado e sprinklers automáticos em pavilhão logístico.'
  },
  {
    id: 'fumigacao-armazem',
    title: 'Fumigação de armazém alimentício',
    category: 'Fumigação',
    image: 'pest_control_warehouse', // Will map to generated asset
    description: 'Tratamento preventivo de pragas e higienização geral de grande armazém de grãos em Nampula.'
  },
  {
    id: 'recarga-extintores-massa',
    title: 'Recarga massiva de extintores',
    category: 'Recarga',
    image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&q=80&w=800',
    description: 'Manutenção técnica de mais de 300 extintores de CO2 e Pó Químico para frota fabril.'
  },
  {
    id: 'alarme-central',
    title: 'Central de alarme contra incêndio',
    category: 'Sistemas',
    image: 'https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?auto=format&fit=crop&q=80&w=800',
    description: 'Instalação de painel inteligente endereçável com sensores óticos industriais em área comercial.'
  },
  {
    id: 'frota-certificada',
    title: 'Frota de extintores certificados',
    category: 'Inspeção',
    image: 'extinguishers_row', // Will map to generated asset
    description: 'Fornecimento e certificação de extintores portáteis de alta eficiência com suporte técnico contínuo.'
  },
  {
    id: 'treino-brigada',
    title: 'Treino de brigada de incêndio',
    category: 'Consultoria',
    image: 'https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&q=80&w=800',
    description: 'Formação presencial com simulação realista e combate ao fogo ao vivo para colaboradores industriais.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'José Mandava',
    role: 'Diretor de Logística',
    company: 'Nampula Logística S.A.',
    text: 'A equipa da Essimela é altamente profissional. Fizeram a recarga de todos os extintores da nossa frota com agilidade incrível e nos deram total apoio legal com certificados oficiais.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Fátima Tembe',
    role: 'Gestora de QHSE',
    company: 'Nacala Terminais',
    text: 'Contratamos a Essimela para a fumigação geral dos nossos silos alimentares e fomos extremamente bem atendidos. O controle de pragas foi definitivo e o suporte excelente.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Armando Cossa',
    role: 'Gerente Geral',
    company: 'Supermercados Milénio',
    text: 'A instalação e certificação da nossa central de alarme foram rápidas e totalmente em conformidade com as normas técnicas. Dá gosto trabalhar com profissionais moçambicanos competentes.',
    rating: 5
  }
];

export const COMPANY_DETAILS = {
  name: 'ESSIMELA - EXTINTORES & FUMIGAÇÕES',
  tagline: 'Servindo Moçambique com Segurança e Confiança',
  address: 'Av. Do Trabalho - Cidade de Nampula, Moçambique',
  phones: ['+258 849 378 149', '+258 860 212 216'],
  email: 'essimelaextintores663@gmail.com',
  whatsapp: '258849378149', // normalized number for direct WhatsApp links
  nuit: '124662117'
};
