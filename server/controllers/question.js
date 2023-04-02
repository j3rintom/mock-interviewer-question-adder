
const QuestionSchema = require("../models/questionSchema.js")
const mongoose = require("mongoose")



exports.getQuestions = async (req,res) =>{
    
    const data = await QuestionSchema.find();
    res.send(data)
}
exports.addQuestion = async(req,res) =>{
    const question = req.body
    const newQuestion = new QuestionSchema(question)
    try {
        newQuestion.save()
        res.status(201).json(newQuestion);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}