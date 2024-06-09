const express = require('express');
const router = express.Router();

const feedbackController = require('../controllers/feedbackControllers')

router.get('/:id',feedbackController.getfeedbackById);
router.post('/:userdId',feedbackController.createFeedback);

module.exports = router;