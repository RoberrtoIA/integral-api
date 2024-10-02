import {Router} from 'express'
import {getUsers, getUser, createUser, getUserTasks, updateUser, deleteUser} from '../controllers/users.controllers.js'

const router = Router()

router.get('/', getUsers)

router.get('/:id', getUser)

router.get('/:id/tareas', getUserTasks)

router.post('/', createUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

export default router;