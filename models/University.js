import mongoose from "mongoose";

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
rinking : {
type : Number ,
} ,

details : {
type : String ,

} ,
},
{timestamps:true}

);
const University = mongoose.model("University",universitySchema)
export default University