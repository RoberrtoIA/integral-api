// example.js
import dotenv from 'dotenv';

// Configurar dotenv para cargar las variables del archivo .env
dotenv.config();

// Ahora puedes acceder a las variables de entorno
console.log('Base de datos:', process.env.DATABASE);