import { Github, Instagram, Linkedin } from 'lucide-react'
import financeFire02 from '../../public/finance-fire01.png'
import financeBg from '../../public/finance-bg.png'
import financeFire01 from '../../public/finance-fire02.png'
import financeFire03 from '../../public/finance-fire03.png'
import financeFire04 from '../../public/finance-fire04.png'
import financeFire05 from '../../public/finance-fire05.png'
import conversorApp02 from '../../public/conversor-app01.png'
import conversorApp01 from '../../public/conversor-app02.png'
import orion01 from '../../public/orion-tasks01.png'
import orion02 from '../../public/orion-tasks02.png'
import portifolioImage from '../../public/portifolio-image.png'
import portifolioImage01 from '../../public/portifolio-image01.png'
import bannerBuzzy from '../../public/buzzy/banner-buzzy.jpg'
import firstPageBuzzy from '../../public/buzzy/first-page.jpg'
import fomr1Buzzy from '../../public/buzzy/fomr1.jpg'
import form2Buzzy from '../../public/buzzy/form2.jpg'
import loginBuzzy from '../../public/buzzy/login.jpg'
import skeletonBuzzy from '../../public/buzzy/skeleton.jpg'
import orgBannerLight from '../../public/organograma/org-light.jpeg'
import orgBannerDark from '../../public/organograma/org-dark.jpeg'
import KanBanLigth from '../../public/kanban/ligth.png'
import KanBanDark from '../../public/kanban/dark.png'
import bannerDark from '../../public/rename-files/bannerLight2.jpeg.png'
import { StaticImageData } from 'next/image'

interface ProjectPropsRequiriment {
  title: string
  description: string
}

interface ProjectProps {
  id: string
  title: string
  description: string
  urlDeploy?: string
  urlRepository?: string
  tags: Array<{ label: string }>
  requiriments: {
    functionaisRequiriments: ProjectPropsRequiriment[]
    noFunctionalRequiriments: ProjectPropsRequiriment[]
    businessRule: ProjectPropsRequiriment[]
  }
  images: Array<{
    src: StaticImageData | string
    alt: string
  }>
}

interface SkillsProps {
  id: string
  title: string
  description: string
  date: string
}

export const Skills: SkillsProps[] = [
  {
    id: '1',
    title: 'Desenvolvimento web avançado no piloto automático. Com Next.js',
    description:
      'Posso criar aplicativos web poderosos e dinâmicos com facilidade, oferecendo uma experiência de usuário incomparável.',
    date: '03/2023',
  },
  {
    id: '2',
    title: 'TypeScript',
    description:
      'Ao aprender os primeiros conceitos de typescript, eu me apaixonei e hoje eu amo utilizar nos projetos sempre que possivel, apesar de ainda ter muito a aprender estou sempre tentanto utiliza-lo da melhor forma.',
    date: '05/2023',
  },
  {
    id: '3',
    title: 'Tailwind CSS: Estilo sem esforço.',
    description:
      'Com Tailwind CSS, posso estilizar meus projetos de forma rápida e eficiente, garantindo uma aparência elegante e consistente em todos os dispositivos.',
    date: '06/2023',
  },
  {
    id: '4',
    title: 'Shadcn-UI/GSAP',
    description:
      'Detalhes que fazem a diferença. Com Shadcn, UI e GSAP, posso adicionar toques finais e animações deslumbrantes que elevam a experiência do usuário a novos patamares.',
    date: '07/2023',
  },
  {
    id: '5',
    title: 'React Js',
    description:
      'Ultilizando o conceito de componentes reutilizáveis que o react proporciona, consigo criar interfaces com facilidade.',
    date: '02/2023',
  },
  {
    id: '6',
    title: 'Mongo DB',
    description:
      'Desenvolvi o projeto Finance Fire utilizando o mongo db como base de dados, utilizando conceitos de relacionamento entre tabelas.',
    date: '02/2024',
  },
  {
    id: '7',
    title: 'PostgreSQL',
    description:
      'Desenvolvi o projeto Buzzy Demarcações, esse foi meu primeiro projeto full-stack, é um projeto ousado, onde utilizei pela primeira vez um banco de dados e criei a propria API dentro do Next JS e o projeto ainda tem muito a ser desenvolvido.',
    date: '01/2024',
  },
  {
    id: '8',
    title: 'React Hook Form & ZOD',
    description:
      'Utilizo ZOD e React Hook Form em conjunto para validação de dados de formulários avançado.',
    date: '01/2024',
  },
  {
    id: '9',
    title: 'Insomnia/Postman',
    description:
      'Para testes em API, gosto de utilizar o Postman ou Insomnia para testar requisições HTTP.',
    date: '07/2023',
  },
  {
    id: '10',
    title: 'NextAuth/JWT',
    description:
      'Para autenticação de usuários já fiz alguns projetos de teste utilizando tanto o sistema de login que eu mesmo criei toda a interface e sistema de autenticação com JWT e Postgres e também já utilizei NextAuth com o Google Provider para autenticação e Mongo DB.',
    date: '12/2023',
  },
  {
    id: '11',
    title: 'Node JS & Express',
    description:
      'Estou me aprofundando em conhecimentos de criação de APIs REST utilizando Node e Express e pretendendo partir para algum framwork ou micro-frameork como Fastfy.',
    date: '01/2024',
  },
]

export const SocialMedias = [
  {
    url: 'https://www.instagram.com/kaesyo_/',
    label: 'Instagram',
    icon: <Instagram size={16} />,
  },
  {
    url: 'https://github.com/KARAUJO1003',
    label: 'Github',
    icon: <Github size={16} />,
  },
  {
    url: 'https://www.linkedin.com/in/ka%C3%A9syo-f%C3%A9lix-837345271/',
    label: 'Linkedin',
    icon: <Linkedin size={16} />,
  },
]

export const NavMenuItems = [
  {
    url: '/',
    label: 'Inicio',
  },
  {
    url: '/#about',
    label: 'Sobre',
  },
  {
    url: '/#soft-skills-section',
    label: 'Habilidades',
  },
  {
    url: '/#projects-section',
    label: 'Projetos',
  },
  {
    url: '/#contacts-section',
    label: 'Contato',
  },
]

export const Projects: ProjectProps[] = [
  {
    id: '1',
    title: 'Finance Fire',
    description:
      'Este projeto pessoal fullstack, representa a culminação de habilidades e paixões em desenvolvimento de software. Desenvolvido com Next.js, MongoDB, TailwindCSS, Shadcn UI, GSAP, Recharts, TypeScript, Zod para validação de dados e React Hook Form com componentes Shadcn UI, este aplicativo foi concebido para ser uma experiência de gestão financeira intuitiva e visualmente estimulante.',
    urlDeploy: 'https://finance-fire.vercel.app/',
    urlRepository: 'https://github.com/KARAUJO1003/finance-fire',
    tags: [
      { label: 'next.js' },
      { label: 'server actions' },
      { label: 'tailwind.css' },
      { label: 'typescript' },
      { label: 'prisma' },
      { label: 'mongo-db' },
      { label: 'shadcn-ui' },
      { label: 'gsap' },
    ],
    requiriments: {
      functionaisRequiriments: [
        {
          title: 'Tecnologias de ponta',
          description:
            'Utilizando as mais recentes tecnologias e bibliotecas, este projeto explora o potencial do Next.js 14, incorporando server actions e route handlers para uma experiência de backend eficiente e dinâmica.',
        },
      ],
      noFunctionalRequiriments: [
        {
          title: 'Interface Cativante:',
          description:
            'Com uma estética dark mode aprimorada por tons de azul vibrante, a interface é tanto funcional quanto esteticamente agradável, proporcionando uma experiência de usuário imersiva.',
        },
      ],
      businessRule: [
        {
          title: 'Gestão Financeira Simplificada:',
          description:
            'Projetado para simplificar a gestão de finanças pessoais, o aplicativo oferece recursos abrangentes, desde o acompanhamento de despesas até a geração de relatórios visuais detalhados.',
        },
      ],
    },
    images: [
      {
        src: financeBg,
        alt: 'Imagem de projeto Finance Fire',
      },
      {
        src: financeFire01,
        alt: 'Imagem de projeto Finance Fire',
      },
      {
        src: financeFire02,
        alt: 'Imagem de projeto Finance Fire',
      },
      {
        src: financeFire03,
        alt: 'Imagem de projeto Finance Fire',
      },
      {
        src: financeFire04,
        alt: 'Imagem de projeto Finance Fire',
      },
      {
        src: financeFire05,
        alt: 'Imagem de projeto Finance Fire',
      },
    ],
  },

  {
    id: '2',
    title: 'Portifolio 1.4.0',
    description:
      'Essa é a versão mais recente do meu portifolio, site desenvolvido com ituito de mostrar um pouco sobre mim, minhas habilidades e principalmente os projetos que desenvolvi até então.',
    urlDeploy: 'https://port-web-1-4-0-me9l.vercel.app/',
    urlRepository: 'https://github.com/KARAUJO1003/port.web.1.4.0',
    tags: [
      { label: 'next.js' },
      { label: 'tailwind.css' },
      { label: 'shadcn-ui' },
      { label: 'gsap' },
    ],
    requiriments: {
      functionaisRequiriments: [],
      noFunctionalRequiriments: [],
      businessRule: [],
    },
    images: [
      {
        src: portifolioImage01,
        alt: 'Imagem de projeto Portifolio',
      },
      {
        src: portifolioImage,
        alt: 'Imagem de projeto Portifolio',
      },
    ],
  },
  {
    id: '3',
    title: 'Kanban Board',
    description:
      'Um projeto simples, que foi iniciado a fins de estudo sobre Drag and Drop, e aprimorado com a utilização de Tailwind CSS, Shadcn UI e GSAP para animações.',
    urlDeploy: 'https://board-kanban-three.vercel.app/',
    urlRepository: 'https://github.com/KARAUJO1003/board-kanban',
    tags: [
      { label: 'next.js' },
      { label: 'tailwind.css' },
      { label: 'shadcn-ui' },
      { label: 'react-dnd' },
    ],
    requiriments: {
      functionaisRequiriments: [],
      noFunctionalRequiriments: [],
      businessRule: [],
    },
    images: [
      {
        src: KanBanLigth,
        alt: 'Imagem de projeto Kanban',
      },
      {
        src: KanBanDark,
        alt: 'Imagem de projeto Kanban',
      },
    ],
  },
  {
    id: '4',
    title: 'Componente Organograma (OrgChart)',
    description:
      'Este projeto foi desenvolvido com o intuito de facilitar a visualização de organogramas de empresas, com um design simples e intuitivo, o usuário pode adicionar, editar e excluir cargos e funcionários, além de visualizar o organograma em tempo real. O projeto foi desenvolvido com Next.js, TailwindCSS,  TypeScript, React-DnD, para possibilitar a reordenação dos cargos e funcionários por meio de arrastar e soltar.',
    tags: [
      { label: 'next.js' },
      { label: 'tailwind.css' },
      { label: 'typescript' },
      { label: 'react-dnd' },
      { label: 'proejto proprio' },
    ],
    requiriments: {
      functionaisRequiriments: [],
      noFunctionalRequiriments: [],
      businessRule: [],
    },
    images: [
      {
        src: orgBannerLight,
        alt: 'Imagem de projeto orgBanner',
      },
      {
        src: orgBannerDark,
        alt: 'Imagem de projeto orgBanner',
      },
    ],
  },
  {
    id: '5',
    title: 'Buzzy Demarcações',
    description:
      'Sistema de agendamento de demarcações para loteamento, o sistema foi criando pensando em otimizar a visualização de dados de demarcações, para empresa que trabalho atualmente. Antes era tudo feito com excel. (Projeto em desenvolvimento)',
    urlDeploy: 'https://next-demarcacao.vercel.app/portal',
    urlRepository: 'https://github.com/KARAUJO1003/next-demarcacao',
    tags: [
      { label: 'next.js' },
      { label: 'tailwind.css' },
      { label: 'shadcn-ui' },
      { label: 'postgresql' },
      { label: 'prisma' },
      { label: 'server-actions' },
      { label: 'next-auth' },
    ],
    requiriments: {
      functionaisRequiriments: [],
      noFunctionalRequiriments: [],
      businessRule: [],
    },
    images: [
      {
        src: bannerBuzzy,
        alt: 'Imagem de projeto Buzzy',
      },
      {
        src: firstPageBuzzy,
        alt: 'Imagem de projeto Buzzy',
      },
      {
        src: fomr1Buzzy,
        alt: 'Imagem de projeto Buzzy',
      },
      {
        src: form2Buzzy,
        alt: 'Imagem de projeto Buzzy',
      },
      {
        src: loginBuzzy,
        alt: 'Imagem de projeto Buzzy',
      },
      {
        src: skeletonBuzzy,
        alt: 'Imagem de projeto Buzzy',
      },
    ],
  },

  {
    id: '6',
    title: 'Conversor para extenso.',
    description:
      'Este projeto ReactJS apresenta uma única tela com um design intuitivo, elegante e simplificado, criado para oferecer uma experiência de usuário fluida e eficiente. O foco principal é um conversor de números por extenso, com a capacidade de mascarar inputs nos formatos monetario e normal, além de permitir que o usuário escolha entre diferentes formatos de resultado.',
    urlDeploy: 'https://conversor-app.vercel.app/',
    urlRepository: 'https://github.com/KARAUJO1003/conversor-app',
    tags: [
      { label: 'react.js' },
      { label: 'mascaras de input' },
      { label: 'tailwind.css' },
      { label: 'java script' },
      { label: 'shadcn-ui' },
    ],
    requiriments: {
      functionaisRequiriments: [],
      noFunctionalRequiriments: [],
      businessRule: [],
    },
    images: [
      {
        src: conversorApp01,
        alt: 'Imagem de projeto ConversorApp',
      },
      {
        src: conversorApp02,
        alt: 'Imagem de projeto ConversorApp',
      },
    ],
  },

  {
    id: '7',
    title: 'Formatar nome de arquivos',
    description:
      'Esse projeto foi desenvolvido intuito bem específico para resolver um problema na empresa que trabalho, ele facilita manter a nomenclatura em todos os arquivos, seguindo um padrão estabelecido e validado entre a equipe. Os dados possuem diversas validações, uma interface simples intuitiva e funcional, deixando dicas de uso para os usuários conseguirem agilidade.',
    urlDeploy: 'https://rename-contracts.vercel.app/',
    urlRepository: 'https://vercel.com/karaujo1003s-projects/rename-contracts',
    tags: [
      { label: 'tailwind-css' },
      { label: 'shadcn-ui' },
      { label: 'next-js' },
    ],
    requiriments: {
      functionaisRequiriments: [],
      noFunctionalRequiriments: [],
      businessRule: [
        {
          title: 'Padrão de nomenclaturas',
          description:
            'O projeto precisa conter algumas validações simples nos campos a serem preenchidos para estarem conforme o padrão a ser seguido.',
        },
        {
          title: 'Simplicidade',
          description:
            'O projeto precisa de uma interface simples e intuitiva, o foco é manter somente no lado client',
        },
        {
          title: 'Praticidade',
          description:
            'Com intenção de torna-lo fácil de usar e proporcionar agilidade, foram adicionadas algumas regras para acessibilidade e dicas através de Tooltips deixando o usuário bem informado de como obter melhor proveito possivel da aplicação.',
        },
      ],
    },
    images: [
      {
        src: bannerDark,
        alt: 'Imagem de projeto Renomeador de arquivos',
      },
    ],
  },

  {
    id: '8',
    title: 'lista de tarefas',
    description:
      'Todo list responsivo, com modos dark e light, construido com HTML, CSS, e JavaScript.',
    urlDeploy: 'https://karaujo1003.github.io/todolist-web/',
    urlRepository: 'https://github.com/KARAUJO1003/todolist-web',
    tags: [
      { label: 'html' },
      { label: 'css' },
      { label: 'java script' },
      { label: 'local storage' },
    ],
    requiriments: {
      functionaisRequiriments: [],
      noFunctionalRequiriments: [],
      businessRule: [],
    },
    images: [
      {
        src: orion01,
        alt: 'Imagem de projeto ConversorApp',
      },
      {
        src: orion02,
        alt: 'Imagem de projeto ConversorApp',
      },
    ],
  },
]
