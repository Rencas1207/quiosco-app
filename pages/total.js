import { formatMoney } from '@/helpers';
import useQuiosco from '@/hooks/useQuiosco';
import Layout from '@/layout/Layout';

export default function Total() {
  const { pedido, name, setName, colocarOrden, total } = useQuiosco();

  const comprobarPedido = () => {
    return pedido.length === 0 || name === '' || name.length < 3;
  };

  return (
    <Layout pagina="Total y confirmar pedido">
      <h1 className="text-4xl font-black">Total y confirmar pedido</h1>
      <p className="text-2xl my-10">Confirma tu pedido a continuación</p>

      <form onSubmit={colocarOrden}>
        <div>
          <label htmlFor="name" className="block uppercase text-slate-800">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar {''}{' '}
            <span className="font-bold">{formatMoney(total)}</span>
          </p>
        </div>

        <div className="mt-5">
          <input
            type="submit"
            className={`${
              comprobarPedido()
                ? 'bg-indigo-100'
                : 'bg-indigo-600 hover:bg-indigo-800'
            } w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center cursor-pointer`}
            value="Confirmar pedido"
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </Layout>
  );
}
