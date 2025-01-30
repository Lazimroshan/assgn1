const express=require('express')
const createuser = require('./functions/user')
const login = require('./functions/Login')
const getuser = require('./functions/Getuser')
const protect = require('./Middileware/Tockenverify')







const router=express.Router()

const Middleware=[protect]
router.route('/create').post(createuser)
router.route('/login').post(login)
router.route('/user/:id').get(Middleware,getuser)


module.exports=router