const mongoose = require("mongoose")
const connection =  mongoose.connect("mongodb+srv://kaustubh:123@cluster0.camqahr.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("DB Connected")
}).catch((e)=>{
    console.log(e)
})

module.exports = connection;