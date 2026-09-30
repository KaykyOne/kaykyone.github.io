type ServiceProject = {
  title: string
  category: string
  description: string
  technologies: string[]
  suggestedStack?: string[]
  url: string
}

export const serviceProjects: Record<string, ServiceProject[]> = {
  'desenvolvimento-de-sistemas': [
    {
      title: 'Plataforma de jogos educacionais',
      category: 'Sistema web · Educação',
      description: 'Plataforma adaptativa com configuração de dificuldade e temas visuais, registro de desempenho e relatórios para acompanhamento pedagógico.',
      technologies: ['Node.js', 'Express', 'MySQL', 'JavaScript', 'API REST'],
      url: 'https://www.99freelas.com.br/project/plataforma-web-de-jogos-educacionais-adaptativa-para-di-leve-773243',
    },
    {
      title: 'Prova de conceito e integração com MikroTik',
      category: 'Integração · Infraestrutura',
      description: 'Trabalho de prova de conceito e integração com MikroTik, conectando a necessidade do projeto à infraestrutura de rede.',
      technologies: ['Laravel', 'Next.js', 'MikroTik'],
      url: 'https://www.99freelas.com.br/project/poc-e-integracao-com-mikrotik-784200',
    },
    {
      title: 'Integração Binance com Chart Trading',
      category: 'Integração · Dados em tempo real',
      description: 'Conexão com a Binance e interação com gráficos para ajustar stop loss e take profit, reunindo integração de API e interface de operação.',
      technologies: ['API da Binance', 'WebSockets', 'Chart Trading'],
      url: 'https://www.99freelas.com.br/project/programador-para-conectar-a-binance-ao-chart-trading-arrastar-stop-e-ganho-780879',
    },
    {
      title: 'Manutenção de calculadora financeira',
      category: 'Software · Correção de lógica',
      description: 'Correção de uma função de cálculo em uma aplicação financeira existente, com foco no funcionamento da lógica em Python.',
      technologies: ['Python', 'Lógica de cálculo', 'Manutenção de software'],
      url: 'https://www.99freelas.com.br/project/corrigir-funcao-de-calculo-em-calculadora-financeira-python-771707',
    },
  ],
  'criacao-de-sites': [
    {
      title: 'Site para autoescola com foco em contatos comerciais',
      category: 'Site institucional · Geração de leads',
      description: 'Site orientado à apresentação dos serviços e à geração de contatos, com conteúdo comercial e caminhos para conversar pelo WhatsApp.',
      technologies: ['Web', 'WhatsApp', 'CRM', 'Conteúdo comercial'],
      suggestedStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      url: 'https://www.99freelas.com.br/project/site-para-autoescola-com-foco-em-geracao-de-leads-734752',
    },
    {
      title: 'Site de comércio internacional',
      category: 'Comércio digital · Produtos especializados',
      description: 'Projeto de site para comércio internacional de card games e produtos 3D, voltado à presença digital de um negócio com produtos especializados.',
      technologies: ['Web', 'Comércio digital', 'Apresentação de produtos'],
      suggestedStack: ['React', 'TypeScript', 'Integrações via API'],
      url: 'https://www.99freelas.com.br/project/site-de-comercio-internacional-para-card-games-e-produtos-3d-774664',
    },
    {
      title: 'Portfólio para empresa de manutenção predial',
      category: 'Presença digital · Serviços',
      description: 'Portfólio profissional para apresentar uma empresa de manutenção predial e seus serviços de forma organizada.',
      technologies: ['Web', 'Portfólio profissional', 'Conteúdo institucional'],
      suggestedStack: ['Next.js', 'React', 'Tailwind CSS'],
      url: 'https://www.99freelas.com.br/project/portfolio-profissional-para-empresa-de-manutencao-predial-782934',
    },
  ],
  'automacao-com-ia': [
    {
      title: 'Chatbot para WhatsApp e Telegram',
      category: 'Automação · Voz e texto',
      description: 'Projeto de chatbot para WhatsApp e Telegram com comandos de voz e texto, reunindo canais de comunicação em uma solução de automação.',
      technologies: ['WhatsApp', 'Telegram', 'Comandos de voz', 'Comandos de texto'],
      url: 'https://www.99freelas.com.br/project/chatbot-para-whatsapp-e-telegram-com-comandos-de-voz-e-texto-kayky-z-771969',
    },
    {
      title: 'Automação de fotos entre grupos de WhatsApp',
      category: 'Automação · Distribuição de mídia',
      description: 'Automação para encaminhar fotos entre grupos de WhatsApp e reduzir uma tarefa repetitiva de compartilhamento de mídia.',
      technologies: ['WhatsApp', 'Automação de mensagens', 'Distribuição de mídia'],
      url: 'https://www.99freelas.com.br/project/automacao-para-encaminhar-fotos-do-whatsapp-entre-grupos-kayky-z-772851',
    },
  ],
  'design-e-midia-digital': [
    {
      title: 'Identidade visual e presença digital',
      category: 'Marca · Site · Mídia paga',
      description: 'Projeto reunindo identidade visual, presença digital, melhorias no site e Google Ads para apresentar o negócio em diferentes canais.',
      technologies: ['Google Ads', 'Identidade visual', 'Web', 'Mídia digital'],
      url: 'https://www.99freelas.com.br/project/identidade-visual-presenca-digital-melhorias-no-site-e-google-ads-785077',
    },
    {
      title: 'SEO e campanhas para geração de clientes',
      category: 'Busca · Comunicação comercial',
      description: 'Trabalho de SEO, presença no Google e campanhas voltadas à geração de contatos comerciais.',
      technologies: ['SEO', 'Google', 'Campanhas digitais'],
      url: 'https://www.99freelas.com.br/project/seo-google-e-campanhas-para-geracao-de-clientes-780552',
    },
    {
      title: 'Identidade visual e embalagem de produto',
      category: 'Design · Marca e embalagem',
      description: 'Criação de identidade visual e embalagem para um suplemento dermatológico canino, conectando a apresentação da marca ao produto.',
      technologies: ['Identidade visual', 'Design de embalagem', 'Comunicação visual'],
      url: 'https://www.99freelas.com.br/project/identidade-visual-e-embalagem-para-suplemento-dermatologico-canino-kayky-z-764851',
    },
    {
      title: 'Apresentação comercial para mentoria',
      category: 'Design · Material de vendas',
      description: 'Projeto de apresentação comercial para mentoria, organizado para apoiar a comunicação da oferta e a conversa de vendas.',
      technologies: ['Apresentação comercial', 'Design de slides', 'Comunicação de oferta'],
      suggestedStack: ['PowerPoint', 'Canva'],
      url: 'https://www.99freelas.com.br/project/apresentacao-comercial-para-mentoria-powerpoint-ou-canva-770556',
    },
  ],
}
