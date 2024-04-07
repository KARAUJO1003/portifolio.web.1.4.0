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
      className="min-h-[810px] flex justify-between"
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
        <Card.Container className="">
          <Card.Header>
            <strong className="text-sm">Vamos trabalhar juntos.</strong>
            <span className="text-xs text-muted-foreground font-normal">
              Será um grande prazer, fazer parte dessa jornada
            </span>
          </Card.Header>
          <Card.Body>
            <Card.Container className="mx-4 flex gap-4 items-center p-4">
              <Rocket size={18} />
              <div>
                <strong className="text-sm">Vantagens</strong>
                <DescriptionTypography className="text-left text-muted-foreground max-w-60">
                  Consectetur adipisicing elit.
                </DescriptionTypography>
              </div>
            </Card.Container>
            <div className=" flex gap-4 items-center p-4">
              <span className="size-2 bg-emerald-500 rounded-full" />
              <div>
                <strong className="text-sm">
                  Your call has been confirmed.
                </strong>
                <DescriptionTypography className="text-left text-muted-foreground max-w-60">
                  1 hour ago
                </DescriptionTypography>
              </div>
            </div>
            <div className=" flex gap-4 items-center p-4">
              <span className="size-2 bg-emerald-500 rounded-full" />
              <div>
                <strong className="text-sm">
                  Your call has been confirmed.
                </strong>
                <DescriptionTypography className="text-left text-muted-foreground max-w-60">
                  1 hour ago
                </DescriptionTypography>
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <input
              placeholder="Digite seu email"
              className="outline-none h-9 text-xs rounded bg-transparent border border-input px-2"
            />
            <ButtonBorderGradient variant="secondary">
              Send
            </ButtonBorderGradient>
          </Card.Footer>
        </Card.Container>
      </div>
    </SectionContainer>
  )
}
