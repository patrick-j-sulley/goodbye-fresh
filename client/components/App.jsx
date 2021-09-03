import React from 'react'

import Home from './Home'
import Restaurant from './Restaurant'


const App = () => {
  return (
    <>    
      <Route path='/restaurant' component={Restaurant} />
      <Route exact path='/' component={Home} />
    </>
  )
}

export default App


{/* <Route exact path='/' component={variable} /> */}
