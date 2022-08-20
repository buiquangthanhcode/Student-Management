const checkEmpty=(req,res,next)=>{
    const {fullname, age ,numberClass}= req.body
    if(fullname&&age&&numberClass)
    {
        next()
    }
    else{
        res.status(500).send("Not empty attributed")
    }
}


module.exports={
    checkEmpty,
}