import dotenv from 'dotenv';
import { Sequelize } from "sequelize";

import app from './app.js';

dotenv.config()


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME, 
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
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
  console.log(process.env.DB_NAME,
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD, process.env.DB_HOST)
  console.log(`Server is running on port ${PORT}`)
});