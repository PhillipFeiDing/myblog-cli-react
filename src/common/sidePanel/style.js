import styled from 'styled-components'

export const SidePanelWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99;
  text-align: right;
  height: 100vh;
  overflow: hidden;
`

export const ToolsWrapper = styled.div`
  margin: 15px;
  height: 100%;
  float: left;
  position: relative;
  left: 0;
  top: 0;
`

export const MenuButton = styled.label`
  font-size: .8rem;
  color: #7f8c8d;
  border: 1px solid rgba(127,140,141,0.6);
  line-height: 35px;
  border-radius: 4px;
  padding: 0 15px;
  cursor: pointer;
  text-transform: uppercase;
`

export const SearchIcon = styled.img.attrs({
  src: '/common/search.svg',
  alt: ''
})`
  opacity: 0.6;
  cursor: pointer;
  width: 35px;
  height: 35px;
`

export const ToTopButton = styled.img.attrs({
  src: '/common/toTop.svg',
  alt: ''
})`
  opacity: 0.6;
  cursor: pointer;
  width: 42px;
  height: 42px;
  position: absolute;
  right: 20px;
  bottom: 50px;
`

export const Menu = styled.ul`
  margin: 0;
  background: #2c3e50;
  padding: 30px 0 0;
  width: 150px;
  height: 100%;
  overflow: auto;
  float: left;
  &.hidden {
    width: 0px;
  }
  transition: all 0.2s ease-out;
`