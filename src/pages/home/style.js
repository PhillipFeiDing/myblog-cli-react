import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background: #2c3e50;
  }
`

export const MainWrapper = styled.div`
  width: 100%;
  background: #fff;
  transform: translateX(0px);
  min-height: 100vh;
  transition: all 0.4s;
`

export const PageHeaderImage = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  background: url(${(props) => (props.imgURL)});
`

export const PageHeaderDisplayWrapper = styled.div`
  background: #ecf0f1;
  text-align: center;
  height: 30vh;
  min-height: 160px;
`

export const PageHeaderDisplay = styled.div`
  position: relative;
  top: -68px;
  &.animation-before {
    opacity: 0;
    transform: translateY(-20px);
  }
  &.animation-after {
    opacity: 1;
    transform: translateY(0px);
  }
  transition: all 0.8s ease-out;
`

export const AuthorAvatarImage = styled.div`
  opacity: 1;
  display: inline-block;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  padding: 3px;
  background: #fff;
  box-shadow: 0 0 5px #95a5a6;
  img {
    border-radius: 50%;
    width: 100%;
  }
`

export const AuthorIntroduction = styled.p`
  font-size: 18px;
  margin: 10px auto 20px auto;
`

export const ContentWrapper = styled.div.attrs({
  className: 'container'
})`
  position: relative;
  min-height: 400px;
`

export const BlogListWrapper = styled.div.attrs({
  className: 'col-lg-8 col-lg-offset-1 col-md-8 col-md-offset-1'
})``

export const BlogList = styled.ul`
  padding-left: 0px;
  opacity: 1;
  margin: 72px auto 0 auto;
  padding: 2px 24px;
  list-style: none;
`

export const BlogItemWrapper = styled.li`
  padding: 10px;
  margin-bottom: 20px;
  &.hovering {
    background: #eee;
  }
`

export const BlogDateDisplay = styled.p`
  font-weight: bold;
  margin: 0;
  text-align: right;
  font-size: 14px;
`
export const BlogTitleDisplay = styled.p`
  line-height: 1.5;
  margin: 0 0 10px 0;
  font-weight: bolder;
  font-size: 18px;
`

export const BlogExerptWrapper = styled.div`
  font-size: 1.2rem;
  color: #7f8c8d;
  line-height: 1.5;
  margin: 0;
  height: 110px;
  position: relative;
  left: 0;
  top: 0;
  overflow: display;
  &.mouseIn {
    p {
      width: 70%;
    }
    div {
      width: 30%;
    }
  }
  &.mouseOut {
    p {
      width: 100%;
    }
    div {
      width: 0%;
    }
  }
`

export const BlogExerptText = styled.p`
  float: left;
  font-size: 11px;
  color: #7f8c8d;
  line-height: 1.5;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  transition: 0.2s all ease-out;
`

export const BlogExerptImageWrapper = styled.div`
  flat: left;
  overflow: hidden;
  transition: 0.2s all ease-out;
  height: 100%;
  text-align: center;
`

export const BlogExerptImage = styled.img`
  padding-left: 10px;
  height: 100%;
`

export const BlogMetaList = styled.ul`
  margin-top: 20px;
  border: 1px solid #ecf0f1;
  border-width: 1px 0 0 0;
  padding: 22px 10px;
  font-size: 9px;
  color: #7f8c8d;
  list-style: none;
`

export const BlogMetaListItem = styled.li`
  margin-right: 22px;
  display: inline-block;
`

export const linkStyle = {
  color: '#2c3e50',
  cursor: 'pointer'
}