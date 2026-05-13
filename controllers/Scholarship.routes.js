const router = require('express').Router()

const Scholarship = require('../models/Scholarship')
const verifyToken = require('../middleware/verify-token')

// CREATE for 
router.post('/', verifyToken, async (req, res) => {
  try {
    const scholarship = await Scholarship.create({
      ...req.body,
      createdBy: req.user._id
    })

    res.status(201).json(scholarship)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// READ ALL
router.get('/', async (req, res) => {
  try {
    const scholarships = await Scholarship.find()
      .populate('createdBy')
      .populate('University')

    res.json(scholarships)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// READ ONE
router.get('/:id', async (req, res) => {
  try {
    const scholarship = await Scholarship.findById(req.params.id)
      .populate('createdBy')
      .populate('University')

    if (!scholarship) {
      return res.status(404).json({ message: 'Scholarship not found' })
    }

    res.json(scholarship)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// UPDATE
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const scholarship = await Scholarship.findById(req.params.id)

    if (!scholarship) {
      return res.status(404).json({ message: 'Scholarship not found' })
    }

    // Authorization check
    if (scholarship.createdBy.toString() !== req.user._id) {
      return res.status(403).json({ message: 'Unauthorized' })
    }

    const updated = await Scholarship.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    res.json(updated)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// DELETE
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const scholarship = await Scholarship.findById(req.params.id)

    if (!scholarship) {
      return res.status(404).json({ message: 'Scholarship not found' })
    }

    // Authorization check
    if (scholarship.createdBy.toString() !== req.user._id) {
      return res.status(403).json({ message: 'Unauthorized' })
    }

    await Scholarship.findByIdAndDelete(req.params.id)

    res.json({ message: 'Deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router