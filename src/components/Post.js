import React from 'react'
import styles from '../styles.module.css'
import { formatDate } from '../utils'
import { H3, P, PostCard } from '../style'

const Post = ({
  post,
  itemsPerRow,
  margin,
  headerSize,
  headerColor,
  excerptSize,
  excerptColor
}) => {
  return (
    <PostCard itemsPerRow={itemsPerRow} margin={margin}>
      <H3 headerSize={headerSize} headerColor={headerColor}>
        <a href={post.canonical_url} target='_blank' rel='noopener noreferrer'>
          {post.title}
        </a>
      </H3>
      <P excerptSize={excerptSize} excerptColor={excerptColor}>
        {post.description}
      </P>
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
