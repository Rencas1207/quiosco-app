import { formatMoney } from '@/helpers';
import useQuiosco from '@/hooks/useQuiosco';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const ModalProduct = () => {
  const { product, handleChangeModal, handleAddPedido, pedido } = useQuiosco();
  const [edition, setEdition] = useState(false);
  const handleInitialState = () => {
    const productoState = pedido?.find((prod) => prod.id === product.id);
    if (productoState) {
      setEdition(true);
      return productoState.quantity;
    }
    return 1;
  };
  const [quantity, setQuantity] = useState(handleInitialState);

  // useEffect(() => {
  //   // Comprobar si el modal actual esta en el pedido
  //   if (pedido.some((pedidoState) => pedidoState.id === product.id)) {
  //     const productEdition = pedido.find(
  //       (pedidoState) => pedidoState.id === product.id
  //     );
  //     setEdition(true);
  //     setQuantity(productEdition.quantity);
  //   }
  // }, [product, pedido]);

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
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5">{product.name}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">
          {formatMoney(product.price)}
        </p>

        <div className="flex gap-4 mt-5">
          <button
            type="button"
            onClick={() => {
              if (quantity <= 1) return;
              setQuantity(quantity - 1);
            }}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>

          <p className="text-3xl">{quantity}</p>

          <button
            type="button"
            onClick={() => {
              if (quantity >= 5) return;
              setQuantity(quantity + 1);
            }}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>
        </div>

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
          onClick={() => handleAddPedido({ ...product, quantity })}
        >
          {edition ? 'Guardar cambios' : 'Añadir al pedido'}
        </button>
      </div>
    </div>
  );
};

export default ModalProduct;
