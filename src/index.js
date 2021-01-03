import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
// import './styles.css'
import Post from './components/Post'

const ReactDevTo = ({ username }) => {
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
    <div>
      {loading ? (
        <div className='loading'>Loading</div>
      ) : !loading && posts && posts.length > 0 ? (
        <div className={styles.postsWrapper}>
          {posts.map((post) => {
            return <Post post={post} key={post.id} />
          })}
        </div>
      ) : (
        <div className='error__page'> Nothing to display :) </div>
      )}
    </div>
  )
}

ReactDevTo.propTypes = {
  username: PropTypes.string
}

export default ReactDevTo
