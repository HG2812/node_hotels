const mongoose=require('mongoose');
require('dotenv').config();

//defining the mongodb url
//const mongoURL="mongodb://localhost:27017/mydatabase"
const mongoURL=process.env.MONGODB_URL;
//setup mongodb connection

mongoose.connect(mongoURL,{
})

const db=mongoose.connection;

//defining the evet listeners

db.on('connected',()=>{
    console.log("mongodb connected");
})
db.on('disconnected',()=>{
    console.log("mongodb disconnected");
})
//export the datbase connection
module.exports=db;