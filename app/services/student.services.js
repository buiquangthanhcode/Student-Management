const {Student}=require("../models/index.js")

let students=[
    {
        id:1,
        fullname:"Bui Quang Thanh",
        age:18,
        numberClass:20,

    },
    {
        id:2,
        fullname:"Bui Tien Dat ",
        age:20,
        numberClass:30,

    },
    {
        id:3,
        fullname:"Nguyen Thi Minh Thao",
        age:18,
        numberClass:21,

    }

]

const getList=async ()=>{
  const students_= await Student.findAll()
    if(students_)
    {
        return students_
    }
    else{
        return false;
    }
}

const getDetailInforStudent= async (id)=>{
    // const index = students.findIndex((student) => {
    //     return student.id == id;
    //   });
      const student = await Student.findOne({
        where :{
          id:id,
        }
      })
      if (student) {
       return student;
      } else {
       return false;
      }
}
const createStudent= async (student)=>{

    const newStudent = await Student.create(student);
      return newStudent
}
const updateInfor=async(id,fullname, age, numberClass )=>{

      const updateStudent=await getDetailInforStudent(id);
      if (updateStudent) {
        updateStudent.fullname=fullname;
        updateStudent.age=age;
        updateStudent.numberClass=numberClass;
        const studentupdated = await updateStudent.save()
        return studentupdated
        }
      else{
        return false;
      }
}

const deleteByID=async(id)=>{
    // const index = students.findIndex((student) => {
    //     return student.id == id;
    //   });
    //   console.log(index);
    const deletedStudent= await Student.destroy({
      where:{
        id:id,
      }
    })
  
      if (deletedStudent) {
        //     students=students.filter((student)=>{
        //     return student.id != id
        // })
        
        return true
      } else {
        return false;
      }
}


module.exports={
    getList,getDetailInforStudent,createStudent,updateInfor,deleteByID,
}