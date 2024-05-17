import { Router } from 'express'

import { verifyToken } from '../middleware/middleware.js'
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/products.controller.js'

const router = Router()

/**
 * @openapi
 * /products:
 *   get:
 *     tags:
 *       - Products
 *     security:
 *        - bearerAuth: []
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Products found
 *                 products:
 *                   type: array
 *                   items: 
 *                     $ref: "#/components/schemas/Products"
 *       500:
 *         description: SERVER ERROR
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ServerErrorResponse"
 */
router.get('/products', verifyToken, getProducts)

/**
 * @openapi
 * /products/:id:
 *   get:
 *     tags:
 *       - Products
 *     security:
 *        - bearerAuth: []
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product found
 *                 product:
 *                   $ref: "#/components/schemas/ProductId"
 *       404:
 *         description: NOT FOUND
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/NotFoundProduct"
 *       500:
 *         description: SERVER ERROR
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ServerErrorResponse"
 */
router.get('/products/:id', verifyToken, getProductById)

/**
 * @openapi
 * /products:
 *   post:
 *     tags:
 *       - Products
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               handle:
 *                 type: string
 *                 example: masa-de-modelar-soft-150-grs
 *               title:
 *                 type: string
 *                 example: MASA DE MODELAR SOF8T 150 GRS
 *               description:
 *                 type: string
 *                 example: <p><strong>Características:</strong></p><ul><li>Ideal para actividades de desarrollo de la coordinación motora y percepción de las formas.</li><li>Para uso escolar o entretenimiento.</li><li>No se pega a las manos.</li></ul>
 *               sku:
 *                 type: number
 *                 example: 60870120101
 *               grams:
 *                 type: string
 *                 example: 100.2
 *               stock:
 *                 type: number
 *                 example: 359
 *               price:
 *                 type: number
 *                 example: 1611
 *               compare_price:
 *                 type: number
 *                 example: 1790
 *               barcode:
 *                 type: number
 *                 example: 7891153073002
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product created successfully
 *                 product:
 *                   $ref: "#/components/schemas/ProductCreated"
 *       500:
 *         description: SERVER ERROR
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ServerErrorResponse"
 */
router.post('/products', verifyToken, createProduct)

/**
 * @openapi
 * /products/:id:
 *   put:
 *     tags:
 *       - Products
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               handle:
 *                 type: string
 *                 example: masa-de-modelar-soft-150-grs
 *               title:
 *                 type: string
 *                 example: MASA DE MODELAR SOF8T 150 GRS
 *               description:
 *                 type: string
 *                 example: <p><strong>Características:</strong></p><ul><li>Ideal para actividades de desarrollo de la coordinación motora y percepción de las formas.</li><li>Para uso escolar o entretenimiento.</li><li>No se pega a las manos.</li></ul>
 *               sku:
 *                 type: number
 *                 example: 60870120101
 *               grams:
 *                 type: string
 *                 example: 100.2
 *               stock:
 *                 type: number
 *                 example: 359
 *               price:
 *                 type: number
 *                 example: 1611
 *               compare_price:
 *                 type: number
 *                 example: 1790
 *               barcode:
 *                 type: number
 *                 example: 7891153073002
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product updated successfully
 *                 product:
 *                   $ref: "#/components/schemas/ProductUpdated"
 *       404:
 *         description: NOT FOUND
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/NotFoundProduct"
 *       500:
 *         description: SERVER ERROR
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ServerErrorResponse"
 */
router.put('/products/:id', verifyToken, updateProduct)

/**
 * @openapi
 * /products/:id:
 *   delete:
 *     tags:
 *       - Products
 *     security:
 *        - bearerAuth: []
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product deleted successfully
 *       500:
 *         description: SERVER ERROR
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ServerErrorResponse"
 */
router.delete('/products/:id', verifyToken, deleteProduct)

export default router;