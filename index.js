const express=require('express')
const app=express()
const urlroute=require("./routes/router")
const port=3000

app.use(express.urlencoded({extended:false}))
app.use("/url",urlroute)

app.listen(port,()=>{
    console.log('server runing')
})