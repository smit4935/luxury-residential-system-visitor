const express = require('express');
const router = express.Router();
const {
  getAllVisitors,
  getVisitor,
  createVisitor,
  updateVisitor,
  deleteVisitor,
  getVisitorsByStatus,
  getVisitorsByDateRange,
} = require('../controllers/visitorController');

// GET all visitors
router.get('/', getAllVisitors);

// GET visitors by status
router.get('/status/:status', getVisitorsByStatus);

// GET visitors by date range
router.get('/date-range', getVisitorsByDateRange);

// GET single visitor
router.get('/:id', getVisitor);

// CREATE visitor
router.post('/', createVisitor);

// UPDATE visitor
router.put('/:id', updateVisitor);

// DELETE visitor
router.delete('/:id', deleteVisitor);

module.exports = router;
