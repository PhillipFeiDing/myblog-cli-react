import styled from 'styled-components'
import { constants } from './store'

export const SidePanelWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
  text-align: right;
  height: 100vh;
  overflow: visible;
  pointer-events: none;
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
  pointer-events: auto;
`

export const SearchBarWrapper = styled.div`
  position: relative;
  overflow: visible;
  height: 42px;
  pointer-events: auto;
`

export const SearchIcon = styled.img.attrs({
  src: '/common/sidePanel/search.svg',
  alt: ''
})`
  opacity: 0.6;
  cursor: pointer;
  width: 35px;
  height: 35px;
  position: absolute;
  right: 5px;
  top: 2px;
  pointer-events: auto;
`

export const SearchInput = styled.input.attrs({
    placeholder: 'Enter to Search'
})`
  &.display {
    width: 300px;
    opacity: 1;
  }
  &.hidden {
    opacity: 0;
    width: 42px;
  }
  height: 100%;
  padding-left: 15px;
  border-radius: 42px;
  border: 1px solid rgba(127,140,141,0.6);
  background: #fff;
  outline: none;
  position: absolute;
  right: 0;
  transition: all 0.4s;
  color: #555;
  pointer-events: auto;
  box-shadow: 0 0 5px #95a5a6;
`

export const SettingsBox = styled.div`
  display: inline;
  position: relative;
`

export const SettingsButton = styled.img.attrs({
  src: '/common/sidePanel/settings.svg',
  alt: ''
})`
  opacity: 0.6;
  cursor: pointer;
  width: 30px;
  height: 30px;
  pointer-events: auto;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const SettingsPanel = styled.div`
  position: absolute;
  top: -40px;
  width: 250px;
  right: calc(100% + 15px);
  background: #fff;
  box-shadow: 0 0 15px #95a5a6;
  padding: 10px;
  border-radius: 5px;
  pointer-events: auto;
`

export const SettingsPanelTip = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #fff;
  position: absolute;
  left: 100%;
  top: 40px;
`

export const SettingsItem = styled.div`
  text-align: left;
  padding: 10px;
  color: #969696;
  font-size: 14px;
`

export const SettingsComponentWrapper = styled.div`
  float: right;
  position: relative;
  top: ${(props) => (props.offset)};
`

export const DropdownButtonGroupWrapper = styled.div.attrs({
  className: 'btn-group'
})``

export const DropdownButton = styled.button.attrs({
  className: 'btn btn-secondary btn-sm dropdown-toggle',
  type: 'button',
  dataToggle: 'dropdown',
  ariaHaspopup: 'true',
  ariaExpanded: 'false'
})``

export const DropdownMenu = styled.div.attrs({
  className: 'dropdown-menu'
})`
  &.showMenu {
    display: inline;
  }
  min-width: 100%;
  transform: translateX(-100%);
  left: 100%;
`

export const DropdownItem = styled.a.attrs({
  className: 'dropdown-item'
})`
  font-size: 14px;
  color: #2c3e50 !important;
`

export const ButtonGroup = styled.div.attrs({
  className: 'btn-group btn-group-sm',
  role: 'group',
  ariaLabel: 'Basic example'
})``

export const ButtonGroupButton = styled.button.attrs({
  type: 'button'
})`
  &.inactive {
    color: #969696 !important;
  }
`

export const AdminIcon = styled.img.attrs({
  src: '/common/sidePanel/admin.svg',
  alt: ''
})`
  opacity: 0.6;
  cursor: pointer;
  width: 30px;
  height: 30px;
  pointer-events: auto;
`

export const HomeButton = styled.img.attrs({
  src: '/common/sidePanel/home.svg',
  alt: ''
})`
  opacity: 0.6;
  cursor: pointer;
  width: 30px;
  height: 30px;
  pointer-events: auto;
  margin-top: 4px;
`

export const TagButton = styled.img.attrs({
  src: '/common/sidePanel/tag.svg',
  id: constants.TAG_BUTTON,
  alt: ''
})`
  opacity: 0.6;
  cursor: pointer;
  width: 30px;
  height: 30px;
  pointer-events: auto;
  margin-top: 8px;
`

export const CVButton = styled.img.attrs({
  src: '/common/sidePanel/cv.svg',
  id: constants.CV_BUTTON,
  alt: ''
})`
  opacity: 0.6;
  cursor: pointer;
  width: 30px;
  height: 30px;
  pointer-events: auto;
  margin-top: 8px;
`

export const AboutMeButton = styled.img.attrs({
  src: '/common/sidePanel/aboutMe.svg',
  id: constants.ABOUT_ME_BUTTON,
  alt: ''
})`
  opacity: 0.6;
  cursor: pointer;
  width: 30px;
  height: 30px;
  pointer-events: auto;
  margin-top: 8px;
`

export const ToTopButton = styled.img.attrs({
  src: '/common/sidePanel/toTop.svg',
  alt: ''
})`
  opacity: 0.6;
  cursor: pointer;
  width: 42px;
  height: 42px;
  position: absolute;
  right: 20px;
  bottom: 50px;
  pointer-events: auto;
`

export const Menu = styled.ul`
  margin: 0;
  background: #2c3e50;
  padding: 30px 0 0;
  width: 150px;
  height: 100%;
  overflow: auto;
  float: left;
  hr {
    border-top: 1px solid #eee;
  }
  &.hidden {
    width: 0px;
  }
  transition: all 0.2s ease-out;
  pointer-events: auto;
  box-shadow: 0 0 5px #95a5a6;
`

export const MenuTitle = styled.p`
  font-size: 14px;
  padding-left: 15%;
  line-height: 48px;
  text-align: left;
  color: #ffff00;
  margin-bottom: 0;
  pointer-events: auto;
`

export const MenuItem = styled.li`
  color: #fff;
  font-size: 12px;
  line-height: 48px;
  text-align: left;
  width: 100%;
  padding-left: 30%;
  pointer-events: auto;
`