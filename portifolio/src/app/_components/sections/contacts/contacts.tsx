import Card from '../../global/cards/card'
import { SectionContainer } from '../../global/sections/sections-container'
import { SocialMediasContact } from '../../global/social-medias'
import { DescriptionTypography } from '../../global/typography/description'
import { TitleTypography } from '../../global/typography/title'

export const ContactsSection = () => {
  return (
    <SectionContainer
      id="contacts-section"
      className="min-h-screen flex justify-between"
    >
      <div>
        <TitleTypography size="text-4xl"> Contacts</TitleTypography>
        <DescriptionTypography className="text-left mt-5 max-w-80">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </DescriptionTypography>
        <SocialMediasContact className="flex flex-col gap-3 mt-10" />
      </div>
      <div>
        <Card.Container className="p-40"></Card.Container>
      </div>
    </SectionContainer>
  )
}
