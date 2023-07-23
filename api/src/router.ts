import { Router } from 'express';
import multer from 'multer';
import path from 'node:path';

import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { listProductByCategory } from './app/useCases/categories/listProductByCategory';
import { cancelOrder } from './app/useCases/orders/cancelOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { createOrder } from './app/useCases/orders/createOrder';
import { listOrders } from './app/useCases/orders/listOrders';
import { createProduct } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProducts';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  })
}); // salvar os arquivos dentro da maquina
//List Categories
router.get('/categories', listCategories);

//Create Category
router.post('/categories', createCategory);

//List Products
router.get('/products',  listProducts);


//Create Products
router.post('/products', upload.single('image'), createProduct);

//Get Products by Category
router.get('/categories/:categoryId/products', listProductByCategory);

//List orders
router.get('/orders', listOrders);


//Create order
router.post('/orders', createOrder);

//Change order status
router.patch('/orders/:orderId', changeOrderStatus);

//Delete/cancel order
router.delete('/orders/:orderId', cancelOrder);

