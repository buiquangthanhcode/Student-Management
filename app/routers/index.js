// file nay de ket hop nhieu router lai voi nhau 
// neu them 1 router moi thi them vao day 
const express=require("express")
const  studentRouter=require('./student.routers')
const router=express.Router()


router.use("/students",studentRouter)

module.exports=router;