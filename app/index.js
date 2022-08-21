const express=require('express')
const router=require("./routers/index.js")
const {sequelize}=require("./models/index.js")
const path=require('path')

const app=express()

const port=3000

const pathPublic=path.join(__dirname,"/public") // dirname la duong dan tuyet doi chay den file dang ccode (app.js) --> + /public 
app.use(express.static(pathPublic))
app.set("view engine","hbs")
app.use(express.json()) // chuyen req,res ve dang json
app.use(router)

app.listen(port,()=>{
    console.log("http://localhost:3000")
})
// set up sequelize
sequelize.sync({alter:true}) // alter la chi sua bang , khong xoa va tao bang moi (ket noi database)