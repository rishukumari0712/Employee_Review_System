const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Employee_Review_System');
const db = mongoose.connection; // establishing a sever

db.on('error', (err)=>{console.log(`Error occured while connecting to DB ::  mongodb \n Error : ${err}`)}); // incase any error due to server or user

db.once('open', ()=>{console.log(`Successfully connected to the database :: mongodb`)}); // successfull established connection

module.exports = db; // check this out.