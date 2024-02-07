const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1/dburlmvc").then(()=>{
    console.log('mongodb connected')
}).catch((err)=>{
console.log('error')
})