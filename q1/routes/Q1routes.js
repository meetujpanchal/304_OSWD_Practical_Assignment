const express = require('express')
const router = express.Router()
const Q1 = require('../model/q1')

router.get('/', async(req,res)=>{
    try {
        const data = await Q1.find()
        res.json(data)
    } catch (error) {
        res.send('Error'+error)
    }
})

router.post('/add',async(req,res)=>{
    const add = new Q1({
        name:req.body.name,
        pass:req.body.pass,
        email:req.body.email,
        phone:req.body.phone,        
    })
    try {
        const data_add = await add.save()
        res.setHeader('Content-Type','Application/json')
        res.json(data_add)      
    } catch (error) {
        res.send('Error'+error)
    }
})

module.exports = router