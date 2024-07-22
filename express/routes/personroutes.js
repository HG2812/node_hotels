const express = require('express');
const router = express.Router();
const Person = require('../models/person'); // Correct the path as per your folder structure

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log("Data saved");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType === 'chef' || workType === 'waiter' || workType === 'manager') {
            const response = await Person.find({ work: workType });
            console.log("Response fetched");
            res.status(200).json(response);
        } else {
            res.status(400).json({ error: 'Invalid work type' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const updatedPersonData=req.body;
        const response =await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,
            runValidators:true,
        })
        if(!response){
            return res.status(404).json({error:'person not found'});
        }

        console.log("updated");
        res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
        
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const response =await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:'person not found'});
        }

        console.log("Deleted");
        res.status(200).json({message:"person details deleted"});

    }
    catch(err){
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
        
    }
})

module.exports = router;
