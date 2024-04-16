'use client'
import { Rocket } from 'lucide-react'
import Card from '../../global/cards/card'
import { SectionContainer } from '../../global/sections/sections-container'
import { SocialMediasContact } from '../../global/social-medias'
import { DescriptionTypography } from '../../global/typography/description'
import { TitleTypography } from '../../global/typography/title'
import { ButtonBorderGradient } from '../../global/buttons/gradient-border-button'
import { toast } from 'sonner'
import Link from 'next/link'

export const ContactsSection = () => {
  return (
    <SectionContainer
      id="contacts-section"
      className="min-h-[810px] flex justify-center gap-40 items-center max-lg:gap-20 max-md:flex-col max-md:justify-start"
    >
      <div className="contact-section">
        <TitleTypography size="lg"> Contato</TitleTypography>
        <DescriptionTypography className="text-left mt-5 max-w-80 boxTexts">
          <strong>
            Pronto para desbloquear o potencial do seu próximo projeto?
          </strong>{' '}
          Vamos nos conectar e dar vida à sua visão. Quer você seja um
          recrutador em busca de talentos ou um cliente ávido por inovação,
          <strong> juntos criaremos algo extraordinário</strong>.
        </DescriptionTypography>
        <SocialMediasContact className="flex flex-col gap-3 mt-10 " />
      </div>
      <div className="contact-section">
        <Card.Container className=" max-w-80">
          <Card.Header>
            <strong className="text-sm">Vamos nos conhecer?</strong>
            <span className="text-xs text-muted-foreground font-normal">
              Me chama no{' '}
              <Link
                className="text-violet-400 hover:underline transition-all"
                href="https://wa.me/qr/IEHEHAUSLZHRG1"
                target="_blank"
              >
                whatsapp
              </Link>{' '}
              ou se preferir deixe seu endereço de e-mail logo abaixo.
            </span>
          </Card.Header>
          <Card.Body className="aspect-auto">
            <Card.Container className="mx-4 flex gap-4 items-center p-4">
              <Rocket size={18} />
              <div>
                <DescriptionTypography className="text-left text-muted-foreground max-w-60">
                  Preencha seu e-mail para eu entrar em contato com você.
                </DescriptionTypography>
              </div>
            </Card.Container>
            <div className="flex w-full p-4">
              <input
                placeholder="Digite seu email"
                className="outline-none w-full h-9 text-xs rounded bg-transparent border border-input px-2"
              />
            </div>
          </Card.Body>
          <Card.Footer>
            <ButtonBorderGradient
              onClick={() => toast.success('E-mail enviado com sucesso!')}
              variant="secondary"
            >
              Enviar
            </ButtonBorderGradient>
          </Card.Footer>
        </Card.Container>
      </div>
    </SectionContainer>
  )
}
