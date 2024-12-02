const express = require('express')
const estudianteRouter = require('./router/estudianteRouter');
const asignaturaRouter = require('./router/asignaturaRouter')
const asignaturaEstudianteRouter = require('./router/asignaturaEstudianteRouter');
const Estudiante = require('./Modelos/Estudiante');
const cors = require('cors')


const app= express();

app.use(cors())

app.use(express.json())

var port = 5000;

app.use('/estudiante',estudianteRouter)
app.use('/asignatura',asignaturaRouter)
app.use('/estudiante-asignatura', asignaturaEstudianteRouter);


app.listen(port,()=>{
    console.log('Ejecutando en puerto', port)
})

//Conexion BD
//controladores
//router
//modelos (sequelize)

//M V C