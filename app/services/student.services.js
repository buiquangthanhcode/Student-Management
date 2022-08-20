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

const getList=()=>{
    if(students)
    {
        return students
    }
    else{
        return false;
    }
}

const getDetailInforStudent=(id)=>{
    const index = students.findIndex((student) => {
        return student.id == id;
      });
      if (index !== -1) {
       return students[index];
      } else {
       return false;
      }
}
const createStudent=(student)=>{
    const newstudent = {
        id: Math.random(),
        ...student, // copy lai toan bo du lieu
      };
      students = [...students, newstudent];
      return newstudent
}
const updateInfor=(id,fullname, age, numberClass )=>{
    const index = students.findIndex((student) => {
        return student.id == id;
      });
    
      if (index !== -1) {
        const oldStudent = students[index];
        const updatesStudent = {
          ...oldStudent,    
          fullname,
          age,
          numberClass,
        };
        students[index] = updatesStudent;
        return updatesStudent
      }
      else{
        return false;
      }
}

const deleteByID=(id)=>{
    const index = students.findIndex((student) => {
        return student.id == id;
      });
      console.log(index);
      if (index !== -1) {
        //     students=students.filter((student)=>{
        //     return student.id != id
        // })
        students.splice(index, 1);
        return students
      } else {
        return false;
      }
}


module.exports={
    getList,getDetailInforStudent,createStudent,updateInfor,deleteByID,
}