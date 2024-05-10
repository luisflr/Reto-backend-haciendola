import ProductModel from '../models/Product.js'
import { sequelize } from "../database/db.js";

const Product = ProductModel(sequelize)

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({ order: [
      ['id', 'ASC'],
  ],});

    res.status(201).json({ message: 'Products found', products });
  } catch (error) {
    console.error('Error getting all products:', error);
    res.status(500).json({ message: 'Server Error' });
  }
}

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