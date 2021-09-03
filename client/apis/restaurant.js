import request from 'superagent'

const baseURL = '/api/v1/restaurant'

export function getRestaurant () {
    return request
    .get(`${baseURL}`)
    .then(response => {
        console.log(response.body)
    })
}

// export const getResturant = () => {
//   return request.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-41.299575895077936,174.79645386897184&radius=5000&type=restaurant&key=${apiKey}`)
//   .then(response => {
//     console.log(response.results)
//   })
// }

