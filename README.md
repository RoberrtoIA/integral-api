# API REST Integral

**Autor:**

robertoantoniomoreno1999@gmail.com  

## API Demo

Requerimientos: Docker.

Instalación de primer uso

1. Clone este mismo repositorio con el siguiente comando en la consola de la pc donde tenga instalado `docker`:

```bash
git clone https://github.com/RoberrtoIA/integral-api.git
```

2. Cambie al directorio del proyecto recién clonado: `cd integral-api`

4. Verifique que tiene docker instalado utilizando el comando `docker --version`.
Si le muestra la version entonces siga con el paso 2, de lo contrario puede que tenga un problema con la instalacion de `docker`.

5. Ejecute el comando que se muestra a contuniación.

```bash
docker-compose up --build
```

6. Espere almenos 90 segundos para serciorarse que los contenedores estan montados.

7. A continuación solo resta crear la base de datos en el contenedor `docker`.

8. Abra su gestor preferido de base de datos de SQL Server como por ejemplo `SQL Server Management Studio` y proceda a conectarse con las siguientes credenciales:

Servidor: `localhost`
Puerto: `1434`
Login: `sa`
Contraseña: `C0mpl3x!Password#2024`

![alt text](https://github.com/RoberrtoIA/integral-api/blob/f/docker/tutorial-pngs/1mssql-conect.png)

9. Abra una nueva pestaña de sql query:

![alt text](https://github.com/RoberrtoIA/integral-api/blob/main/tutorial-pngs/2new-query.png)

10. Copie, pege y ejecute el siguiente script sql:

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

11. Abra el siguiente enlace que lo redirige a la documentación generada gracias al paquete Swagger: [LINK](http://localhost:3001/api/v1/api-docs/)

12. Es libre de probar los endpoints a voluntad. Fin
