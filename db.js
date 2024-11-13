require('dotenv').config()
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        
    },
    rollNumber:{
        type:String,
        unique: true,
    },
    currentHostel:{
        type:String,
    },
    contact:{
        type:String,
        unique:true,
    },
    currentRoom:{
        type:String,
        lowercase:true,
    },
    allotedRoom:{
        type:String,
        lowercase:true,
    },
    allotedHostel:{
        type:String
    },
    password:{
        type:String
    }


})


const user = mongoose.model('user', userSchema);

module.exports={
    user,
}