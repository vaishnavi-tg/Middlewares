const express=require("express")
const zod=require("zod")
const app=express()
const schema=zod.array(zod.number)
app.use(express.json()) 
app.get("/health-checkup",function(req,res){
    const username=req.headers.username
    const password=req.headers.password
    const kidneyId=req.query.kidneyId

    if(username!="admin"||password!="pass"){
        res.status(400).json({
            "msg":"Your inputs are wrong"})
        return     
    }
    if(kidneyId!=1&&kidneyId!=2){
        res.status(400).json({"msg":"Somethings up with u r inputs"})

    }
    res.json({"msg":"Everything is fine!"})
    
})
app.post("/health-checkup",function(req,res){
    const kidneys=req.body.kidneys
    const response=schema.safeParse(kidneys)
    const kidneyLength=kidneys.length


    res.send("You have "  + kidneyLength +  " kidneys")
    res.json({
        response
    })
})


app.use(function(err,req,res,next){
    res.json({
        msg:"Sorry sumthgs up with the server"
    })
})
app.listen(3000)       



