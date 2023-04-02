const express=  require("express")
const router  = express.Router()
const {getQuestions,addQuestion}  = require("../controllers/question.js")

router.get('/',getQuestions)
router.post('/',addQuestion)



module.exports = router;
