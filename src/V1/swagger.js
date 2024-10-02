// import swaggerUI from 'swagger-ui-express'
// import swaggerJSdoc from 'swagger-jsdoc'

// const options = {
//     definition: {
//         openapi: '3.0.0',
//         info: {
//             title: 'Integral API REST", version: "1.0.0',
//             version: '1.0.0',
//         }
//     },
//     apis: ['./api/v1/routes/*.js'],
// }


// // app.use('/api/v1/api-docs',swaggerUI.serve, swaggerUI.setup(swaggerJSdoc(swaggerSpec)))

// const swaggerSpecs = swaggerJSdoc(options);

// const swaggerDocs = (app, port) => {
//     app.use('/api/v1/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));
//     app.get('api/v1/api-docs.json', (req, res) => {
//         res.setHeader('Content-Type', 'application/json');
//         res.send(swaggerSpecs)
//     });
//     console.log('Version 1 disponible en http://localhost:3000/api/v1/api-docs')
// };

// // module.exports = {swaggerDocs};
// export default swaggerDocs;