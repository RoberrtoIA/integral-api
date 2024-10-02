import sql from 'mssql'

const dbSettings = {
    user: "roberto99",
    password: "roberto99",
    server: "localhost",
    port: 1433,         
    database: "integral",
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