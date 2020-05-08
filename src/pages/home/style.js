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