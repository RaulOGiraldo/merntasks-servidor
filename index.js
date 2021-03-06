const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// habilitar cors
app.use(cors());

// Habilitar express.json
app.use(express.json({ extend: true }));

// Puerto de la app
const port = process.env.PORT || 4000;

// Importar rutas
// Usuarios
app.use('/api/usuarios', require('./routes/usuarios'));
// Autenticación
app.use('/api/auth', require('./routes/auth'));
// Proyectos
app.use('/api/proyectos', require('./routes/proyectos'));
// Tareas
app.use('/api/tareas', require('./routes/tareas'));

// Definir la pagina principal
// app.get('/', (req, res) => {
//     res.send('Hola Mundo');
// });

// Arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})