const express=require('express');
const router=express.Router();
const route=require('../controllers/notification.controller');
router.post('/notification',route.send);
router.get('/user/id/notification',route.getUserNotifications);
module.exports=router;
