# react-devto-embed

> react dev-dot-to embed easily for any project. Very customizable!

[![NPM](https://img.shields.io/npm/v/react-devto-embed.svg)](https://www.npmjs.com/package/react-devto-embed) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-devto-embed
```

## Usage

```jsx
import React from 'react'
import ReactDevTo from 'react-devto-embed'

const App = () => {
  const username = 'temmietope'
  return <ReactDevTo username={username} />
}
```

### Props

| Props                   | Description                  | Type   | Default value                                                       | options                                                                                           |
| ----------------------- | ---------------------------- | ------ | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **username**            | dev.to username              | String | -                                                                   | username on dev.to                                                                                |
| **itemsPerRow**         | Number of posts on a row     | Number | 2                                                                   | 1,2,3,4                                                                                           |
| **postHeight**          | Height of individual post    | String | '15rem'                                                             | Desired height in _px_, _rem_, _vh_ etc                                                           |
| **margin**              | Margin around post           | String | '1%'                                                                | Desired margin in _px_, _rem_, etc                                                                |
| **headerSize**          | Font size of post header(h3) | String | '2rem'                                                              | Desired font-size in _px_, _rem_, etc. Note that at screen size of below 768px, this is neglected |
| **headerColor**         | Color of post header(h3)     | String | '#333'                                                              | Desired color in _rgba_, _hex_, etc.                                                              |
| **headerTextTransform** | Text transform of Header     | String | 'capitalize'                                                        | 'capitalize', 'uppercase', 'lowercase'                                                            |
| **exceptSize**          | Font size of post excerpt(p) | String | '1.05rem'                                                           | Desired font-size in _px_, _rem_, etc. Note that at screen size of below 768px, this is neglected |
| **excerptColor**        | Color of post excerpt(p)     | String | '#333'                                                              | Desired color in _rgba_, _hex_, etc.                                                              |
| **buttonBgColor**       | Color of post button(button) | String | 'linear-gradient(225deg, rgb(38, 60, 139) 0%, rgb(6, 14, 76) 100%)' | Desired color in _rgba_, _hex_, etc.                                                              |
| **buttonFontColor**     | Color of post button(button) | String | '#f2f2f2'                                                           | Desired color in _rgba_, _hex_, etc.                                                              |
| **buttonText**          | Text on post button          | String | 'Read Post'                                                         | Desired text on button                                                                            |
| **loadingMessage**      | Loading message              | String | 'Loading'                                                           | Desired loading message                                                                           |
| **errorMessage**        | Error message                | String | 'Nothing to display'                                                | Desired error message                                                                             |

### Example Usage with various props

```jsx
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
      loadingMessage='Loading'
      errorMessage='Nothing to display :)'
    />
  )
}
```

## License

MIT © [temmietope](https://github.com/temmietope)
