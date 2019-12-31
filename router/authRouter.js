const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Agent = mongoose.model('Agent');

router.post('/register',async(req,res)=>{
    const {name,date} = req.body;
    try{
        const user = new Agent({name,date});
        await user.save();
        res.send(user);
    }
    catch(err){
        res.status(422).send(err.message);
    }
});

router.get('/getuser',async(req,res)=>{
    const query = Agent.find({name:req.body.name});
    query instanceof mongoose.Query;
    const docs = await query;
    if(docs==''){
        res.send("Error");
    }
    else{
        res.send(docs);
    }
})

module.exports = router;