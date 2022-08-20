const express=require('express')
const router=require("./routers/index.js")
const app=express()
const port=3000

app.use(express.json()) // chuyen req,res ve dang json
app.use(router)

app.listen(port,()=>{
    console.log("http://localhost:3000")
})