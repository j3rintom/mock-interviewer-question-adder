const express=  require("express")
const router  = express.Router()
const {getInterviews,addInterview,getInterviewById,updateCount}  = require("../controllers/interview.js")

router.get('/',getInterviews)
router.post('/',addInterview)
router.get('/:id',getInterviewById)
router.put('/:id',updateCount)


module.exports = router;
