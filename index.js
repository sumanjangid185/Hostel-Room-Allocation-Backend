const express = require('express');
const { user } = require('./db');
const cors =require('cors')
const app =express();


app.use(express.json());
app.use(cors());
app.post('/api/addDetail', async(req,res)=>{
    const data=req.body;
    
    try{
    const response=await user.create({
          name:data.name,
          rollNumber : data.rollNumber,
          contact : data.contact,
          currentRoom : data.currentRoom,
          allotedRoom : data.allotedRoom,
          currentHostel: data.currentHostel,
          allotedHostel : data.allotedHostel
    });
// console.log(res);
return res.json({
  msg : "User added successfully",
  status:200,
})
}
catch(e){
console.log("Error while creating user");
return res.json({

    msg :"Error while adding user",
    status:400
})
}
})

app.get('/api/bulk', async(req,res)=>{
    const newfilter = req.query.filter.toLowerCase() || "";
    const data = await user.find({
        $or:[{
            currentRoom: {
                "$regex": newfilter,
            // "$options" : "i",
            }
        },{
           allotedRoom:{
            "$regex" : newfilter,
            // "Soptions" : "i"
           }
        
        }]
    });
    return res.json({
        data,
    })
})



app.listen(3000, ()=>{
    console.log("Server Started")
})