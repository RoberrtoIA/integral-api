import express from 'express'
import userRoutes from './routes/users.routes.js'
import taskRoutes from './routes/tasks.routes.js'

const app = express()

// app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/usuarios', userRoutes);
app.use('/api/v1/tareas', taskRoutes);
// app.use(userRoutes);
// app.use(taskRoutes);

export default app