import styled, { css } from 'styled-components'

export const PostsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const PostsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    flex-flow: column;
    flex-wrap: no-wrap;
  }
`

export const PostCard = styled.div`
  height: ${(props) => (props.postHeight ? props.postHeight : '20rem')};
  border-radius: 10px;
  padding: 1.5% 2%;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 35% 10% 40% 15%;
  margin-bottom: 1rem;
  width: 100%;
  margin: ${(props) => (props.margin ? `${props.margin} 0` : '1% 0')};
  ${(props) => {
    const validInts = [1, 2, 3, 4]
    return (
      validInts.includes(props.itemsPerRow) &&
      css`
        width: calc(
          ((1 / ${props.itemsPerRow}) * 100%) -
            ${props.margin ? props.margin : '1%'}
        );
      `
    )
  }}
  box-shadow: 0 0 1px 0 rgba(0,0,0,0.6);
  a {
    text-decoration: none;
    color: inherit;
  }
  @media screen and (max-width: 900px) {
    height: ${(props) => (props.postHeight ? props.postHeight : '20rem')};
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-flow: column;
    height: 100%;
  }
`

export const H3 = styled.h3`
  font-size: ${(props) => (props.headerSize ? props.headerSize : '1.5rem')};
  max-height: 100%;
  line-height: 110%;
  text-transform: ${(props) =>
    props.headerTextTransform ? props.headerTextTransform : 'capitalize'};
  margin: 0;
  padding: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: ${(props) => (props.headerColor ? props.headerColor : '#333')};
  a:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
    margin: 1% 0;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.05rem;
  }
`

export const P = styled.p`
  font-size: ${(props) => (props.excerptSize ? props.excerptSize : '1.05rem')};
  color: ${(props) => (props.excerptColor ? props.excerptColor : '#333')};
  margin: 2% 0;
  @media screen and (max-width: 768px) {
    font-size: 0.95rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.85rem;
  }
`

export const PostDate = styled.div`
  text-align: right;
  font-size: 0.7rem;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 500px) {
    font-size: 0.5rem;
  }
`

export const Button = styled.button`
  cursor: pointer;
  padding: 2% 5%;
  box-sizing: border-box;
  background: ${(props) =>
    props.buttonBgColor
      ? props.buttonBgColor
      : 'linear-gradient(225deg, rgb(38, 60, 139) 0%, rgb(6, 14, 76) 100%);'};
  color: ${(props) => (props.buttonFontColor ? props.buttonFontColor : '#fff')};
  font-weight: 700;
  border: none;
  outline: none;
  border-radius: 5px;
  a {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    padding: 1.5% 3%;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`
