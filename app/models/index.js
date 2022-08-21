const {Sequelize, DataTypes}=require('sequelize')
const  {HOST,port,USER,PASSWORD,DB,dialect}= require("../configs/db.config.js")
const {createStudentModel}=require('./student.model.js')
const sequelize =new Sequelize(DB,USER,PASSWORD,{
    host:HOST,
    port:port,
    dialect:dialect,
})


const Student = createStudentModel(sequelize)



module.exports={
    sequelize,
    Student,
}