// imports
const express = require("express") //importing express package
const app = express() // creates a express application
const dotenv = require("dotenv").config() //this allows me to use my .env values in this file
const mongoose = require("mongoose")
const morgan = require('morgan')
const cors = require('cors')
const authRoutes = require('./controllers/auth.routes')
const scholarshipRoutes = require('./controllers/Scholarship.routes')
const applicationRoutes = require('./controllers/Application.routes')
const universityRoutes = require('./controllers/University.routes')

app.use(express.static('public')) // my app will serve all static files from public folder
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/auth', authRoutes)
app.use('/scholarships', scholarshipRoutes)
app.use('/applications', applicationRoutes)
app.use('/universities', universityRoutes)

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to Database')
  } catch (error) {
    console.log('Error Occurred', error)
  }
}

connectToDB()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})