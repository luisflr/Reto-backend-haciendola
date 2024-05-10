import app from './app.js';

import { sequelize } from "./database/db.js";


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