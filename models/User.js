const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },

    hashedPassword: {
      type: String,
      required: true
    },

    role: {
      type: String,
      default: 'student'
    },

    gpa: {
      type: Number,
      min: 0,
      max: 4
    },

    degree: {
      type: String
    },

    major: {
      type: String
    },

    country: {
      type: String
    }
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)

module.exports = User