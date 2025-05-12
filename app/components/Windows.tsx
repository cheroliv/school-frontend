"use client"

import type React from "react"
import type { ReactNode } from "react"
import MenuNavigation from "./MenuNavigation"
import Footer from "./Footer"

type WindowsProps = {
  children: ReactNode
}

export const Windows: React.FC<WindowsProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#2b2b2b] text-[#c5c8c6]">
      <MenuNavigation />
      <main className="container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  )
}

export default Windows
