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
  position: relative;
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

export const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`

export const Content = styled.div.attrs({
  className: 'container'
})`
  height: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(
    to right,
    rgba(255,255,255,0.4),
    rgba(255,255,255,0.6),
    rgba(255,255,255,0.7),
    rgba(255,255,255,0.75),
    rgba(255,255,255,0.8),
    rgba(255,255,255,0.8),
    rgba(255,255,255,0.8),
    rgba(255,255,255,0.8),
    rgba(255,255,255,0.8),
    rgba(255,255,255,0.8),
    rgba(255,255,255,0.8),
    rgba(255,255,255,0.8),
    rgba(255,255,255,0.8),
    rgba(255,255,255,0.8),
    rgba(255,255,255,0.8),
    rgba(255,255,255,0.8),
    rgba(255,255,255,0.8),
    rgba(255,255,255,0.8),
    rgba(255,255,255,0.8),
    rgba(255,255,255,0.8),
    rgba(255,255,255,0.75),
    rgba(255,255,255,0.7),
    rgba(255,255,255,0.6),
    rgba(255,255,255,0.4)
  );
  box-shadow: 0 0 5px #95a5a6;
`

export const BlogListWrapper = styled.div.attrs({
  className: 'col-lg-8 col-lg-offset-1 col-md-8 col-md-offset-1'
})`
  float: left;
`

export const DashBoardWrapper = styled.div`
  float: left;
  width: 30%;
  top: 0;
  margin: 36px auto 36px auto;
  padding: 10px 25px 0 25px;
  &::-webkit-scrollbar {
    display: none;
  }
  max-height: max(90%, 90vh);
  background: rgba(236,240,241,0.8);
  box-shadow: 0 0 5px #95a5a6;
`

export const BlogList = styled.ul`
  padding-left: 0px;
  opacity: 1;
  margin: 0 auto 0 auto;
  padding: 36px 24px 2px 24px;
  list-style: none;
`

export const BlogItemWrapper = styled.li`
  padding: 10px;
  margin-bottom: 20px;
  &.hovering {
    background: #ecf0f1;
    box-shadow: 0 0 5px #95a5a6;
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
  border: 1px solid #ccd0d1;
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

export const PagingWrapper = styled.div`
  text-align: center;
  bottom: 0;
  width: 100%;
`

export const PageList = styled.ul`
  display: inline-block;
  padding: 0;
  margin: 0 auto 30px auto;
  pointer-events: auto;
`

export const PageItem = styled.li`
  display: inline-block;
  padding: 6px 0;
  box-sizing: border-box;
  font-size: 16px;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 28px;
  box-shadow: 0 0 5px #95a5a6;
  &.start {
    border-radius: 20px 0 0 20px;
    clip-path: inset(-5px 0px -5px -5px);
  }
  &.end {
    border-radius: 0 20px 20px 0;
    clip-path: inset(-5px -5px -5px 0px);
  }
  &.middle {
    clip-path: inset(-5px 0px -5px 0px);
  }
  &.active {
    cursor: pointer;
    &:hover {
      background-color: #ddd;
      color: #2c3e50;
    }
  }
  &.current {
    background: #ccc;
    color: #fff;
  }
`

export const TitleSpan = styled.span`
  line-height: 1.1;
  font-weight: 700;
  color: #808080;
`

export const TagGroup = styled.div`
  margin-top: 10px;
`

export const TagSpan = styled.span`
  display: inline-block;
  border: 1px solid rgba(255,255,255,.8);
  border-radius: 999em;
  padding: 0 10px;
  line-height: 24px;
  font-size: 12px;
  text-decoration: none;
  margin-bottom: 6px;
  margin-right: 5px;
  color: #bfbfbf;
  border-color: #bfbfbf;
  &.bold {
    font-weight: bolder;
  }
  &.current {
    color: rgb(44, 62, 80);
    background-color: rgb(206, 210, 211);
  }
  cursor: pointer;
`

export const ProfileImageWrapper = styled.div`
  margin-top: 16px;
  width: 100%;
  img {
    width: 100%;
  }
`

export const ProfileTextWrapper = styled.div`
  margin-top: 16px;
  color: ##2c3e50;
  width: 100%;
  font-size: 11px;
  p {
    line-height: 16px;
  }
`