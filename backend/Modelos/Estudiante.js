

const { DataTypes } = require('sequelize')
const sequelize = require('../bd/database')

const Estudiante = sequelize.define('Estudiante', {
    idestudiante: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false

    },
    correo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono:{
        type: DataTypes.STRING,
        allowNull: false   
    }
},
    {
        tableName: 'Estudiante',
        timestamps: false
    }
)

module.exports= Estudiante;