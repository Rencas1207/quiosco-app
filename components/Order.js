import { formatMoney } from '@/helpers';
import Image from 'next/image';

const Order = ({ orden }) => {
  const { id, name, total, order } = orden;
  return (
    <div className="border p-10 space-y-5">
      <h3 className="text-2xl font-bold">Orden: {id}</h3>
      <p className="text-lg font-bold">Cliente: {name}</p>

      <div>
        {order?.map((platillo) => (
          <div
            key={platillo.id}
            className="py-3 flex border-b last-of-type:border-0 items-center"
          >
            <div className="w-32">
              <Image
                width={300}
                height={400}
                src={`/assets/img/${platillo.image}.jpg`}
                alt={`Imagen platillo ${platillo.name}`}
              />
            </div>
            <div className="p-5 space-y-2">
              <h4 className="text-xl font-bold text-amber-500">
                {platillo.name}
              </h4>
            </div>
          </div>
        ))}
      </div>

      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black text-4xl text-amber-500">
          Total a pagar: {formatMoney(total)}
        </p>
      </div>
    </div>
  );
};

export default Order;
