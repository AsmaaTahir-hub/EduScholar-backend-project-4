const router = require('express').Router()

const University = require('../models/University')
const verifyToken = require('../middleware/verify-token')

const checkAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admins only' })
  }

  next()
}

// CREATE university - admin only
router.post('/', verifyToken, checkAdmin, async (req, res) => {
  try {
    const university = await University.create(req.body)

    res.status(201).json(university)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// READ all universities - everyone
router.get('/', async (req, res) => {
  try {
    const universities = await University.find()

    res.json(universities)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// READ one university - everyone
router.get('/:id', async (req, res) => {
  try {
    const university = await University.findById(req.params.id)

    if (!university) {
      return res.status(404).json({ message: 'University not found' })
    }

    res.json(university)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// UPDATE university - admin only
router.put('/:id', verifyToken, checkAdmin, async (req, res) => {
  try {
    const updated = await University.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    if (!updated) {
      return res.status(404).json({ message: 'University not found' })
    }

    res.json(updated)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// DELETE university - admin only
router.delete('/:id', verifyToken, checkAdmin, async (req, res) => {
  try {
    const deleted = await University.findByIdAndDelete(req.params.id)

    if (!deleted) {
      return res.status(404).json({ message: 'University not found' })
    }

    res.json({ message: 'University deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router