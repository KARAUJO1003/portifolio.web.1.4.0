'use client'
import { MessageSquareShare } from 'lucide-react'
import Card from '../../global/cards/card'
import { SectionContainer } from '../../global/sections/sections-container'
import { SocialMediasContact } from '../../global/social-medias'
import { DescriptionTypography } from '../../global/typography/description'
import { TitleTypography } from '../../global/typography/title'
import { ButtonBorderGradient } from '../../global/buttons/gradient-border-button'
import { toast } from 'sonner'
import Link from 'next/link'
import { useState } from 'react'

export const ContactsSection = () => {
  const [value, setValue] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [result, setResult] = useState('')
  function onEmailSubmit() {
    if (!value) {
      toast.error('Digite um e-mail válido.')
    } else {
      setResult(value)
      toast.success('E-mail enviado com sucesso!')
    }
  }

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
                className="text-primary hover:underline transition-all"
                href="https://api.whatsapp.com/send?phone=5594991257923&text=Fale%20comigo%20atrav%C3%A9s%20do%20Whatsapp."
                target="_blank"
              >
                whatsapp
              </Link>{' '}
              ou se preferir deixe seu endereço de e-mail logo abaixo.
            </span>
          </Card.Header>
          <Card.Body className="aspect-auto">
            <Link
              className="text-primary transition-all cursor-pointer"
              href="https://api.whatsapp.com/send?phone=5594991257923&text=Fale%20comigo%20atrav%C3%A9s%20do%20Whatsapp."
              target="_blank"
            >
              <Card.Container className="mx-4 flex gap-4 items-center p-4 hover:bg-secondary/50">
                <MessageSquareShare size={18} />
                <div>
                  <DescriptionTypography className=" text-left text-primary max-w-60">
                    Fale comigo via Whatsapp.
                  </DescriptionTypography>
                </div>
              </Card.Container>
            </Link>
            <div className="flex w-full p-4">
              <input
                type="email"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Digite seu email"
                className="outline-none w-full h-9 text-xs rounded bg-transparent border border-input px-2"
              />
            </div>
          </Card.Body>
          <Card.Footer>
            <ButtonBorderGradient onClick={onEmailSubmit} variant="secondary">
              Enviar
            </ButtonBorderGradient>
          </Card.Footer>
        </Card.Container>
      </div>
    </SectionContainer>
  )
}
