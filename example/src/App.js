import React from 'react'

import ReactDevTo from 'react-devto-embed'
// import 'react-devto-embed/dist/index.css'

const App = () => {
  const username = 'temmietope'
  return <ReactDevTo username={username} itemsPerRow={2} margin='1%' />
}

export default App
