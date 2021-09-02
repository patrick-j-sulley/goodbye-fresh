import request from 'superagent'

// require('dotenv').config()

// const apiKey = process.env.API_KEY

export const getResturant = () => {
  return request.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-41.299575895077936,174.79645386897184&radius=5000&type=restaurant&key=API_KEY')
  .then(response => {
    console.log(response.results)
  })
}

