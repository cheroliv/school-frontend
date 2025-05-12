'use client';

import React from 'react';

const Footer: React.FC = () => {
  console.log('Pied de page affiché');

  return (
    <footer className="bg-blue-700 text-white padding-y-2em text-center">
      <p>&copy; 2024 Talaria - Organisme Formateur. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
