const express = require('express');
const router = express.Router();
const { getConnectedClient } = require('./database');
const { ObjectId } = require('mongodb');

const getCollection = () => {
	const client = getConnectedClient();
	const collection = client.db('tasklistifydb').collection('tasklistify');
	return collection;
};

// GET /tasklistify
router.get('/tasklistify', async (req, res) => {
	const collection = getCollection();
	const tasklistify = await collection.find({}).toArray();

	res.status(200).json(tasklistify);
});

// POST /tasklistify
router.post('/tasklistify', async (req, res) => {
	const collection = getCollection();
	const { tasklistify } = req.body;

	if (!tasklistify) {
		return res.status(400).json({ mssg: 'error no tasks found' });
	}

	tasklistify = JSON.stringify(tasklistify);

	const NewTasklitify = await collection.insertOne({
		tasklistify,
		satus: false,
	});

	res
		.status(201)
		.json({ tasklistify, status: false, _id: NewTasklitify.insertedId });
});

// DELETE /tasklistify/:id
router.delete('/tasklistify/:id', async (req, res) => {
	const collection = getCollection();
	const _id = new ObjectId(req.params.id);

	const deletedTasklisify = await collection.deleteOne({ _id });

	res.status(200).json(deletedTasklisify);
});

// PUT /tasklistify/:id
router.put('/tasklistify/:id', async (req, res) => {
	const collection = getCollection();
	const _id = new ObjectId(req.params.id);
	const { status } = req.body;

	if (typeof status !== 'boolean') {
		return res.status(400).json({ mssg: 'invalid status' });
	}

	const updatedTasklistify = await collection.updateOne(
		{ _id },
		{ $set: { status: !status } }
	);

	res.status(200).json(updatedTasklistify);
});

module.exports = router;
