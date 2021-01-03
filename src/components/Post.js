import React from 'react'
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
  buttonFontColor,
  buttonText
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
      <a href={post.canonical_url} target='_blank' rel='noopener noreferrer'>
        <Button buttonBgColor={buttonBgColor} buttonFontColor={buttonFontColor}>
          {buttonText}
        </Button>
      </a>
    </PostCard>
  )
}

export default Post
