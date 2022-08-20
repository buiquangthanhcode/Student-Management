const {getList,getDetailInforStudent,createStudent,updateInfor,deleteByID}=require("../services/student.services.js")
// controller chi co hai tham so (req,res)

const getStudents = (req, res) => {
    const studentsList=getList();
    if(studentsList)
    {
        res.status(200).send(studentsList);
    }
    else{
        res.status(404).send("Not Found")
    }
  
};
const getDetailStudent=(req, res) => {
    const { id } = req.params; // lay id cua user
    const student=getDetailInforStudent(id)
    if (student) {
        return res.status(200).send(student)
       } else {
        return res.status(404).send("Not Found")
       }
 
}
const addStudent=(req, res) => {
    let student = req.body;
    const newStudent=createStudent(student)
    if(newStudent)
    {
        res.status(201).send(newStudent);

    }else{
        res.status(404).send("Not Found")
    }

}
const updateStudent=(req, res) => {
    const { id } = req.params;
  
    const { fullname, age, numberClass } = req.body;
   
    const updateInforStudent=updateInfor(id,fullname, age, numberClass );
    if(updateInforStudent){
    res.status(200).send(updateInforStudent);
    } else {
      res.status(404).send("Not found");
    }
    res.send("Update infor student");
  }



const deleteStudent=(req, res) => {
    const { id } = req.params;
  
    const studentDeleted=deleteByID(id)
    if (studentDeleted) {
      res.status(200).send(studentDeleted);
    } else {
      res.status(404).send("Not found");    
    }
  }


module.exports={
    getStudents,getDetailStudent,addStudent,updateStudent,deleteStudent
}