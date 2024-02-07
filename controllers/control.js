const url=require("../models/schema");
const shortid=require("shortid")

//controllers

const generatenewshorturl=async(req,res)=>{
    const body=req.body;
    const Shortid=shortid()

    await url.create({
        shortid:Shortid,
        redirecturl:body.url
    })
}

module.exports=generatenewshorturl