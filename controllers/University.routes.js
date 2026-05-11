//CURD
const router = require('express').Router()
const University = require('../models/University')
const verifyToken = require('../middleware/verify-token')
//POST -create new university 
//GET - show all university 
//DELETE -delete the university 
//PUT -update the new scholarshipe if they have