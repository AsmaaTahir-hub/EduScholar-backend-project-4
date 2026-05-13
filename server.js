// imports
const express = require("express") //importing express package
const app = express() // creates a express application
const dotenv = require("dotenv").config() //this allows me to use my .env values in this file
const mongoose = require("mongoose")
const morgan = require('morgan')
const authRoutes = require('./controllers/auth.routes')
const scholarshipRoutes = require('./controllers/Scholarship.routes')
const applicationRoutes = require('./controllers/Application.routes')
const universityRoutes = require('./controllers/University.routes')

app.use(express.static('public')) // my app will serve all static files from public folder
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(morgan('dev'))
app.use('/auth', authRoutes)
app.use('/scholarships', scholarshipRoutes)
app.use('/applications', applicationRoutes)
app.use('/universities', universityRoutes)











async function connectToDB(){ //connection to the database
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to Database")
    }
    catch(error){
        console.log("Error Occured",error)
    }
}


connectToDB()


app.listen(3000,()=>{
    console.log('App is working')
})