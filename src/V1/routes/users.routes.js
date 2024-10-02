import {Router} from 'express'
import {getUsers, getUser, createUser, getUserTasks, updateUser, deleteUser} from '../../controllers/users.controllers.js'

const router = Router()

/**
 * @openapi
 * /api/v1/usuarios:
 *   get:
 *     tags:
 *       - Obtener Usuarios
 *     description: Recupera la lista de todos los usuarios.
 *     responses:
 *       200:
 *         description: Lista de usuarios recuperada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     example: "Juan"
 *                   apellido:
 *                     type: string
 *                     example: "Pérez"
 *                   correo:
 *                     type: string
 *                     example: "juan.perez@example.com"
 *                   numero_telefonico:
 *                     type: string
 *                     example: "012345678"
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al recuperar la lista de usuarios"
 */
router.get('/', getUsers)

/**
 * @openapi
 * /api/v1/usuarios/{id}:
 *   get:
 *     tags:
 *       - Obtener Usuario
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del usuario que se desea obtener
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 nombre:
 *                   type: string
 *                   example: "Sofia"
 *                 apellido:
 *                   type: string
 *                   example: "Ramirez"
 *                 correo:
 *                   type: string
 *                   example: "sofia.ramirez@gmail.com"
 *                 numero_telefonico:
 *                   type: string
 *                   example: "+54 9 11 4567 8912"
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Usuario no encontrado"
 */
router.get('/:id', getUser)

/**
 * @openapi
 * /api/v1/usuarios/{id}/tareas:
 *   get:
 *     tags:
 *       - Obtener Tareas de Usuario
 *     description: Lista las tareas del usuario según su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: El ID del usuario cuyas tareas se desean listar.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de tareas recuperada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 4
 *                   tarea:
 *                     type: string
 *                     example: "Lorem Ipsum 3"
 *                   estado:
 *                     type: string
 *                     description: El estado de la tarea.
 *                     example: "No Completado"
 *       404:
 *         description: Usuario no encontrado o sin tareas asociadas.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Usuario no encontrado"
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al recuperar las tareas del usuario"
 */
router.get('/:id/tareas', getUserTasks)

/**
 * @openapi
 * /api/v1/usuarios:
 *   post:
 *     tags:
 *       - Crear Usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Sofia"
 *               apellido:
 *                 type: string
 *                 example: "Ramirez"
 *               correo:
 *                 type: string
 *                 example: "sofia.ramirez@gmail.com"
 *               numero_telefonico:
 *                 type: string
 *                 example: "+54 9 11 4567 8912"
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 nombre:
 *                   type: string
 *                   example: "Sofia"
 *                 apellido:
 *                   type: string
 *                   example: "Ramirez"
 *                 correo:
 *                   type: string
 *                   example: "sofia.ramirez@gmail.com"
 *                 numero_telefonico:
 *                   type: string
 *                   example: "+54 9 11 4567 8912"
 *       400:
 *         description: Datos de entrada inválidos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Datos de entrada inválidos"
 */
router.post('/', createUser)

/**
 * @openapi
 * /api/v1/usuarios/{id}:
 *   put:
 *     tags:
 *       - Actualizar Usuario
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del usuario a actualizar
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Sofia"
 *               apellido:
 *                 type: string
 *                 example: "Ramirez"
 *               correo:
 *                 type: string
 *                 example: "sofia.ramirez@gmail.com"
 *               numero_telefonico:
 *                 type: string
 *                 example: "+54 9 11 4567 8912"
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 nombre:
 *                   type: string
 *                   example: "Sofia"
 *                 apellido:
 *                   type: string
 *                   example: "Ramirez"
 *                 correo:
 *                   type: string
 *                   example: "sofia.ramirez@gmail.com"
 *                 numero_telefonico:
 *                   type: string
 *                   example: "+54 9 11 4567 8912"
 *       400:
 *         description: Datos de entrada inválidos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Datos de entrada inválidos"
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Usuario no encontrado"
 */
router.put('/:id', updateUser)

/**
 * @openapi
 * /api/v1/usuarios/{id}:
 *   delete:
 *     tags:
 *       - Eliminar Usuario
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del usuario a eliminar
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Usuario eliminado"
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Usuario no encontrado"
 *       500:
 *         description: Solicitud inválida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Solicitud inválida"
 */
router.delete('/:id', deleteUser)

export default router;