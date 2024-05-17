import { Router } from 'express'
import { register, login } from '../controllers/users.controller.js'

const router = Router()

/**
 * @openapi
 * /register:
 *   post:
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: usernametest
 *               password:
 *                 type: string
 *                 example: passwordtest
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
 *                   example: User registered successfully
 *                 product:
 *                   $ref: "#/components/schemas/RegisterResponse"
 *       500:
 *         description: SERVER ERROR
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ServerErrorResponse"
 */
router.post('/register', register)

/**
 * @openapi
 * /login:
 *   post:
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: usernametest
 *               password:
 *                 type: string
 *                 example: passwordtest
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/LoginResponse"
 *       400:
 *         description: NOT FOUND
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/InvalidCredentials"
 *       404:
 *         description: NOT FOUND
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/NotFoundUser"
 *       500:
 *         description: SERVER ERROR
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ServerErrorResponse"
 */
router.post('/login', login)

export default router;