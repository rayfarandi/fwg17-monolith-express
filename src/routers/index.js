const router = require('express').Router()
const userController = require('../controllers/users.controller')
router.get('/', (req, res)=>{
    return res.render('index', {title:null})
})

router.use('/users', require('./users.router'))

router.get('/add', (req, res)=>{
    return res.render('users/add', {title: "Add User"})
})

router.get('/about-us', (req, res)=>{
    return res.render('about-us', {title: "About Us"})
})

module.exports = router