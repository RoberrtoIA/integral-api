# API REST Integral

**Autor:**

robertoantoniomoreno1999@gmail.com  

## API Demo

Requerimientos: Docker.

Instalación de primer uso

1. Verifique que tiene docker instalado utilizando el comando `docker --version`.
Si le muestra la version entonces siga con el paso 2, de lo contrario puede que tenga un problema con la instalacion de `docker`.

2. Ejecute el comando que se muestra a contuniación.

```bash
docker-compose up --build
```

3. Espere almenos 90 segundos para serciorarse que los contenedores estan montados.

4. A continuación solo resta crear la base de datos en el contenedor `docker`.

5. Abra su gestor preferido de base de datos de SQL Server como por ejemplo `SQL Server Management Studio` y proceda a conectarse con las siguientes credenciales:

Servidor: `localhost`
Puerto: `1434`
Login: `sa`
Contraseña: `C0mpl3x!Password#2024`

![alt text](https://github.com/RoberrtoIA/integral-api/blob/f/docker/tutorial-pngs/1mssql-conect.png)

6. Abra una pestaña de ejecución de sql

![alt text](https://github.com/RoberrtoIA/integral-api/blob/f/docker/tutorial-pngs/2new-query.png)

7. Copie, pegue y ejecute el siguiente script sql:

```bash
-- Crear la base de datos "integral"
CREATE DATABASE integral;
GO

-- Usar la base de datos "integral"
USE integral;
GO

-- Crear la tabla "usuarios"
CREATE TABLE usuarios (
    id INT IDENTITY(1, 1) PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL, 
    apellido VARCHAR(255) NOT NULL, 
    correo VARCHAR(255) NOT NULL, 
    numero_telefonico VARCHAR(20)
);
GO

-- Crear la tabla "tareas"
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

-- Insertar datos en la tabla "usuarios"
INSERT INTO usuarios (nombre, apellido, correo, numero_telefonico)
VALUES 
('Sofia', 'Ramirez', 'sofia.ramirez@gmail.com', '+54 9 11 4567 8912'),
('Mateo', 'Gonzales', 'mateo.gonzales@gmail.com', '+34 654 321 0987'),
('Valentina', 'Perez', 'valentina.perez@gmail.com', '+1 (212) 555-1212'),
('Lucas', 'Fernandez', 'lucas.fernandez@gmail.com', '+55 11 9876 5432'),
('Camila', 'Silva', 'camila.silva@gmail.com', '+39 333 222 111');
GO

-- Seleccionar todos los datos de la tabla "usuarios"
SELECT * FROM usuarios;
GO

```

8. Ingrese al endpoint que provee Swagger [LINK](http://localhost:3001/api/v1/api-docs/)  
