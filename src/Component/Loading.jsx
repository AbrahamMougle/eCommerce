import React from 'react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className=" . loader  h-16 "></div>
      <p className="mt-4 text-lg text-gray-700">Chargement en cours...</p>
    </div>
  );
};

