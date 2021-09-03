import React, { useState, useEffect } from 'react'
// import {Link} from 'react-router-dom'

// import { getRestaurant } from '../apis/restaurant'

const Restaurant = () => {
 //const [restaurant, setRestaurant] = useState('')
//getRestaurant()
//.then(randomChoice => setRestaurant(randomChoice))
/////////
 
  return (
    <>
      <main>
        <div className="res-container">
          <div className="res-title">
            <h2>Here's what we've got for you</h2>
          </div>
          <div className="result">
            <div className="res-name">
              <h1>"Place Name"</h1>
            </div>
            <div className="res-type">
              <h2>"Cuisine type"</h2>
            </div>
            <div className="res-address">
              <h2>"Address"</h2>
            </div>
            <div className="buttons">
              <div className="home-b">
                {/* <Link to='/'><button>Home</button></Link> */}
              </div>
              <div className="reroll-b">
                <button>Reroll</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Restaurant