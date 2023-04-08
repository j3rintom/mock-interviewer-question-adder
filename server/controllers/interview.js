
const InterviewSchema = require("../models/interviewSchema.js")
const mongoose = require("mongoose")



exports.getInterviews = async (req,res) =>{
    
    const data = await InterviewSchema.find();
    res.send(data)
}
exports.addInterview = async(req,res) =>{
    const interview = req.body
    const newInterview= new InterviewSchema(interview)
    try {
        newInterview.save()
        res.status(201).json(newInterview);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

exports.getInterviewById= async (req,res) =>{
    const id = req.params.id
    const data = await InterviewSchema.findById(id);
    res.send(data)
}