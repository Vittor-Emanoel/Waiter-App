import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response ) {
  try{
    const {table, products} = req.body;

    const order = await Order.create({table, products});

    res.status(201).json(order);
  } catch(error) {
    res.status(500).json({
      error: 'Internal Server Error!',
    });
    console.log(error);

  }
}
