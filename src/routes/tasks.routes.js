import {Router} from 'express'
import { getTasks, getTask, createTask, updateTaskStatus, deleteTask } from '../controllers/tasks.controller.js'

const router = Router()

router.get('/', getTasks)

router.get('/:id', getTask)

router.post('/', createTask)

// Como el valor a editar es booleano, no es necesario que sea PUT/PATCH. 
// A efectos practicos es la peticion que haria un boton de "tarea realizada" en un frontend y eso basta con un GET
router.get('/:id/update-status', updateTaskStatus)

router.delete('/:id', deleteTask)

export default router;