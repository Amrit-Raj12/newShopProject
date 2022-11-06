import express from 'express'
import { adminAccess, protect } from '../middleware/authMiddleware.js' 

const router = express.Router()

import { searchProduct, addProduct, getProducts, getProductsById } from '../controllers/productController.js'

router.route('/').get(getProducts)

router.route('/:id').get(getProductsById)

router.route('/').post(adminAccess, addProduct)

router.route('/find/:title&:category&:size&:price').post(searchProduct);
/* router.route('/find/:title').post(searchProduct);
router.route('/find/:title&:category').post(searchProduct);
router.route('/find/:title&:category&:size&:price').post(searchProduct);
 */
export default router