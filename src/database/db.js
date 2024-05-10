import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  'haciendola', 
  'luisflr', 
  'admin', 
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);
