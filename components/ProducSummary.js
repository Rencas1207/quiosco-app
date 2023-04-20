import { formatMoney } from '@/helpers';
import Image from 'next/image';

const ProducSummary = ({ product }) => {
  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
      <div className="md:w-1/6">
        <Image
          width={200}
          height={300}
          alt={`Image producto ${product.name}`}
          src={`/assets/img/${product.image}.jpg`}
        />
      </div>
      <div className="md:w-5/6">
        <p className="text-3xl font-bold">{product.name}</p>
        <p className="text-xl font-bold mt-2">Cantidad: {product.quantity}</p>
        <p className="text-xl font-bold mt-2 text-amber-500">
          Precio: {formatMoney(product.price)}
        </p>

        <p className="text-lg mt-2 text-gray-700">
          Subtotal: {formatMoney(product.price * product.quantity)}
        </p>
      </div>
    </div>
  );
};

export default ProducSummary;
