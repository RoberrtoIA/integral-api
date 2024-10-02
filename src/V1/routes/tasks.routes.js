import { Router } from "express";
import {
    getTasks,
    getTask,
    createTask,
    updateTaskStatus,
    deleteTask,
} from "../../controllers/tasks.controller.js";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *     Usuarios:
 *      type: object
 *      properties:
 *          id:
 *              type: integer
 *          nombre:
 *              type: string
 *          apellido:
 *              type: integer
 *          correo:
 *              type: string
 *          numero_telefonico:
 *              type: string
 *     Tareas:
 *      type: object
 *      properties:
 *          id:
 *              type: integer
 *          tarea:
 *              type: string
 *          estado:
 *              type: integer
 *          usuario_id:
 *              type: integer
 */

/**
 * @openapi
 * /api/v1/tareas:
 *   get:
 *     tags:
 *       - Listar Tareas
 *     responses:
 *       200:
 *         description: Devuelve una tarea
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 tarea:
 *                   type: string
 *                   example: "Lorem Ipsum"
 *                 estado:
 *                   type: string
 *                   example: "Completado"
 *                 usuario_id:
 *                   type: integer
 *                   example: 1
 *             example:
 *               - id: 1
 *                 tarea: "Lorem Ipsum 1"
 *                 estado: "Completado"
 *                 usuario_id: 1
 *               - id: 2
 *                 tarea: "Lorem Ipsum 2"
 *                 estado: "No Completado"
 *                 usuario_id: 1
 */
router.get("/", getTasks);

/**
 * @openapi
 * /api/v1/tareas/{id}:
 *   get:
 *     tags:
 *       - Ver detalle de Tarea
 *     description: Obtiene una tarea por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: El ID de la tarea
 *     responses:
 *       200:
 *         description: Devuelve una tarea
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 tarea:
 *                   type: string
 *                   example: "Lorem Ipsum"
 *                 estado:
 *                   type: string
 *                   example: "Completado"
 *                 usuario_id:
 *                   type: integer
 *                   example: 1
 *       404:
 *         description: No se encontró la tarea
 */
router.get("/:id", getTask);

/**
 * @openapi
 * /api/v1/tareas:
 *   post:
 *     tags:
 *       - Crear Tareas
 *     description: Crea una nueva tarea. El estado de la tarea se agrega por defecto.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tarea:
 *                 type: string
 *                 description: La descripción de la tarea
 *                 example: "Nueva tarea"
 *               usuario_id:
 *                 type: integer
 *                 description: El ID del usuario al que está asociada la tarea
 *                 example: 1
 *     responses:
 *       201:
 *         description: Tarea creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 tarea:
 *                   type: string
 *                   example: "Nueva tarea"
 *                 estado:
 *                   type: string
 *                   description: El estado de la tarea (agregado por defecto)
 *                   example: "No Completado"
 *                 usuario_id:
 *                   type: integer
 *                   example: 1
 *       400:
 *         description: Datos inválidos
 */
router.post("/", createTask);

// Como el valor a editar es booleano, no es necesario que sea PUT/PATCH.
// A efectos practicos es la peticion que haria un boton de "tarea realizada" en un frontend y eso basta con un GET

/**
 * @openapi
 * /api/v1/tareas/{id}/update-status:
 *   get:
 *     tags:
 *       - Tarea -> Cambiar estado
 *     summary: Alterna el estado de la tarea
 *     description: Cambia el estado de la tarea especificada por el ID entre "Completado" y "No Completado".
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la tarea para la cual se desea alternar el estado.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Estado de la tarea actualizado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 estado:
 *                   type: string
 *                   example: "Completado"
 *               example:
 *                 id: 1
 *                 estado: "Completado"
 *       404:
 *         description: Tarea no encontrada.
 *       500:
 *         description: Error al actualizar el estado de la tarea.
 */
router.get("/:id/update-status", updateTaskStatus);

/**
 * @openapi
 * /api/v1/tareas/{id}:
 *   delete:
 *     tags:
 *       - Eliminar Tareas
 *     description: Elimina una tarea específica por su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: El ID de la tarea que se desea eliminar.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarea eliminada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Tarea eliminada"
 *       404:
 *         description: Tarea no encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Tarea no encontrada"
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al eliminar la tarea"
 */
router.delete("/:id", deleteTask);

export default router;