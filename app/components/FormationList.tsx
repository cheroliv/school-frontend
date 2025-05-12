'use client';

import React from 'react';
import FormationCard from './FormationCard';
import { Formation } from '../types/Formation';

interface FormationListProps {
  formations: Formation[];
}

const FormationList: React.FC<FormationListProps> = ({
  formations,
}) => {
  return (
    <div className="formation-container flex flex-wrap justify-center">
      {formations.map((formation) => (
        <FormationCard
          key={formation.title}
          title={formation.title}
          description={formation.description}
          imageSrc={formation.imageSrc}
          altText={formation.altText}
        />
      ))}
    </div>
  );
};

export default FormationList;
