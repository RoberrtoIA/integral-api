import sql from 'mssql'
import dotenv from 'dotenv';

dotenv.config();

const dbSettings = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    port: +process.env.PORT,         
    database: process.env.DATABASE_NAME,
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }
}

export const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}