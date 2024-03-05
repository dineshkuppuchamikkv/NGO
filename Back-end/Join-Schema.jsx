const mongoose=require('mongoose');
const schema2=new mongoose.Schema(
    {
        firstname:String,
        lastname:String,
        email:String,
        address:String,
        city:String,
        country:String,
        state:String,
        zip:Number,
    }
)
const model2=new mongoose.model('join-nows',schema2);
module.exports=model2;   