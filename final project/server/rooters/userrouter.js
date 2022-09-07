
const router= require('express').Router()
const models = require("../models/user")



router.post('/createuser',models.createUser)
router.get('/api',models.getalluser)
router.post('/checkuser',models.checkuser)
router.get('/login,',models.login)
module.exports={userrouter:router}

