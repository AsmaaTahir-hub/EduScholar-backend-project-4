const router = require('express').Router()

const Application = require('../models/Application')
const verifyToken = require('../middleware/verify-token')

// CREATE
router.post('/', verifyToken, async (req, res) => {
  try {
    const application = await Application.create({
      ...req.body,
      user: req.user._id
    })

    res.status(201).json(application)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// READ ALL
router.get('/', async (req, res) => {
  try {
    const applications = await Application.find()
      .populate('user')
      .populate('scholarship')

    res.json(applications)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// READ ONE
router.get('/:id', async (req, res) => {
  try {
    const application = await Application.findById(req.params.id)
      .populate('user')
      .populate('scholarship')

    res.json(application)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// UPDATE
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const application = await Application.findById(req.params.id)

    if (!application) {
      return res.status(404).json({ message: 'Application not found' })
    }

    if (application.user.toString() !== req.user._id) {
      return res.status(403).json({ message: 'Unauthorized' })
    }

    const updated = await Application.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    res.json(updated)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router