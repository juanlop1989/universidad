const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('universidad','root','1234',{
    host:'localhost',
    dialect:'mysql'
})

module.exports=sequelize;