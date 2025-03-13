const express=require("express")
const app=express()

function ageright(req,res,next){
const age=Number(req.query.age)
    if(age>=14){
        next() 
    }
    else{
        res.json({
            msg:"Your not right age"
        })    }
}
app.get("/ride1",ageright,function(req,res,next){
    res.json({
        msg:"Your rided ride1"
    })
})
app.get("/ride2",ageright,function(req,res,next){
    res.json({
        msg:"Your rided ride2"
    })
})
app.listen(4000)
