import express from 'express'
import swaggerUI from 'swagger-ui-express'
import swaggerJSdoc from 'swagger-jsdoc'
import userRoutes from './V1/routes/users.routes.js'
import taskRoutes from './V1/routes/tasks.routes.js'

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/usuarios', userRoutes);
app.use('/api/v1/tareas', taskRoutes);

const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Integral API REST", version: "1.0.0',
            version: '1.0.0',
        }
    },
    apis: ['./api/v1/routes/*.js'],
}


app.use('/api/v1/api-docs',swaggerUI.serve, swaggerUI.setup(swaggerJSdoc(swaggerSpec)))

export default app