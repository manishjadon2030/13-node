const users = require('../users.json')

function getAllusers(req,res){
    try{
        res.json(users)
    }catch(err){
       
    }
}
function pagenotfound(req,res){
    res.send("<h1>page is not found </h1>")
}
module.exports = {
    getAllusers,
    pagenotfound
}