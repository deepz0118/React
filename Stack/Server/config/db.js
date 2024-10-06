const mongoose=require('mongoose')
mongoose.connect(process.env.MONGOURL||"mongodb+srv://thangamdeepi49:lHg1G8RI3IyRkBC8@sample-aws.pbiij.mongodb.net/?retryWrites=true&w=majority&appName=Sample-AWS")
const connection=mongoose.connection;
connection.on('connected',()=>console.log("DB Connected"))
connection.on('error',()=>console.log("DB Error"))
module.exports=mongoose
