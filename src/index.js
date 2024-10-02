import app from './app.js'

// Usaremos el archivo por defecto de index.js en lugar de app.js por que en los servidores por default siempre apuntara al archivo index,
// asi nos ahorramos cambiar la configuracion del archivo principal. Funciona como un script en el archivo package.json -> scripts -> dev
// Se levanta con npm run dev

app.listen(3000)

// Console log para verificar que el servidor ha sido iniciado, se ejecuta por default al levantar el servidor
console.log('Servidor iniciado')