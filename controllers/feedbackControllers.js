const feedbackModel = require('../models/feedbackModel')

async function getfeedbackById(req , res) {
    const { id } = req.params;

    try {
        const feedback = await feedbackModel.getfeedbackById(id);
        console.log(feedback);
        res.json(feedback);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

async function createFeedback(req,res) {
    try {
        const {userdId} = req.params;
        const {feedback} = req.body;
        const newFeedback = await feedbackModel.createFeedback(feedback,userdId);
        res.status(201).json(newFeedback);
    } catch (error){
        console.log(error);
        res.status(500).send(error);
    }
}
module.exports = { getfeedbackById, createFeedback};