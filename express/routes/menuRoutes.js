const express=require('express');
const router=express.Router();
const menu= require('./../models/menu');


router.post('/', async(req, res) =>{
    try {
        const data = req.body;
        const newMenu = new menu(data);

        const response = await newMenu.save();
        console.log("Data saved");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }  })

module.exports=router;