const mongoose=require('mongoose');

//defining the mongodb url
const mongoURL="mongodb://localhost:27017/mydatabase"

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