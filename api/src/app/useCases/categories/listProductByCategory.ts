import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function listProductByCategory(req: Request, res: Response ) {
  try {
    const {categoryId} = req.params;

    const products = await Product.find().where('category').equals(categoryId);

    res.json(products);
  }catch {
    res.status(500);
  }
}




