const mongoose =require("mongoose")

const questionSchema = mongoose.Schema({
  question:String,
  answer:String,
  company:Array,
  role:Array,
});


const QuestionSchema = mongoose.model('QuestionSchema',questionSchema)

module.exports = QuestionSchema
