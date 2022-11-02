import express from 'express'
import { adminAccess, protect } from '../middleware/authMiddleware.js' 

const router = express.Router()

import { searchProduct, addProduct, getProducts, getProductsById } from '../controllers/productController.js'

router.route('/').get(getProducts)

router.route('/:id').get(getProductsById) 

router.route('/').post(adminAccess, addProduct) 

router.route('/find').get(searchProduct);

export default router