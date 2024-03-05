const mongoose=require('mongoose');
const schema3=new mongoose.Schema(
    {
        name:String,
        email:String,
        message:String,

    }
)
const model3=new mongoose.model('Contacts',schema3);
module.exports=model3;   