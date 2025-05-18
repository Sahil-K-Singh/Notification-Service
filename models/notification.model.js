const mongoose=require('mongoose');
const notificationSchema= new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    type:{
        type:String,
        enum:['email','sms','inapp'],
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    Date:{
        type:Date,
        default:Date.now
    }
});
module.exports=mongoose.model('Notification',notificationSchema);   
