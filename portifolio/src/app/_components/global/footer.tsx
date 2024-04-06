import React from 'react'
import { NavMenu } from './nav-menu/nav-menu'
import { SocialMediasContact } from './social-medias'
import { DescriptionTypography } from './typography/description'

export const Footer = () => {
  return (
    <footer className="p-20 z-10 flex flex-col items-center justify-between gap-9 bg-gradient-to-bl to-principalPink from-principalBlue">
      <NavMenu />
      <SocialMediasContact variant="icon" border />
      <DescriptionTypography className="text-muted-foreground">
        © 2024 kaesyo felix policy
      </DescriptionTypography>
    </footer>
  )
}
