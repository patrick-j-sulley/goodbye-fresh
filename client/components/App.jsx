import React from 'react'
import {Route} from 'react-router-dom'

import Home from './Home'
import Restaurant from './Restaurant'


const App = () => {
  return (
    <>    
      {/* the routes for our user */}
      <Route path='/restaurant' component={Restaurant} />
      <Route exact path='/' component={Home} />
    </>
  )
}

export default App

