import { formatMoney } from '@/helpers';
import useQuiosco from '@/hooks/useQuiosco';
import Image from 'next/image';

const ModalProduct = () => {
  const { product, handleChangeModal } = useQuiosco();
  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={200}
          height={300}
          alt={`Imagen de ${product.name}`}
          src={`/assets/img/${product.image}.jpg`}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleChangeModal}>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              stroke-width={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5">{product.name}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">
          {formatMoney(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ModalProduct;
