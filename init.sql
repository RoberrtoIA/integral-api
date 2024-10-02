-- Crear la base de datos
CREATE DATABASE integral;
GO

-- Usar la base de datos
USE integral;
GO

-- Crear la tabla usuarios
CREATE TABLE usuarios (
    id INT IDENTITY(1, 1) PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL, 
    apellido VARCHAR(255) NOT NULL, 
    correo VARCHAR(255) NOT NULL, 
    numero_telefonico VARCHAR(20)
);
GO

-- Crear la tabla tareas
CREATE TABLE tareas (
    id INT IDENTITY(1, 1) PRIMARY KEY,
    tarea VARCHAR(255) NOT NULL, 
    estado BIT DEFAULT 0 NOT NULL,
    usuario_id INT NOT NULL,
    FOREIGN KEY (usuario_id)
        REFERENCES usuarios (id)
        ON UPDATE CASCADE
);
GO

-- Insertar datos en la tabla usuarios
INSERT INTO usuarios (nombre, apellido, correo, numero_telefonico)
VALUES 
    ('Sofia', 'Ramirez', 'sofia.ramirez@gmail.com', '+54 9 11 4567 8912'),
    ('Mateo', 'Gonzales', 'mateo.gonzales@gmail.com', '+34 654 321 0987'),
    ('Valentina', 'Perez', 'valentina.perez@gmail.com', '+1 (212) 555-1212'),
    ('Lucas', 'Fernandez', 'lucas.fernandez@gmail.com', '+55 11 9876 5432'),
    ('Camila', 'Silva', 'camila.silva@gmail.com', '+39 333 222 111');
GO