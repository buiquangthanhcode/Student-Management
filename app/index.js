const express=require('express')
const router=require("./routers/index.js")
const app=express()
const port=3000

app.use(express.json()) // chuyen req,res ve dang json
app.use(router)

app.listen(port,()=>{
    console.log("http://localhost:3000")
})
// set up sequelize
const {sequelize}=require("./models/index.js")

sequelize.sync({alter:true}) // alter la chi sua bang , khong xoa va tao bang moi 