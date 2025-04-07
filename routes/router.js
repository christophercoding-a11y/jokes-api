const express = require('express')
const axios = require('axios')
const router = express.Router()

// static files
router.use(express.static('public'))

router.use('/jokes', require('./api/jokesRoutes'))

// home page
// localhost: 3000
router.get('/', (req, res)=> {
    let jokeOfTheDay
    
    axios.get('https://api.sampleapis.com/jokes/goodJokes')
    .then(resp => {
        jokeOfTheDay = resp.data[Math.floor(Math.random() * resp.data.length)]
        res.render('pages/home', {
            title: 'My Jokes Websites',
            name: 'Jokes',
            joke: jokeOfTheDay
        })
    })

})


module.exports = router