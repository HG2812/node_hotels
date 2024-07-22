const mongoose= require("mongoose");

//define the person schema

const menuSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    price:{
        type:Number
    },
    type:{
        type:String,
        enum:['sweet','sour'],
        required:true
    }
});

//Create person  model

const Menu=mongoose.model('Menu',menuSchema);
module.exports=Menu;