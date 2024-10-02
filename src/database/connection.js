import sql from 'mssql'
import dotenv from 'dotenv';

dotenv.config();

const dbSettings = {
    user: 'sa',
    password: 'C0mpl3x!Password#2024',
    server: 'mssql_db',
    port: 1433,         
    database: 'integral',
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