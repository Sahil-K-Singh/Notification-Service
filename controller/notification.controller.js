const notify=require('../models/notification.model');
const user=require('../models/user.model');
const emailservice=require('../service/email');
const smsservice=require('../service/sms');
const inappservice=require('../service/inapp');
exports.send=async(req,res)=>{
    const {userid,type,message}=req.body;
    if(!userid||!type||!message){
        return res.status(400).json({error:'All fields are important'});
    }
    try
    {
        const user=await user.findById(userid);
        if(!user) return res.status(400).json({error:'user not found'});
        if(!user.notificationprefer.includes(type))
            {
               return res.status(400).json({error:`user does not accept ${type} notification`});

            }
        switch(type){
            case 'email':
                await emailservice.send(user.email,message);
                break;
            case 'sms':{
                await smsservice.send(user.phone,message);
                break;
            }
            case 'inapp':{
                await inappservice.save(userid,message);
                break;
            }
             default:
             return res.status(400).json({ error: 'Invalid notification type.' });
        }
        const notification=new notify({userid,type,message});
        await notification.save();
        req.status(200).json({sucess:true});
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getUserNotifications = async (req, res) => {
  const { id } = req.params;

  try {
    const notification = await notify.find({ userid: id }).sort({ createdAt: -1 });
    res.status(200).json(notification);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
