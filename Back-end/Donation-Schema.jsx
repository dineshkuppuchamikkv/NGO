const mongoose=require('mongoose');
const schema=new mongoose.Schema(
    {
        name:String,
        address:String,
        amount:Number,
        phoneNumber:Number
    }
)
const model=new mongoose.model('Donation',schema);
module.exports=model;