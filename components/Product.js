import { formatMoney } from '@/helpers';
import useQuiosco from '@/hooks/useQuiosco';
import Image from 'next/image';

const Product = ({ product }) => {
  const { handleSetProduct, handleChangeModal } = useQuiosco();
  const { name, image, price } = product;
  return (
    <div className="border p-3">
      <Image
        src={`/assets/img/${image}.jpg`}
        alt={`Imagen Platillo ${name}`}
        width={300}
        height={400}
      />
      <div className="card-content p-5">
        <h3 className="text-1xl font-bold">{name}</h3>
        <p className="mt-5 font-black text-2xl text-amber-500">
          {formatMoney(price)}
        </p>

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
          onClick={() => {
            handleChangeModal();
            handleSetProduct(product);
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Product;
