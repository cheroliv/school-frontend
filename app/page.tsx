'use client';

import type React from 'react';
import Core from './components/Core';
import type { Training } from './types/Training';
import Windows from './components/Windows';
import { useState, useEffect } from 'react';

const Home: React.FC = () => {
  console.log("Page d'accueil chargée");

  const [trainings, setTrainings] = useState<Training[]>([]);

  useEffect(() => {
    async function getTrainings() {
      const resp = await fetch('/data.json');
      const data = await resp.json();
      setTrainings(data);
    }

    getTrainings();
  }, []);
  return (
    <Windows>
      <Core title="Catalogue des Formations">
        <div className="flex flex-wrap justify-center">
          {trainings.map((training) => (
            <div
              key={training.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-4 border border-gray-300 rounded-md overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={training.imageUrl || '/placeholder.svg'}
                alt={`Formation ${training.title}`}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{training.title}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    {training.level}
                  </span>
                </div>
                <p className="mt-2 text-sm">{training.description}</p>
                <div className="mt-4 flex flex-wrap gap-1">
                  {training.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm font-medium">{training.duration}</span>
                  <span className="text-lg font-bold">{training.price} €</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Core>
    </Windows>
  );
};

export default Home;
