import React from 'react'
import { formatDate } from '../utils/formatDate'
import { useMediaQuery } from '../utils/useMediaQuery'
import PropTypes from 'prop-types'

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
  const mediumScreen = useMediaQuery('(max-width: 950px)')
  const smallScreen = useMediaQuery('(max-width: 768px)')
  const smallerScreen = useMediaQuery('(max-width: 500px)')

  const validInts = [1, 2, 3, 4]
  const styles = {
    a: {
      textDecoration: 'none',
      color: 'inherit'
    },

    postCard: {
      height: postHeight ? (smallScreen ? '100%' : postHeight) : '20rem',
      borderRadius: '10px',
      padding: '1.5% 2%',
      boxSizing: 'border-box',
      display: smallScreen ? 'flex' : 'grid',
      flexFlow: smallScreen && 'column',
      gridTemplateRows: '35% 10% 40% 15%',
      marginBottom: '1rem',
      margin: margin ? `${margin} 0` : '1% 0',
      boxShadow: '0 0 1px 0 rgba(0,0,0,0.6)',
      width:
        validInts.includes(itemsPerRow) && !smallScreen
          ? `calc(((1 / ${itemsPerRow}) * 100%) - ${margin ? margin : '1%'})`
          : '100%'
    },

    postHeader: {
      fontSize: headerSize
        ? mediumScreen
          ? '1.2rem'
          : smallScreen
          ? '1.25rem'
          : smallerScreen
          ? '1.05rem'
          : headerSize
        : '1.5rem',
      color: headerColor ? headerColor : '#333',
      maxHeight: '100%',
      lineHeight: '110%',
      textTransform: headerTextTransform ? headerTextTransform : 'capitalize',
      margin: smallScreen ? '1% 0' : '0',
      padding: '0',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: '2'
    },

    postExcerpt: {
      fontSize: excerptSize
        ? smallScreen
          ? '0.95rem'
          : smallerScreen
          ? '0.85rem'
          : excerptSize
        : '1.05rem',
      color: excerptColor ? excerptColor : '#333',
      margin: '2% 0'
    },

    postDate: {
      textAlign: 'right',
      fontSize: smallerScreen ? '0.5rem' : '0.7rem',
      margin: '0',
      padding: '0'
    },

    postButton: {
      cursor: 'pointer',
      padding: smallScreen ? '1.5% 3%' : '2% 5%',
      boxSizing: 'border-box',
      background: buttonBgColor
        ? buttonBgColor
        : 'linear-gradient(225deg, rgb(38, 60, 139) 0%, rgb(6, 14, 76) 100%)',
      color: buttonFontColor ? buttonFontColor : '#fff',
      fontWeight: '700',
      border: 'none',
      outline: 'none',
      borderRadius: '5px',
      fontSize: smallerScreen ? '0.7rem' : '0.9rem'
    }
  }
  return (
    <div style={styles.postCard}>
      <h3 style={styles.postHeader}>
        <a
          href={post.canonical_url}
          target='_blank'
          rel='noopener noreferrer'
          style={styles.a}
        >
          {post.title}
        </a>
      </h3>
      <div style={styles.postDate}>
        <span>{formatDate(post.created_at)}</span>
      </div>
      <p style={styles.postExcerpt}>{post.description}</p>
      <a
        href={post.canonical_url}
        target='_blank'
        rel='noopener noreferrer'
        style={{ width: '100%' }}
      >
        <button style={styles.postButton}>{buttonText}</button>
      </a>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object,
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
  buttonText: PropTypes.string
}

export default Post
