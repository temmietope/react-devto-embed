import React from 'react'
import styles from '../styles.module.css'
import { formatDate } from '../utils'
import { Button, H3, P, PostCard, PostDate } from '../style'

const Post = ({
  post,
  itemsPerRow,
  margin,
  postHeight,
  headerSize,
  headerColor,
  headerTextTransform,
  excerptSize,
  excerptColor,
  buttonBgColor,
  buttonFontColor
}) => {
  return (
    <PostCard itemsPerRow={itemsPerRow} margin={margin} postHeight={postHeight}>
      <H3
        headerSize={headerSize}
        headerColor={headerColor}
        headerTextTransform={headerTextTransform}
      >
        <a href={post.canonical_url} target='_blank' rel='noopener noreferrer'>
          {post.title}
        </a>
      </H3>
      <PostDate>
        <span>{formatDate(post.created_at)}</span>
      </PostDate>
      <P excerptSize={excerptSize} excerptColor={excerptColor}>
        {post.description}
      </P>
      {/* <div className={styles.author}>
        by: <span>{post.user.name}</span> on
        <span>{formatDate(post.created_at)}</span>
      </div> */}
      {/* <div className={styles.postButton}>
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
      </div> */}
      <a
        href={post.canonical_url}
        target='_blank'
        rel='noopener noreferrer'
        // className={styles.readmore}
      >
        <Button buttonBgColor={buttonBgColor} buttonFontColor={buttonFontColor}>
          Read post
        </Button>
      </a>
    </PostCard>
  )
}

export default Post
