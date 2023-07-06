const usercontroller = require('../controller/usercontroller');

const router = require('express').Router()

router.post('/addurl',usercontroller.addUser)

module.exports = router;