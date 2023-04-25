import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  // Get orders
  const orders = await prisma.orden.findMany({
    where: {
      state: false,
    },
  });

  res.status(200).json(orders);

  // Create orders
  if (req.method === 'POST') {
    const order = await prisma.orden.create({
      data: {
        name: req.body.name,
        order: req.body.pedido,
        total: parseFloat(req.body.total),
        fecha: req.body.fecha,
      },
    });
    res.status(200).json(order);
  }
}
