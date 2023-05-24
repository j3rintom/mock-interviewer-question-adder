const express = require("express")
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
const interviewRoutes = require("./routes/interview.js")
const userRoutes = require("./routes/users.js")
const userInterviewRoutes = require("./routes/userInterview.js")

const app = express()
const cors = require("cors")
app.use(cors())
require('dotenv/config');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/interview", interviewRoutes)
app.use("/user", userRoutes)
app.use("/userInterview", userInterviewRoutes)

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

