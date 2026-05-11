import mongoose from "mongoose"
const userSchema = new mongoose.Schema({

name : {
type : String ,
required : true ,
} ,
email : {
type : String ,
required : true ,
unique : true ,
} ,
password: {
type : String ,
required : true ,
} ,
role : {
type : String ,
default : "student" ,
} ,
gpa : {
type : Number ,
min:0,
max:4,
} ,
degree : {
type : String ,
} ,
major  : {
type : String ,
} ,
country  : {
type : String ,
} ,
},
{timestamps:true}
);

const User = mongoose.model("User",userSchema)
export default User 