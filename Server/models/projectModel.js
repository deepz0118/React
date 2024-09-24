const { Module } = require('module');
const mongoose=require('mongoose')

const projectSchema=new mongoose.Schema({
           title:{
            type:string,
            required:true,
           },
           desc:{
            type:string,
            required:true
           }

})
const Projects=mongoose.model("Projects",projectSchema)
module.exports=Projects;