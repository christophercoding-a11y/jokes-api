const express = require('express')
const router = express.Router()

// static files
router.use(express.static('public'))

router.use('/jokes', require('./api/jokesRoutes'))

// home page
// localhost: 3000
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'My Jokes Websites',
        name: 'Jokes'
    })
})


module.exports = router