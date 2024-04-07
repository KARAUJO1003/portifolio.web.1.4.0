import { Rocket } from 'lucide-react'
import Card from '../../global/cards/card'
import { SectionContainer } from '../../global/sections/sections-container'
import { SocialMediasContact } from '../../global/social-medias'
import { DescriptionTypography } from '../../global/typography/description'
import { TitleTypography } from '../../global/typography/title'
import { ButtonBorderGradient } from '../../global/buttons/gradient-border-button'

export const ContactsSection = () => {
  return (
    <SectionContainer
      id="contacts-section"
      className="min-h-[810px] flex justify-center gap-40 items-center max-lg:gap-20 max-md:flex-col max-md:justify-start"
    >
      <div>
        <TitleTypography size="lg"> Contacts</TitleTypography>
        <DescriptionTypography className="text-left mt-5 max-w-80">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </DescriptionTypography>
        <SocialMediasContact className="flex flex-col gap-3 mt-10" />
      </div>
      <div>
        <Card.Container className=" max-w-80">
          <Card.Header>
            <strong className="text-sm">Vamos trabalhar juntos.</strong>
            <span className="text-xs text-muted-foreground font-normal">
              Será um grande prazer, fazer parte dessa jornada
            </span>
          </Card.Header>
          <Card.Body className="aspect-auto">
            <Card.Container className="mx-4 flex gap-4 items-center p-4">
              <Rocket size={18} />
              <div>
                <strong className="text-sm">Vantagens</strong>
                <DescriptionTypography className="text-left text-muted-foreground max-w-60">
                  Consectetur adipisicing elit.
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
            <ButtonBorderGradient variant="secondary">
              Send
            </ButtonBorderGradient>
          </Card.Footer>
        </Card.Container>
      </div>
    </SectionContainer>
  )
}
