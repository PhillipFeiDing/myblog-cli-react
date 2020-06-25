import styled from 'styled-components'

export const MainWrapper = styled.div`
  transform: translateX(0);
  min-height: 100vh;
  transition: all 0.4s;
  background: #fff;
`

export const HeaderWrapper = styled.div.attrs({
  className: 'jumbotron'
})`
  text-align: center;
  background-color: #ecf0f1;
  margin-bottom: 0;
  border-radius: 0;
`

export const TitleDisplay = styled.h1`
  font-size: 48px;
`

export const TimeDisplay = styled.p``

export const ContainerWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`

export const Container = styled.div.attrs({
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
  padding-left: 3%;
  padding-right: 3%
`

export const Content = styled.div.attrs({
  className: 'gitment-markdown',
})`
  padding-top: 50px;
  padding-bottom: 50px;
`

export const TagList = styled.div`
  margin-top: 40px;
  text-align: center;
`

export const Tag = styled.span`
  display: inline-block;
  margin-right: 10px;
  font-size: 13px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  background-color: transparent;
  color: #555;
  text-decoration: none;
  outline: none;
  border-bottom: 1px solid #999;
  cursor: pointer;
`

export const Like = styled.span`
  float: right;
  cursor: pointer;
  display: block;
`

export const LikeImage = styled.img.attrs({
  alt: ''
})`
  height: 20px;
  width: 20px;
  float: left;
  margin-right: 5px;
  transform: translate(0, 1px);
`