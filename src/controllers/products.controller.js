import ProductModel from '../models/Product.js'
import { sequelize } from "../database/db.js";

const Product = ProductModel(sequelize)

/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:            # arbitrary name for the security scheme
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   security:
 *     - bearerAuth: []
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     ServerErrorResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Server Error
 *     NotFoundProduct:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Product not exists
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Products:
 *       type: object
 *       properties:
 *         id: 
 *           type: number
 *           example: 120
 *         handle: 
 *           type: string
 *           example: masa-de-modelar-soft-150-grs
 *         title:
 *           type: string
 *           example: MASA DE MODELAR SOF8T 150 GRS
 *         description:
 *           type: string
 *           example: <p><strong>Características:</strong></p><ul><li>Ideal para actividades de desarrollo de la coordinación motora y percepción de las formas.</li><li>Para uso escolar o entretenimiento.</li><li>No se pega a las manos.</li></ul>
 *         sku:
 *           type: number
 *           example: 60870120101
 *         grams:
 *           type: string
 *           example: 100.2
 *         stock:
 *           type: number
 *           example: 359
 *         price:
 *           type: number
 *           example: 1611
 *         compare_price:
 *           type: number
 *           example: 1790
 *         barcode:
 *           type: number
 *           example: 7891153073002
 *
 */
export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({ order: [
      ['id', 'ASC'],
  ],});

    res.status(200).json({ message: 'Products found', products });
  } catch (error) {
    console.error('Error getting all products:', error);
    res.status(500).json({ message: 'Server Error' });
  }
}

/**
 * @openapi
 * components:
 *   schemas:
 *     ProductId:
 *       type: object
 *       properties:
 *         id: 
 *           type: number
 *           example: 120
 *         handle: 
 *           type: string
 *           example: masa-de-modelar-soft-150-grs
 *         title:
 *           type: string
 *           example: MASA DE MODELAR SOF8T 150 GRS
 *         description:
 *           type: string
 *           example: <p><strong>Características:</strong></p><ul><li>Ideal para actividades de desarrollo de la coordinación motora y percepción de las formas.</li><li>Para uso escolar o entretenimiento.</li><li>No se pega a las manos.</li></ul>
 *         sku:
 *           type: number
 *           example: 60870120101
 *         grams:
 *           type: string
 *           example: 100.2
 *         stock:
 *           type: number
 *           example: 359
 *         price:
 *           type: number
 *           example: 1611
 *         compare_price:
 *           type: number
 *           example: 1790
 *         barcode:
 *           type: number
 *           example: 7891153073002
 *
 */
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const product = await Product.findByPk(id);

    if (!product) return res.status(404).json({ message: 'Product not exists'});

    res.status(201).json({ message: 'Product found', product })
  } catch (error) {
    console.error('Error getting the product:', error);
    res.status(500).json({ message: 'Server Error' });
  }
}

/**
 * @openapi
 * components:
 *   schemas:
 *     ProductCreated:
 *       type: object
 *       properties:
 *         id: 
 *           type: number
 *           example: 120
 *         handle: 
 *           type: string
 *           example: masa-de-modelar-soft-150-grs
 *         title:
 *           type: string
 *           example: MASA DE MODELAR SOF8T 150 GRS
 *         description:
 *           type: string
 *           example: <p><strong>Características:</strong></p><ul><li>Ideal para actividades de desarrollo de la coordinación motora y percepción de las formas.</li><li>Para uso escolar o entretenimiento.</li><li>No se pega a las manos.</li></ul>
 *         sku:
 *           type: number
 *           example: 60870120101
 *         grams:
 *           type: string
 *           example: 100.2
 *         stock:
 *           type: number
 *           example: 359
 *         price:
 *           type: number
 *           example: 1611
 *         compare_price:
 *           type: number
 *           example: 1790
 *         barcode:
 *           type: number
 *           example: 7891153073002
 *
 */
export const createProduct = async (req, res) => {
  try {
    const { 
      handle, title, description, sku, 
      grams, stock, price, 
      compare_price, barcode } = req.body;

    const product = await Product.create({
      handle, title, description, sku, 
      grams, stock, price, 
      compare_price, barcode
    });

    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    console.error('Error creating the product:', error);
    res.status(500).json({ message: 'Server Error' });
  }
}

/**
 * @openapi
 * components:
 *   schemas:
 *     ProductUpdated:
 *       type: object
 *       properties:
 *         id: 
 *           type: number
 *           example: 120
 *         handle: 
 *           type: string
 *           example: masa-de-modelar-soft-150-grs
 *         title:
 *           type: string
 *           example: MASA DE MODELAR SOF8T 150 GRS
 *         description:
 *           type: string
 *           example: <p><strong>Características:</strong></p><ul><li>Ideal para actividades de desarrollo de la coordinación motora y percepción de las formas.</li><li>Para uso escolar o entretenimiento.</li><li>No se pega a las manos.</li></ul>
 *         sku:
 *           type: number
 *           example: 60870120101
 *         grams:
 *           type: string
 *           example: 100.2
 *         stock:
 *           type: number
 *           example: 359
 *         price:
 *           type: number
 *           example: 1611
 *         compare_price:
 *           type: number
 *           example: 1790
 *         barcode:
 *           type: number
 *           example: 7891153073002
 *
 */
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      handle, title, description, sku, 
      grams, stock, price, 
      compare_price, barcode
    } = req.body;
    
    const product = await Product.findByPk(id);

    if (!product) return res.status(404).json({ message: 'Product not exists'});

    product.handle = handle;
    product.title = title;
    product.description = description;
    product.sku = sku;
    product.grams = grams;
    product.stock = stock;
    product.price = price;
    product.compare_price = compare_price;
    product.barcode = barcode;

    await product.save();

    res.status(201).json({ message: 'Product updated successfully', product })
  } catch (error) {
    console.error('Error udating the product:', error);
    res.status(500).json({ message: 'Server Error' });
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.destroy({ where: { id } })

    res.status(201).json({ message: 'Product deleted successfully' })
  } catch (error) {
    console.error('Error deleting the product:', error);
    res.status(500).json({ message: 'Server Error' });   
  }
}