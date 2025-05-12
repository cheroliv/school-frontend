"use client"

import type React from "react"
import type { ReactNode } from "react"

type CoreProps = {
  title?: string
  children: ReactNode
}

export const Core: React.FC<CoreProps> = ({ title, children }) => {
  return (
    <section className="py-8">
      {title && <h2 className="text-center text-2xl font-bold mb-6">{title}</h2>}
      <div className="container mx-auto px-4">{children}</div>
    </section>
  )
}

export default Core
