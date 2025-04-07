const express = require('express')
const router = express.Router()
const axios = require('axios')

// create count
let count

axios.get('https://api.sampleapis.com/jokes/goodJokes')
    .then(res => count = res.data.length)

// localhost:3000/jokes
router.get('/', (req, res)=> {

    const url = 'https://api.sampleapis.com/jokes/goodJokes'

    axios.get(url).then(resp => {
        res.render('pages/jokes', {
            title: 'a lot of jokes',
            name: 'a lot of jokes',
            data: resp.data
        })
    })
})



module.exports = router