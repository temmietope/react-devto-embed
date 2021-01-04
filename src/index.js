import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Post from './components/Post'
import { PostsContainer, PostsWrapper } from './style'

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
  return (
    <PostsWrapper>
      {loading ? (
        <div className='loading'>{loadingMessage}</div>
      ) : !loading && posts && posts.length > 0 ? (
        <PostsContainer>
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
        </PostsContainer>
      ) : (
        <div className='error__page'> {errorMessage} </div>
      )}
    </PostsWrapper>
  )
}

ReactDevTo.propTypes = {
  username: PropTypes.string
}

export default ReactDevTo
