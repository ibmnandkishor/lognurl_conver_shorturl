
const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1/dburlmvc").then(()=>{
    console.log('mongodb connected')
}).catch((err)=>{
console.log(err)
})

const urlschema=new mongoose.Schema({
shortid:{
    type:String,
    required:true,
    unique:true,
},
redirecturl:{
    type:String,
    required:true,
}
})

const url=mongoose.model("tableurlmvc",urlschema)
module.exports=url;

