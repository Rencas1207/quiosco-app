import useQuiosco from '@/hooks/useQuiosco';
import Layout from '@/layout/Layout';

export default function Home() {
  const { currentCategory } = useQuiosco();
  return (
    <Layout pagina={`Menú ${currentCategory?.name}`}>
      <h1 className="text-4xl font-black">{currentCategory?.name}</h1>
      <p className="text-2xl my-10">
        Elige y personaliza tu pedido a continuación
      </p>
    </Layout>
  );
}
