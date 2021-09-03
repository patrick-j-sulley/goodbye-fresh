import React, { useState, useEffect } from 'react'



const Home = () => {
  // const [location, setLocation] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setLocation(evt.target)
    //redirect to restaurant route?
      //.then() Render restaunt.jsx having been passed location
  }

  const handleChange = (evt) => {
    setLocation(evt.target.value)
  }

  return (
    <>
      <main>
        <div className="app-container">
          <div className="title-container">
            <h1 className="gb">Goodbye</h1>
            <h1 className="fr">FRESH</h1>
          </div>
          <div className="blurb">
            <p>Choosing is choir</p>
            <p>Picking is painful</p>
          </div>
          <div className="widget-container">
            <div className="widget-blurb">
              <h2>Give us the city you want to order in and we'll do the hard part</h2>
            </div>
            <form onSubmit={handleSubmit} >
              <input type="text" id="city-input" name="city-input" onChange={handleChange} /><br></br>
              <input type="submit" value="Get me food" />
            </form>
            <div className="author">
              <a href="https://github.com/roa-2021/Ravenclaw">Made by Ravenclaw @ Github</a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
