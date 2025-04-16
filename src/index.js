import dotenv from 'dotenv';
import { sequelize } from './database/db.js';
import { sawggerDocs as v1SwaggerDocs } from './swagger.js';

import app from './app.js';

dotenv.config()

sequelize
  .sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => console.error('Error syncing database:', err));

// Start server 
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  v1SwaggerDocs(app, PORT);
});