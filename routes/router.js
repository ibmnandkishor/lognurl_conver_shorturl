const generatenewshorturl=require('../controllers/control')
const express=require("express")
const router=express.Router()

router.post("/",generatenewshorturl);

module.exports=generatenewshorturl
