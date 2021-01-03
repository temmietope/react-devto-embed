import styled, { css } from 'styled-components'

export const PostsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const PostsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const PostCard = styled.div`
  height: 15rem;
  max-height: 15rem;
  border-radius: 10px;
  padding: 0.8rem 1rem;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 100%;
  /* margin: 1% 0; */
  margin: ${(props) => (props.margin ? `${props.margin} 0` : '1% 0')};
  ${(props) => {
    const validInts = [1, 2, 3, 4]
    return (
      validInts.includes(props.itemsPerRow) &&
      css`
        /* width: calc(((1 / ${props.itemsPerRow}) * 100%) - 1%); */
        width: calc(((1 / ${props.itemsPerRow}) * 100%) - ${props.margin? props.margin: '1%'});
      `
    )
  }}
  box-shadow: 0 0 1px 0 rgba(0,0,0,0.6)
`
