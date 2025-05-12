"use client"

import type React from "react"
import Link from "next/link"

export const MenuNavigation: React.FC = () => {
  return (
    <header id="header" className="bg-[#007bff] text-white text-center py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Talaria - Organisme Formateur</h1>
        <nav className="flex justify-center space-x-6">
          <Link href="/" className="hover:underline">
            Accueil
          </Link>
          <Link href="/catalogue" className="hover:underline">
            Catalogue
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default MenuNavigation
