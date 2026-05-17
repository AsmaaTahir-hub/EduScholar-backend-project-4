const mongoose = require('mongoose')
const universitySchema = new mongoose.Schema({
name : {
type : String ,
required : true ,
} ,
country : {
type : String ,
required : true ,
} ,
city : {
type : String ,
required : true ,
} ,
ranking : {
type : Number ,
} ,
},
{timestamps:true}

);
const University = mongoose.model("University",universitySchema)


module.exports = University

