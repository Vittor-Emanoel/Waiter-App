import { Request, Response } from 'express';

import { Product } from '../../models/Product';
//upload image nodejs
export async function createProduct(req: Request, res: Response ) {
  try{
    const imagePath = req.file?.filename;// só acessa caso tenha o filename
    const { name , description, price, category, ingredients} = req.body;

    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : []
    });

    res.status(201).json(product);
  } catch {
    res.status(500).json({
      error: 'Internal Server Error!',
    });
  }
}
