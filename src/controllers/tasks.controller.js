import { getConnection } from '../database/connection.js';
import { transformStatus } from '../helpers/transformStatus.js';
import sql from 'mssql';

// Index
export const getTasks = async (req, res) => {
    
    const pool = await getConnection()
    const result = await pool.request().query('SELECT * FROM tareas')
    
    // Hacemos un mapeo del resultado para utilizar un operador ternario en "estado" y mostrar "Completado" o "No Completado".
    // La función se encuentra en la carpeta helpers.
    const resultWithStatus = transformStatus(result);
    return res.json(resultWithStatus)
}

// Show
export const getTask = async (req, res) => {
    
    const pool = await getConnection()
    const result = await pool.request()
    .input("id", sql.Int, req.params.id)
    .query('SELECT * FROM tareas WHERE id = @id')

    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({
            message: "Tarea no encontrada"
        });
    }

    const resultWithStatus = transformStatus(result);
    return res.json(resultWithStatus)
}

// Store
export const createTask = async (req, res) => {

    const pool = await getConnection()
    const result = await pool.request()
    .input("tarea", sql.VarChar, req.body.tarea)
    .input("usuario_id", sql.Int, req.body.usuario_id)
    .query("INSERT INTO tareas (tarea, usuario_id) VALUES (@tarea, @usuario_id); SELECT SCOPE_IDENTITY() AS id")

    return res.json({
        id: result.recordset[0].id,
        tarea: req.body.tarea,
        estado: 'No completado',
        usuario_id: req.body.usuario_id
    })

}

// Update
// Se cambia únicamente el valor booleano del "estado" según el id, por lo que no es necesario un método PUT/PATCH.
export const updateTaskStatus = async (req, res) => {
    
    const pool = await getConnection()

    const resultCheckId = await pool.request()
    .input("id", sql.Int, req.params.id)
    .query('SELECT * FROM tareas WHERE id = @id')

    if (resultCheckId.rowsAffected[0] === 0) {
        return res.status(404).json({
            message: "Tarea no encontrada"
        });
    }

    const estado = resultCheckId.recordset[0].estado

    await pool.request()
    .input("id", sql.Int, req.params.id)
    .input("estado", sql.Int, !estado)
    .query("UPDATE tareas SET estado = @estado WHERE id = @id")

    const updatedStatus = !estado;

    return res.json({
        id: req.params.id,
        tarea: resultCheckId.recordset[0].tarea,
        estado: updatedStatus ? 'Completado' : 'No Completado',
        usuario_id: resultCheckId.recordset[0].usuario_id
    })
}

// Delete
export const deleteTask = async (req, res) => {
    
    const pool = await getConnection()
    const result = await pool.request()
    .input("id", sql.Int, req.params.id)
    .query('DELETE FROM tareas WHERE id = @id')

    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({
            message: "Tarea no encontrada"
        });
    }

    return res.json({
        message: "Tarea eliminada"
    })
}