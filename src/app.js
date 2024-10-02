import express from 'express'
import swaggerUI from 'swagger-ui-express'
import swaggerJSdoc from 'swagger-jsdoc'
import userRoutes from './V1/routes/users.routes.js'
import taskRoutes from './V1/routes/tasks.routes.js'

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/v1/usuarios', userRoutes);
app.use('/api/v1/tareas', taskRoutes);

// Configuración de Swagger
const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Integral API REST", version: "1.0.0',
            version: '1.0.0',
        }
    },
    apis: ['src/V1/routes/users.routes.js', 'src/V1/routes/tasks.routes.js'],
}

// Endpoint de Swagger UI Documentation
app.use('/api/v1/api-docs',swaggerUI.serve, swaggerUI.setup(swaggerJSdoc(swaggerSpec)))

export default app