import useQuiosco from '@/hooks/useQuiosco';
import Image from 'next/image';

const Category = ({ category }) => {
  const { currentCategory, handleClickCategory } = useQuiosco();

  const { name, icon, id } = category;
  return (
    <div
      className={`${
        currentCategory?.id === id ? 'bg-amber-400' : ''
      } flex items-center gap-4 w-full border p-5 hover:bg-amber-400 cursor-pointer`}
    >
      <Image
        width={40}
        height={40}
        src={`/assets/img/icono_${icon}.svg`}
        alt="image icon"
      />
      <button
        type="button"
        className="text-2xl font-bold"
        onClick={() => handleClickCategory(id)}
      >
        {name}
      </button>
    </div>
  );
};

export default Category;
