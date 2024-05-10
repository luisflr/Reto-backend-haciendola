import { Router } from 'express'

import { verifyToken } from '../middleware/middleware.js'
import { createProduct, getProductById, getProducts, updateProduct } from '../controllers/products.controller.js'

const router = Router()

router.get('/products', verifyToken, getProducts)
router.get('/products/:id', verifyToken, getProductById)
router.post('/products', verifyToken, createProduct)
router.put('/products/:id', verifyToken, updateProduct)
router.delete('/products/:id', verifyToken)

export default router;