const express=require('express');
const mongoose=require('mongoose');
const notifyroute=require('./routes/notification.route');
const app=express();
const port=3000;
app.use(express.json());
app.use('/',notifyroute);
mongoose.connect('mongodb://localhost:27017/notification-service')
.then(()=> console.log('connected to mongodb'))
.catch(err=> console.error('mongodb connection error:',err));
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});