// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Inicializar Variables
var app = express();

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Importar Rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var hospitalRoutes = require('./routes/hospital');
var medicoRoutes = require('./routes/medico');
var busquedaRoutes = require('./routes/busqueda');
var uploadRoutes = require('./routes/upload');
var loginRoutes = require('./routes/login');
var imagenesRoutes = require('./routes/imagenes');

//Conexión a la Base de Datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de Datos: \x1b[32m%s\x1b\[0m', 'online')
});

/* mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', {useNewUrlParser: true })
        .then( () => {
            console.log("Base de datos: \x1b[32m%s\x1b[0m", " online")
            })
        .catch( (err) => {
            console.error(err);
        }); */


// Server index config
//var serveIndex = require('serve-index');
//app.use(express.static(__dirname + '/'))
//app.use('/uploads', serveIndex(__direname + '/uploads'));

//Rutas
app.use('/usuario', usuarioRoutes);
app.use('/hospital', hospitalRoutes);
app.use('/medico', medicoRoutes);
app.use('/busqueda', busquedaRoutes);
app.use('/upload', uploadRoutes);
app.use('/login', loginRoutes);
app.use('/img', imagenesRoutes);
app.use('/', appRoutes);

// Escuchar Peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});