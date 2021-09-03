const request = require ('superagent')

const express = require('express')
const router = express.Router()

require('dotenv').config()

const apiKey = process.env.API_KEY

// GET /api/v1/restaurant/
router.get('/', (req, res) => {
})

// GET /api/v1/restaurant/restaurant

router.get('/restaurant', (req, res) => {
  return request.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-41.299575895077936,174.79645386897184&opennow&radius=5000&type=meal_takeaway&type=meal_delivery&key=${apiKey}`)
    .then(response => {
      return res.json(response.body)
    })
})






module.exports = router