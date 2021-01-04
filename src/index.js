import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Post from './components/Post'
import { useMediaQuery } from './utils/useMediaQuery'

const ReactDevTo = ({
  username,
  itemsPerRow,
  postHeight,
  margin,
  headerSize,
  headerColor,
  headerTextTransform,
  excerptSize,
  excerptColor,
  buttonBgColor,
  buttonFontColor,
  buttonText,
  errorMessage,
  loadingMessage
}) => {
  const smallScreen = useMediaQuery('(max-width: 768px)')
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=${username}`)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false)
        setPosts(res)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])
  const styles = {
    postWrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    postContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      flexDirection: smallScreen ? 'column' : 'row',
      flexWrap: smallScreen ? 'no-wrap' : 'wrap'
    }
  }

  return (
    <div style={styles.postWrapper}>
      {loading ? (
        <div className='loading'>{loadingMessage}</div>
      ) : !loading && posts && posts.length > 0 ? (
        <div className='container' style={styles.postContainer}>
          {posts.map((post) => {
            return (
              <Post
                post={post}
                key={post.id}
                itemsPerRow={itemsPerRow}
                postHeight={postHeight}
                margin={margin}
                headerSize={headerSize}
                headerColor={headerColor}
                headerTextTransform={headerTextTransform}
                excerptSize={excerptSize}
                excerptColor={excerptColor}
                buttonBgColor={buttonBgColor}
                buttonFontColor={buttonFontColor}
                buttonText={buttonText}
              />
            )
          })}
        </div>
      ) : (
        <div className='error__page'> {errorMessage} </div>
      )}
    </div>
  )
}

ReactDevTo.propTypes = {
  username: PropTypes.string,
  itemsPerRow: PropTypes.number,
  postHeight: PropTypes.string,
  margin: PropTypes.string,
  headerSize: PropTypes.string,
  headerColor: PropTypes.string,
  headerTextTransform: PropTypes.string,
  excerptSize: PropTypes.string,
  excerptColor: PropTypes.string,
  buttonBgColor: PropTypes.string,
  buttonFontColor: PropTypes.string,
  buttonText: PropTypes.string,
  errorMessage: PropTypes.string,
  loadingMessage: PropTypes.string
}

export default ReactDevTo
