const mongoose = require('mongoose')

const CustSchema = new mongoose.Schema({
    custname:String,

    // custname:{
    //     required:true,
    //     type:String,
    //     unique:true
    // }
    custNum: Number,
    city: String,
    state: String,
    pincode: Number
})

const CustModel = mongoose.model("customers", CustSchema)

module.exports = CustModel