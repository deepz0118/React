require('dotenv').config()
const express=require('express')
const app=express()
const dbConn=require('./config/db.js')
const port=process.env.PORT || 7778
app.get('/',(req,res)=>{
    res.json({message:"Welcome deepika"})
})
app.listen(port,()=>{
    console.log(`Server running in : ${port}`)
})