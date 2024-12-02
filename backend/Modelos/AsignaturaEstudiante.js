

const { DataTypes } = require('sequelize')
const sequelize = require('../bd/database')

const AsignaturaEstudiante = sequelize.define('AsignaturaEstudiante', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idestudiante: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idasignatura: {
        type: DataTypes.INTEGER

    }
},
    {
        tableName: 'AsignaturaEstudiante',
        timestamps: false
    }
)

module.exports= AsignaturaEstudiante;