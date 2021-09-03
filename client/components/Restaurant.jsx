import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

import { getRestaurant } from '../apis/restaurant'

const Restaurant = () => {
  const [randomRestaurant, setRandomRestaurant] = useState({})

  useEffect(() => {
    getRandomRestaurant()
  }, [])

  const getRandomRestaurant = () => {
  getRestaurant()
    .then(restaurants => {
      console.log(restaurants.results)
      setRandomRestaurant(restaurants.results[getRandom(restaurants.results.length)])
    })
    
}

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

  return (
    <>
      <main>
        <div className="res-container">
          <div className="res-title">
            <h2>Here's what we've got for you</h2>
          </div>
          <div className="result">
            <div className="res-name">
              <h1>{randomRestaurant.name}</h1>
            </div>
            <div className="res-type">
              <h2>Rating: {randomRestaurant.rating}</h2>
            </div>
            <div className="res-address">
              <h2>{randomRestaurant.vicinity}</h2>
            </div>
            <div className="buttons">
              <div className="home-b">
                <Link to='/'><button>Home</button></Link>
              </div>
              <div className="reroll-b">
                {/* <button onClick={randomiserFunction}>Reroll</button> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Restaurant