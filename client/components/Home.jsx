import React, { useState, useEffect } from 'react'

import { getFruit } from '../apis/fruit'

const Home = () => {
  const [location, setLocation] = useState([])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setLocation('')
  }

  const handleChange = (evt) => {
    setName(evt.target.value)
  }

  return (
     <>
      <h1></h1>
      <form onSubmit={handleSubmit} >
        <label htmlFor='name' >Name:</label>
        <input name='name' placeholder='Name goes here' value={name} type='text' onChange={handleChange} />
        <button >Click me!</button>
      </form>
    </>
  )
}

export default Home
