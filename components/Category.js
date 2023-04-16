import Image from 'next/image';
import React from 'react';

const Category = ({ category }) => {
  const { name, icon, id } = category;
  return (
    <div className="flex items-center gap-4 w-full border p-5 hover:bg-amber-400">
      <Image
        width={40}
        height={40}
        src={`/assets/img/icono_${icon}.svg`}
        alt="image icon"
      />
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer "
      >
        {name}
      </button>
    </div>
  );
};

export default Category;
