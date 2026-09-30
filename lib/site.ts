export const business = {
  name: 'Kayky Zioti',
  url: 'https://kayky.dev.br',
  cnpj: '68.685.517/0001-03',
  email: 'kaykyzioti@gmail.com',
  telephone: '+5517997419297',
  whatsapp: 'https://wa.me/5517997419297',
}

export function whatsappHref(message = 'Olá, Kayky! Gostaria de conversar sobre um projeto para minha empresa.') {
  return `${business.whatsapp}?text=${encodeURIComponent(message)}`
}

export const services = [
  {
    slug: 'desenvolvimento-de-sistemas',
    title: 'Desenvolvimento de sistemas sob medida',
    shortTitle: 'Sistemas sob medida',
    description: 'Desenvolvimento de software e sistemas web para empresas. Centralize informações e integre ferramentas com contrato, nota fiscal e contratação por CNPJ.',
    summary: 'Transforme planilhas, controles paralelos e tarefas manuais em um sistema web pensado para a operação da sua empresa.',
    problem: 'Quando informações ficam espalhadas entre planilhas, mensagens e ferramentas isoladas, a equipe perde tempo conferindo dados e repetindo tarefas. Um software sob medida pode organizar esse fluxo e conectar as etapas que hoje dependem de trabalho manual.',
    deliverables: [
      ['Sistemas de gestão', 'Cadastros, acompanhamento de etapas, permissões de acesso e painéis para a equipe trabalhar com informações centralizadas.'],
      ['Aplicações web', 'Interfaces acessíveis pelo navegador, desenvolvidas com Next.js, React, TypeScript e uma estrutura adequada ao projeto.'],
      ['Integrações entre ferramentas', 'APIs e conexões entre sistemas existentes para reduzir redigitação e manter a informação disponível onde ela é necessária.'],
    ],
    project: 'NovusCFC',
    projectHref: '/projetos/novuscfc',
    projectDescription: 'Veja como a vivência na operação de autoescolas orientou a construção de um sistema de gestão com informações centralizadas e fluxos claros.',
    questions: [
      ['Quando vale a pena desenvolver um sistema sob medida?', 'Quando o processo da empresa não se adapta bem às ferramentas existentes, exige integrações específicas ou depende de controles manuais que dificultam a operação. A conversa inicial ajuda a avaliar se um desenvolvimento próprio faz sentido.'],
      ['É possível integrar o sistema às ferramentas que já uso?', 'Sim, quando as ferramentas oferecem APIs ou outras formas de integração. A viabilidade técnica e os limites de cada plataforma são avaliados antes da definição do escopo.'],
      ['Como são definidos preço e prazo?', 'O orçamento considera os fluxos, as funcionalidades, as integrações e as etapas de entrega. O prazo e o investimento são apresentados na proposta após o entendimento da demanda.'],
    ],
  },
  {
    slug: 'criacao-de-sites',
    title: 'Criação de sites profissionais para empresas',
    shortTitle: 'Sites e landing pages',
    description: 'Criação de sites profissionais e landing pages para empresas, com layout responsivo, SEO técnico e caminhos claros para solicitar um orçamento.',
    summary: 'Apresente sua empresa com clareza e transforme o interesse de quem chega ao site em uma conversa comercial.',
    problem: 'Um site precisa explicar o que sua empresa faz, para quem o serviço serve e como contratar. A criação parte dessas perguntas para organizar conteúdo, navegação e chamadas de contato, com uma experiência que funciona em celulares e computadores.',
    deliverables: [
      ['Sites institucionais', 'Desenvolvimento com Next.js, React e TypeScript para apresentar serviços, diferenciais, projetos e canais de contato da sua empresa.'],
      ['Landing pages', 'Páginas dedicadas a uma oferta, com mensagem clara, informações para a decisão e chamada para contato.'],
      ['SEO técnico e desempenho', 'Títulos, descrições, estrutura de conteúdo, dados estruturados e arquivos de indexação adequados às páginas do projeto.'],
    ],
    project: 'projetos entregues',
    projectHref: '/#projetos',
    projectDescription: 'Conheça os sites e aplicações já desenvolvidos para negócios de diferentes setores, com links para os projetos disponíveis.',
    questions: [
      ['O site funciona no celular?', 'Sim. O layout é desenvolvido para se adaptar a diferentes tamanhos de tela, com navegação e conteúdo acessíveis em celulares e computadores.'],
      ['O site já é preparado para aparecer no Google?', 'O projeto pode incluir a base técnica de SEO, como metadados, conteúdo indexável, sitemap e estrutura de páginas. A posição nas buscas depende também da concorrência, da relevância do conteúdo e da autoridade do domínio.'],
      ['Posso contratar apenas uma landing page?', 'Sim. A proposta pode contemplar uma página focada em um serviço ou campanha, ou um site com várias páginas, conforme o objetivo e o conteúdo necessário.'],
    ],
  },
  {
    slug: 'automacao-com-ia',
    title: 'Automação com IA para empresas',
    shortTitle: 'Automação e IA',
    description: 'Automação com inteligência artificial, chatbots para WhatsApp e integração com CRM para organizar atendimento e reduzir tarefas repetitivas.',
    summary: 'Organize o atendimento, conecte ferramentas e reduza tarefas repetitivas com automações adaptadas ao seu negócio.',
    problem: 'Perguntas recorrentes, contatos sem contexto e atualizações manuais entre ferramentas consomem tempo da equipe. A automação pode cuidar de etapas bem definidas e entregar as informações necessárias para que uma pessoa continue o atendimento.',
    deliverables: [
      ['Chatbots de atendimento', 'Respostas orientadas pelas informações do negócio, com fluxos definidos e caminhos para encaminhar a conversa à equipe.'],
      ['WhatsApp e CRM', 'Integrações para organizar contatos, registrar contexto e apoiar o acompanhamento de oportunidades comerciais.'],
      ['Automação de processos', 'Conexões entre APIs e ferramentas para executar tarefas recorrentes e manter os fluxos de informação organizados.'],
    ],
    project: 'Chatzinho',
    projectHref: '/projetos/chatzinho',
    projectDescription: 'Veja um projeto de atendimento inteligente via WhatsApp que combina respostas, classificação de interesse e integração com CRM.',
    questions: [
      ['A automação substitui todo o atendimento humano?', 'O objetivo é automatizar etapas repetitivas e dar contexto à equipe. O projeto define quando a automação responde e quando a conversa deve seguir para uma pessoa.'],
      ['A IA pode usar as informações da minha empresa?', 'Sim. A solução pode trabalhar com uma base de informações do negócio. As fontes, os limites das respostas e o processo de atualização são definidos durante o projeto.'],
      ['Existem custos além do desenvolvimento?', 'Pode haver custos de hospedagem, APIs, modelos de IA e plataformas de comunicação. As dependências previstas e seus critérios de cobrança são apresentados na proposta.'],
    ],
  },
  {
    slug: 'design-e-midia-digital',
    title: 'Design e mídia digital para empresas',
    shortTitle: 'Design e mídia digital',
    description: 'Identidade visual, materiais comerciais, presença digital e campanhas para empresas. Conheça projetos de design e mídia realizados por Kayky Zioti.',
    summary: 'Conecte a identidade da sua marca ao site, às campanhas e aos materiais que apresentam sua empresa aos clientes.',
    problem: 'Uma marca aparece em muitos pontos de contato: no site, nas buscas, nas campanhas, nos materiais comerciais e no próprio produto. O trabalho de design e mídia organiza essa presença para que a oferta seja compreendida e a comunicação tenha consistência.',
    deliverables: [
      ['Identidade e comunicação visual', 'Identidade visual, elementos gráficos e design de embalagem para apresentar a marca e seus produtos.'],
      ['Materiais comerciais', 'Apresentações de vendas, portfólios e peças digitais para explicar serviços e apoiar a comunicação com clientes.'],
      ['Presença digital e campanhas', 'Conteúdo para sites, SEO e Google Ads alinhados à oferta e aos objetivos comerciais do negócio.'],
    ],
    project: 'outros trabalhos e avaliações',
    projectHref: '/#avaliacoes',
    projectDescription: 'Leia os relatos dos clientes sobre projetos de identidade visual, apresentações comerciais, presença digital e campanhas.',
    questions: [
      ['Posso contratar design sem desenvolver um site?', 'Sim. O escopo pode incluir apenas identidade visual, apresentação comercial, embalagem ou peças digitais, de acordo com a necessidade do projeto.'],
      ['Você também trabalha com SEO e Google Ads?', 'Sim. A proposta pode incluir melhorias de SEO e campanhas no Google Ads. O escopo considera a oferta, as páginas de destino e os objetivos de comunicação da empresa.'],
      ['O investimento em anúncios está incluído no serviço?', 'O orçamento de mídia é separado do serviço de criação e gestão. Os custos e as responsabilidades são definidos na proposta antes da contratação.'],
    ],
  },
] as const
