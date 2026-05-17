const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },

    scholarship: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Scholarship',
      required: true
    },

    status: {
      type: String,
      default: 'pending'
    }
  },
  { timestamps: true }
)

const Application = mongoose.model('Application', applicationSchema)

module.exports = Application