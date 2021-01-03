import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Post from './components/Post'
import { PostsContainer, PostsWrapper } from './style'

const ReactDevTo = ({ username, itemsPerRow, margin }) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=${username}`)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false)
        setPosts(res)
        console.log(res)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])
  return (
    <PostsWrapper>
      {loading ? (
        <div className='loading'>Loading</div>
      ) : !loading && posts && posts.length > 0 ? (
        <PostsContainer>
          {posts.map((post) => {
            return (
              <Post
                post={post}
                key={post.id}
                itemsPerRow={itemsPerRow}
                margin={margin}
              />
            )
          })}
        </PostsContainer>
      ) : (
        <div className='error__page'> Nothing to display :) </div>
      )}
    </PostsWrapper>
  )
}

ReactDevTo.propTypes = {
  username: PropTypes.string
}

export default ReactDevTo
