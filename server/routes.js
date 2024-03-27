const express = require('express');

const router = express.Router();

// GET /tasklistify
router.get('/tasklistify', async (req, res) => {
	res.status(200).json({ msg: 'GET REQUEST TO /api/tasklistify' });
});

// POST /tasklistify
router.get('/tasklistify', async (req, res) => {
	res.status(201).json({ msg: 'POST REQUEST TO /api/tasklistify' });
});

// DELETE /tasklistify/:id
router.get('/tasklistify', async (req, res) => {
	res.status(200).json({ msg: 'DELETE REQUEST TO /api/tasklistify/:id' });
});

// PUT /tasklistify/:id
router.get('/tasklistify', async (req, res) => {
	res.status(200).json({ msg: 'PUT REQUEST TO /api/tasklistify/:id' });
});

module.exports = router;
