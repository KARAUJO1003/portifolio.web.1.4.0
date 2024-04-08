'use client'

import { ButtonBorderGradient } from '@/app/_components/global/buttons/gradient-border-button'
import { Header } from '@/app/_components/global/header'
import React from 'react'
import { useRouter } from 'next/navigation'

export const HeaderProjectPage = () => {
  const router = useRouter()

  return (
    <Header>
      <ButtonBorderGradient onClick={() => router.back()}>
        voltar
      </ButtonBorderGradient>
    </Header>
  )
}
