import React from 'react'

import ReactDevTo from 'react-devto-embed'
// import 'react-devto-embed/dist/index.css'

const App = () => {
  const username = 'temmietope'
  return (
    <ReactDevTo
      username={username}
      itemsPerRow={2}
      postHeight='15rem'
      margin='1%'
      headerSize='2rem'
      headerColor='#333'
      headerTextTransform='uppercase'
      excerptSize='1.05rem'
      excerptColor='#333'
      buttonBgColor='linear-gradient(225deg, rgb(38, 60, 139) 0%, rgb(6, 14, 76) 100%)'
      buttonFontColor='white'
    />
  )
}

export default App
