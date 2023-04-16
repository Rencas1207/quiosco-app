import { PrismaClient } from '@prisma/client';

export default function Home({ categorys }) {
  console.log(categorys);
  return <h1>Next.js</h1>;
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();

  const categorys = await prisma.category.findMany();

  return {
    props: {
      categorys,
    },
  };
};
