const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required: function(){
            return this.notificationprefer.includes('email');
        }
    },
    phone:{
        type:String,
        required:function()
        {
            return this.notificationprefer.includes('sms');
        }
    },
    notificationprefer:{
        type:[String],
        enum:['email','sms','inapp']
    }
},{timestamps:true});

module.exports=mongoose.model('User',userSchema);
