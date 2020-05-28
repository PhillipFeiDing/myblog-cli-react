import styled from 'styled-components'

export const MainWrapper = styled.div`
  width: 100%;
  background: #fff;
  transform: translateX(0px);
  min-height: 100vh;
  transition: all 0.4s;
  position: relative;
`

export const PageHeaderImage = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  background: url(${(props) => (props.imgURL)}) no-repeat;
`

export const PageHeaderImageTitle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  top: 35vh;
  width: 100vw;
  transform: translate(-50%, 0%);
  color: #ecf011;
  font-size: 24px;
`

export const TitleLine = styled.p`
  padding-left: ${(props) => (props.paddingLeft)};
  &.italic {
    font-style: italic;
  }
  &.cursive {
    font-family: cursive;
  }
  transform: translate(-75px, 0);
  white-space: nowrap;
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

export const BlogListWrapper = styled.div`
  float: left;
  width: 65%;
  position: relative;
  &.mobile {
    width: 100%;
  }
  overflow: display;
`

export const DashBoardWrapper = styled.div`
  float: left;
  width: 35%;
  top: 0;
  padding-right: 24px;
  margin: 36px auto 16px auto;
  &::-webkit-scrollbar {
    display: none;
  }
  &.mobile {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
  }
  max-height: max(90%, 90vh);
`

export const DashBoardItemWrapper = styled.div`
  box-shadow: 0 0 5px #95a5a6;
  margin-bottom: 20px;
  padding: 10px 25px 10px 25px;
  background: rgba(236,240,241,0.8);
  box-sizing: border-box;
  &.mobile {
    &.hidden {
      display: none;
    }
    &.display {
      margin: 0 auto;
      margin-top: 36px;
      padding-top: 0;
      position: relative;
      width: 80%;
      background: rgba(236,240,241,1);
      pointer-events: auto;
      box-shadow: 0 0 15px #95a5a6;
      border: 1px solid #2c3e50;
      border-radius: 10px 10px 2px 2px;
      padding-right: 0;
    }
  }
`

export const DashBoardContentWrapper = styled.div`
  padding-top: 10px;
  &.mobile {
    padding-right: 25px;
    max-height: 85vh;
    overflow: auto;
    margin-top: 25px;
  }
`

export const MobileDashBoardNavBar = styled.div`
  width: calc(100% + 2px);
  position: absolute;
  height: 25px;
  left: -1px;
  top: -1px;
  background: #2c3e50;
  border-radius: 10px 10px 2px 2px;
`

export const CloseTabIcon = styled.img.attrs({
  src: '/home/dashboard/close.svg',
  alt: ''
})`
  height: 15px;
  padding-left: 5px;
  cursor: pointer;
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
  padding-right: 10px;
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
  cursor: 'pointer',
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
  background: #fff;
  border-radius: 13px 13px 13px 13px;
`

export const PAGING_ITEM_WIDTH = 26
export const PageItem = styled.li`
  display: inline-block;
  padding: 4px 0;
  box-sizing: border-box;
  font-size: 14px;
  width: ${PAGING_ITEM_WIDTH}px;
  height: ${PAGING_ITEM_WIDTH}px;
  text-align: center;
  line-height: 18px;
  box-shadow: 0 0 5px #95a5a6;
  &.start {
    border-radius: ${PAGING_ITEM_WIDTH / 2}px 0 0 ${PAGING_ITEM_WIDTH / 2}px;
    clip-path: inset(-5px 0px -5px -5px);
  }
  &.end {
    border-radius: 0 ${PAGING_ITEM_WIDTH / 2}px ${PAGING_ITEM_WIDTH / 2}px 0;
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
  &.tall {
    margin-bottom: 10px;
  }
  &.rect {
    border-radius: 0;
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
  color: #2c3e50;
  width: 100%;
  font-size: 11px;
  p {
    line-height: 16px;
  }
`