const mongoose =require("mongoose")

const interviewSchema = mongoose.Schema({
  company:String,
  role:String,
  questions:Array,
  count:{
    type:Number,
    default:0
  }
});


const InterviewSchema = mongoose.model('InterviewSchema',interviewSchema)

module.exports = InterviewSchema
