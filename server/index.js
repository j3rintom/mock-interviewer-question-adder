const express = require("express")
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
const questionRoutes = require("./routes/question.js")
const interviewRoutes = require("./routes/interview.js")

const app = express()
const cors = require("cors")
app.use(cors())
require('dotenv/config');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/question", questionRoutes)
app.use("/interview", interviewRoutes)

app.get("/",(req,res)=>{
    res.send("Hello World")
})






var port = process.env.PORT || 5000

mongoose.connect("mongodb+srv://jerintom:jerintom@questions.563sddt.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
        app.listen(port, err => {
            if (err)
                throw err
            console.log('Server listening on port', port)
        })
    });

