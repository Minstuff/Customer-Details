const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const CustModel = require('./models/Customers')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/customer_info')


app.get('/',(req,res)=>{
    CustModel.find({})
    .then (customers=> res.json(customers))
    .catch(err=> res.json(err))
})

app.post('/createCust',(req,res)=>{
    CustModel.create({
    custname:req.body.custname,
    custNum: req.body.custNum,
    city: req.body.city,
    state: req.body.state,
    pincode: req.body.pincode,
    })
    .then((doc)=>console.log(doc))
    .catch((err)=>console.log(err));
})

app.delete('/deleteCust/:id',(req,res)=>{
    const id = req.params.id;
    CustModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
})

app.put('/updateUser/:id',(req,res)=>{
  const id = req.params.id;
  CustModel.findByIdAndUpdate({_id:id},{
    custname:req.body.custname,
    custNum: req.body.custNum,
    city: req.body.city,
    state: req.body.state,
    pincode: req.body.pincode,
  })
  .then (users=> res.json(users))
  .catch(err=> res.json(err))
})

  app.get('/searchCust/:number',(req,res)=>{
    const number=req.params.number;
    CustModel.findOne({custNum:number})
    .then(cust=>res.json(cust))
    .catch(err=>res.json(err))
})

app.listen(3001, ()=>{
    console.log("Server is running")
})