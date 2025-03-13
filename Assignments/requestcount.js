const express=require("express")
const app=express()
app.listen(3000)

requestcount=0

app.use(function(req,res,next){
    requestcount=requestcount+1
    next()
})
app.get("/user1",function(req,res){
    res.json({
        msg:"Hi1"
    })
})
app.put("/user2",function(req,res){
    res.json({
        msg:"Hi2"
    })
})
app.post("/user3",function(req,res){
    res.json({
        msg:"Hi3"
    })
})
console.log(requestcount)