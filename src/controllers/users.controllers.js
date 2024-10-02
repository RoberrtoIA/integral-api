import { getConnection } from '../database/connection.js';
import { transformStatus } from '../helpers/transformStatus.js';
import sql from 'mssql';

// Index
export const getUsers = async (req, res) => {

    const pool = await getConnection()
    const result = await pool.request().query('SELECT * FROM usuarios')
    
    return res.json(result.recordset)
}

// Show
export const getUser = async (req, res) => {

    const pool = await getConnection()
    const result = await pool.request()
    .input("id", sql.Int, req.params.id)
    .query('SELECT * FROM usuarios WHERE id = @id')

    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({
            message: "Usuario no encontrado"
        });
    }

    return res.json(result.recordset[0])
}

// Store
export const createUser = async (req, res) => {

    const pool = await getConnection()
    const result = await pool.request()
    .input("nombre", sql.VarChar, req.body.nombre)
    .input("apellido", sql.VarChar, req.body.apellido)
    .input("correo", sql.VarChar, req.body.correo)
    .input("numero_telefonico", sql.VarChar, req.body.numero_telefonico)
    .query("INSERT INTO usuarios (nombre, apellido, correo, numero_telefonico) VALUES (@nombre, @apellido, @correo, @numero_telefonico); SELECT SCOPE_IDENTITY() AS id")

    return res.json({
        id: result.recordset[0].id,
        name: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        numero_telefonico: req.body.numero_telefonico
    })
}

// ShowTasksByUserId
export const getUserTasks = async (req, res) => {

    const pool = await getConnection()
    const result = await pool.request()
    .input("id", sql.Int, req.params.id)
    .query('SELECT tareas.id, tareas.tarea, tareas.estado FROM tareas INNER JOIN usuarios ON tareas.usuario_id = usuarios.id WHERE usuarios.id = @id')

    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({
            message: "Usuario no encontrado o sin tareas asociadas"
        });
    }

    return res.json(transformStatus(result))
}

// Update
export const updateUser = async (req, res) => {

    const pool = await getConnection()
    const result = await pool.request()
    .input("id", sql.Int, req.params.id)
    .input("nombre", sql.VarChar, req.body.nombre)
    .input("apellido", sql.VarChar, req.body.apellido)
    .input("correo", sql.VarChar, req.body.correo)
    .input("numero_telefonico", sql.VarChar, req.body.numero_telefonico)
    .query('UPDATE usuarios SET nombre = @nombre, apellido = @apellido, correo = @correo, numero_telefonico = @numero_telefonico WHERE id = @id')

    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({
            message: "Usuario no encontrado"
        });
    }

    return res.json({
        id: req.params.id,
        name: req.body.nombre,
        apellido: req.body.correo,
        numero_telefonico: req.body.numero_telefonico
    })
}

// Delete
export const deleteUser = async (req, res) => {
    
    const pool = await getConnection()
    const result = await pool.request()
    .input("id", sql.Int, req.params.id)
    .query('DELETE FROM usuarios WHERE id = @id')

    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({
            message: "Usuario no encontrado"
        });
    }

    return res.json({
        message: "Usuario eliminado"
    })
}