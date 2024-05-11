import express from "express";
import cors from "cors";

import usersRoutes from './routes/user.route.js';
import productsRoutes from './routes/products.route.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(usersRoutes);
app.use(productsRoutes);

export default app;