const express=  require("express")
const router  = express.Router()
const {getInterviews,addInterview,getInterviewById}  = require("../controllers/interview.js")

router.get('/',getInterviews)
router.post('/',addInterview)
router.get('/:id',getInterviewById)


module.exports = router;
