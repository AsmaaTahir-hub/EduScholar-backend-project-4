import mongoose from "mongoose";
const scholarshipSchema = new mongoose.Schema({
title : {
type : String ,
required : true ,
} ,
description  : {
type : String ,
required : true ,
} ,
field : {
type : String ,
} ,
country : {
type : String ,
} ,
minGPA : {
type : Number ,
} ,
requiredDegree : {
type : String ,
} ,
deadline : {
type : Date,
} ,
University : {
type : mongoose.Schema.Types.ObjectId ,
ref : "University" ,
required : true ,
} ,
createdBy : {
type : mongoose.Schema.Types.ObjectId ,
ref : "User" ,
required : true ,
} ,
},
{timestamps:true}
);
const Scholarship = mongoose.model("Scholarship",scholarshipSchema)
export default Scholarship