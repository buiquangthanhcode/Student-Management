// muc dich cua middleware chu yeu la de validation 
// middleware nam giua qua trinh req and res
// 1 middlewares luon luon co 3 tham so (req,res,next)
// controller chi co hai tham so (req,res)
// middlewares luon luon chi duoc su dung trong router
const logfeatures=(req,res,next)=>{
    console.log("Here is the middleware")
    next()  // middle tiep theo duoc chay , neu khong goi chuong trinh se bi dung ngay tai do 
}
module.exports={
    logfeatures
}