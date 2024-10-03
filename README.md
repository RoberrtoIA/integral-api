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
