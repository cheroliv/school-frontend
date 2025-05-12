"use client"

import type React from "react"

export const Footer: React.FC = () => {
  console.log("Pied de page affiché")

  return (
    <footer className="bg-[#4285f4] text-white py-8 text-center">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Talaria - Organisme Formateur. Tous droits réservés.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="hover:underline">
            Mentions légales
          </a>
          <a href="#" className="hover:underline">
            Politique de confidentialité
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
