const {getList,getDetailInforStudent,createStudent,updateInfor,deleteByID}=require("../services/student.services.js")
// controller chi co hai tham so (req,res)

const getStudents = async (req, res) => {
    const studentsList=await getList();

    if(studentsList)
    {
      // res.status(200).send(studentsList);
      const data=JSON.parse(JSON.stringify(studentsList,null,2));
     
        res.render("main",{
          data,
        });
    }
    else{
        res.status(404).send("Not Found")
    }
  
};
const getDetailStudent= async (req, res) => {
    const { id } = req.params; // lay id cua user
    const student= await getDetailInforStudent(id)
    if (student) {
        return res.status(200).send(student)
       } else {
        return res.status(404).send("Not Found")
       }
 
}
const addStudent= async (req, res) => {
    let student = req.body;
    const newStudent = await createStudent(student)
<<<<<<< HEAD
   
=======
>>>>>>> 1a7466ea171d69d1a5cbc381bbe7df92f62d87a2
    if(newStudent)
    {
        res.status(201).send(newStudent);

    }else{
        res.status(404).send("Not Found")
    }

}
const updateStudent= async (req, res) => {
    const { id } = req.params;
  
    const { fullname, age, numberClass } = req.body;
   
    const updateInforStudent= await updateInfor(id,fullname, age, numberClass );
   
    if(updateInforStudent){
    res.status(200).send(updateInforStudent);
    } else {
      res.status(404).send("Not found");
    }
  }



const deleteStudent=async(req, res) => {
    const { id } = req.params;
  
    const studentDeleted= await deleteByID(id)
    if (studentDeleted) {
      res.status(200).send(studentDeleted);
    } else {
      res.status(404).send("Not found");    
    }
  }


module.exports={
    getStudents,getDetailStudent,addStudent,updateStudent,deleteStudent
}
