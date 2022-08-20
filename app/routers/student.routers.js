const express = require("express");
const studentRouter = express.Router();
const { getStudents,getDetailStudent,addStudent,updateStudent,deleteStudent}= require('../controllers/student.controllers.js')
const {logfeatures} = require("../middlewares/logger/log-feature.js")

const {checkEmpty} = require("../middlewares/validations/student.validation.js")
// Get Students
studentRouter.get("/",logfeatures,getStudents);

//Get details information of student
studentRouter.get("/:id",getDetailStudent );

studentRouter.post("/",checkEmpty,addStudent );

studentRouter.put("/:id",updateStudent );

studentRouter.delete("/:id",deleteStudent );


module.exports=studentRouter;