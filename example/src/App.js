import React from 'react'

import ReactDevTo from 'react-devto-embed'

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
      headerTextTransform='capitalize'
      excerptSize='1.05rem'
      excerptColor='#333'
      buttonBgColor='linear-gradient(225deg, rgb(38, 60, 139) 0%, rgb(6, 14, 76) 100%)'
      buttonFontColor='#f2f2f2'
      buttonText='Read Post'
    />
  )
}

export default App
