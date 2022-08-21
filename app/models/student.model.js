const {DataTypes}=require("sequelize")


// tham so thu nhat la ten bang 
// tham so thu 2 thuoc tinh cua cac bang 
const createStudentModel=(sequelize)=>{
    return sequelize.define("Student",{

        fullname:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        age:
        {
    
            type:DataTypes.INTEGER,
            allowNull:false,
    
        },
        numberClass:{
            type:DataTypes.INTEGER,
            allowNull:false,
    
        }
    
    },{
        tableName:"students",
        timestamps:true // tao ra moc thoi gian , create at , 
    })
}
module.exports={
    createStudentModel,
}