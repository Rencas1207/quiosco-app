import useQuiosco from '../hooks/useQuiosco';
import Image from 'next/image';
import Category from './Category';

const Sidebar = () => {
  const { categories } = useQuiosco();
  return (
    <>
      <Image
        width={180}
        height={100}
        src="/assets/img/logo.svg"
        alt="imagen logotipo"
        className="mx-auto"
      />

      <nav className="mt-10">
        {categories?.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
