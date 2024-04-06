import { ComponentPropsDefault } from '@/types/page-props-default'
import React from 'react'

export const ButtonBorderGradient = ({ children }: ComponentPropsDefault) => {
  return (
    <button className="border rounded px-5 py-2 text-xs uppercase">
      {children}
    </button>
  )
}
