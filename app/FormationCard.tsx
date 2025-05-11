'use client';

import React from 'react';

interface FormationCardProps {
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
}

const FormationCard: React.FC<FormationCardProps> = ({ title, description, imageSrc, altText }) => {
  return (
    <div className="formation-card flex-basis-300 margin-1em border border-solid border-gray-300 rounded-5px overflow-hidden transition-transform hover:scale-105">
      <img src={imageSrc} alt={altText} className="w-full h-52 object-cover" />
      <div className="formation-card-body padding-1em">
        <h3 className="card-title text-xl font-semibold">{title}</h3>
        <p className="card-text text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default FormationCard;
