import express from 'express'

const router = express.Router()

import { searchProduct, addProduct, getProducts, getProductsById } from '../controllers/productController.js'

router.route('/').get(getProducts)

router.route('/:id').get(getProductsById) 

router.route('/').post(addProduct) 

router.route('/find').get(searchProduct);

export default router