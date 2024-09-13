const express = require('express')
const router = require('./routes/user')
const app = express()
const Port = 3000

app.use(router)








app.listen(Port,(err)=>{
    if(err){
        console.log("server is busy",err)
    } else{
        console.log("server is running on ",Port)
    }
})