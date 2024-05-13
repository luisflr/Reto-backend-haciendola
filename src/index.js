import dotenv from 'dotenv';
import { Sequelize } from "sequelize";

import app from './app.js';

dotenv.config()


export const sequelize = new Sequelize(
  process.env.DB_NAME || 'haciendola',
  process.env.DB_USERNAME || 'luisflr', 
  process.env.DB_PASSWORD || 'admin', 
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres'
  }
);

sequelize
  .sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => console.error('Error syncing database:', err));

// Start server 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});