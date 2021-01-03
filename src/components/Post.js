import React from 'react'
import styles from '../styles.module.css'
import { formatDate } from '../utils'
import { PostCard } from '../style'

const Post = ({ post, itemsPerRow, margin }) => {
  return (
    <PostCard itemsPerRow={itemsPerRow} margin={margin}>
      <h3>
        <a href={post.canonical_url} target='_blank' rel='noopener noreferrer'>
          {post.title}
        </a>
      </h3>
      <p>{post.description}</p>
      <div className={styles.author}>
        by: <span>{post.user.name}</span> on
        <span>{formatDate(post.created_at)}</span>
      </div>
      <div className={styles.postButton}>
        <button>
          <a
            href={post.canonical_url}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.readmore}
          >
            Read post
          </a>
        </button>
      </div>
    </PostCard>
  )
}

export default Post
