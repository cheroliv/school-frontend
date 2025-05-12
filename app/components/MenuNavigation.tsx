'use client';

import type React from 'react';
// import Link from "next/link"

export const MenuNavigation: React.FC = () => {
  return (
      <div id="header" className="bg-[#007bff] text-white text-center py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-4">Talaria</h1>
          <h2 className="text-2xl font-bold mb-4">Organisme Formateur</h2>
          <nav className="flex justify-center space-x-6">
            {/*<Link href="/" className="hover:underline">*/}
            {/*  Accueil*/}
            {/*</Link>*/}
            {/*<Link href="/catalogue" className="hover:underline">*/}
            {/*  Catalogue*/}
            {/*</Link>*/}
            {/*<Link href="/calendrier" className="hover:underline">*/}
            {/*  Calendrier*/}
            {/*</Link>*/}
            {/*<Link href="/contact" className="hover:underline">*/}
            {/*  Contact*/}
            {/*</Link>*/}
            {/*<Link href="/apropos" className="hover:underline">*/}
            {/*  A propos*/}
            {/*</Link>*/}
          </nav>
        </div>
      </div>
  );
};

export default MenuNavigation;
