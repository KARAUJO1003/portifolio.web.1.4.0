import { randomUUID } from 'crypto'
import { Github, Instagram, Linkedin } from 'lucide-react'
import financeFire01 from '../../public/finance-fire01.png'
import financeFire02 from '../../public/finance-fire02.png'
import financeFire03 from '../../public/finance-fire03.png'
import financeFire04 from '../../public/finance-fire04.png'
import financeFire05 from '../../public/finance-fire05.png'
import conversorApp01 from '../../public/conversor-app01.png'
import conversorApp02 from '../../public/conversor-app02.png'
import orion01 from '../../public/orion-tasks01.png'
import orion02 from '../../public/orion-tasks02.png'

interface ProjectProps {
  id: string
  title: string
  description: string
  urlDeploy: string
  urlRepository: string
  images: Array<{
    src: string
    alt: string
  }>
}

export const SocialMedias = [
  {
    url: 'https://www.instagram.com/kaesyofelix/',
    label: 'Instagram',
    icon: <Instagram size={16} />,
  },
  {
    url: 'https://www.instagram.com/kaesyofelix/',
    label: 'Github',
    icon: <Github size={16} />,
  },
  {
    url: 'https://www.instagram.com/kaesyofelix/',
    label: 'Linkedin',
    icon: <Linkedin size={16} />,
  },
]
export const NavMenuItems = [
  {
    url: '/',
    label: 'Home',
  },
  {
    url: '/#about',
    label: 'About',
  },
  {
    url: '/#soft-skills-section',
    label: 'Soft Skills',
  },
  {
    url: '/#projects-section',
    label: 'Projects',
  },
  {
    url: '/#contacts-section',
    label: 'Contact',
  },
]
export const Projects: ProjectProps[] = [
  {
    id: randomUUID(),
    title: 'Finance Fire',
    description:
      'Aplicativo web responsivo, para gestão de finanças pessoais. Aplicativo web responsivo, para gestão de finanças pessoaisAplicativo web responsivo, para gestão de finanças pessoais',
    urlDeploy: 'https://portifolio.kaesyofelix.com.br/',
    urlRepository: 'https://portifolio.kaesyofelix.com.br/',
    images: [
      {
        src: financeFire01.src,
        alt: 'Imagem de projeto Finance Fire',
      },
      {
        src: financeFire02.src,
        alt: 'Imagem de projeto Finance Fire',
      },
      {
        src: financeFire03.src,
        alt: 'Imagem de projeto Finance Fire',
      },
      {
        src: financeFire04.src,
        alt: 'Imagem de projeto Finance Fire',
      },
      {
        src: financeFire05.src,
        alt: 'Imagem de projeto Finance Fire',
      },
    ],
  },
  {
    id: randomUUID(),
    title: 'Conversor para extenso.',
    description:
      'Conversor de números por estenso responsivo. Aplicativo web responsivo, para gestão de finanças pessoais',
    urlDeploy: 'https://portifolio.kaesyofelix.com.br/',
    urlRepository: 'https://portifolio.kaesyofelix.com.br/',
    images: [
      {
        src: conversorApp01.src,
        alt: 'Imagem de projeto ConversorApp',
      },
      {
        src: conversorApp02.src,
        alt: 'Imagem de projeto ConversorApp',
      },
    ],
  },
  {
    id: randomUUID(),
    title: 'lista de tarefas simples',
    description:
      'Todo list responsivo, com modos dark e light, construido com HTML, CSS, e JavaScript.',
    urlDeploy: 'https://portifolio.kaesyofelix.com.br/',
    urlRepository: 'https://portifolio.kaesyofelix.com.br/',
    images: [
      {
        src: orion01.src,
        alt: 'Imagem de projeto ConversorApp',
      },
      {
        src: orion02.src,
        alt: 'Imagem de projeto ConversorApp',
      },
    ],
  },
]
