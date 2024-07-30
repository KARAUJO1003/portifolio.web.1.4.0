'use client'

import { ButtonBorderGradient } from '@/app/_components/shared/buttons/gradient-border-button'
import { Header } from '@/app/_components/shared/header'
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
