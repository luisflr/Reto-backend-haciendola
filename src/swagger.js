import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Metadata info API
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Haciendola API Products',
    version: '1.0.0',
  },
}

const options = {
  swaggerDefinition,
  apis: [
    'src/routes/products.route.js', 
    'src/routes/user.route.js', 
    'src/controllers/products.controller.js',
    'src/controllers/users.controller.js']
};

// Docs en JSON format
const swaggerSpec = swaggerJSDoc(options);

// Function to setup our docs
export const sawggerDocs = (app, port) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec)
  });

  console.log(`📓 Version 1 Docs are available at http://localhost:${port}/docs`)
};