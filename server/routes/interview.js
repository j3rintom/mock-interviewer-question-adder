const express=  require("express")
const router  = express.Router()
const {getInterviews,addInterview}  = require("../controllers/interview.js")

router.get('/',getInterviews)
router.post('/',addInterview)



module.exports = router;
