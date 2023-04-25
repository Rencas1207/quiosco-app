import Order from '@/components/Order';
import AdminLayout from '@/layout/AdminLayout';
import axios from 'axios';
import useSWR from 'swr';

export default function Admin() {
  const fetcher = () => axios('/api/orders').then((datos) => datos.data);
  const { data, error, isLoading } = useSWR('/api/orders', fetcher);
  console.log(data);

  return (
    <AdminLayout pagina={'Admin'}>
      <h1 className="text-4xl font-black">Panel de Administración</h1>
      <p className="text-2xl my-1">Administra las ordenes</p>

      {data && data.length ? (
        data.map((order) => <Order key={order.id} order={order} />)
      ) : (
        <p>No hay ordenes pendientes</p>
      )}
    </AdminLayout>
  );
}
