
const router= require('express').Router()

const controler = require ("../controller/cont")
const models = require("../models/user")
router.get('/api/user',models.getoneuser)
router.post('/api/create',models.createpost)
router.patch('/api/:id',controler.UbdateUSer)
router.delete('/api/delete/:id',controler.deleteuser)
module.exports={userrouter:router}

