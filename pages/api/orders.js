import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  if (req.method === 'POST') {
    const order = await prisma.orden.create({
      data: {
        name: req.body.name,
        order: req.body.pedido,
        total: parseFloat(req.body.total),
        fecha: req.body.fecha,
      },
    });
    console.log(order);
    res.json(order);
  }
}
