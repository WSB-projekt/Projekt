const express = require('express');

const router = express.Router();

// GET /tasklistify
router.get('/tasklistify', (req, res) => {
	res.status(200).json({ mssg: 'GET REQUEST TO /api/tasklistify' });
});

// POST /tasklistify
router.post('/tasklistify', (req, res) => {
	res.status(201).json({ mssg: 'POST REQUEST TO /api/tasklistify' });
});

// DELETE /tasklistify/:id
router.delete('/tasklistify/:id', (req, res) => {
	res.status(200).json({ mssg: `DELETE REQUEST TO /api/tasklistify/:id` });
});

// PUT /tasklistify/:id
router.put('/tasklistify/:id', (req, res) => {
	res.status(200).json({ mssg: `PUT REQUEST TO /api/tasklistify/:id` });
});

module.exports = router;
