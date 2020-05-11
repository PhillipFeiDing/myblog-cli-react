import styled from 'styled-components'

export const FooterWrapper = styled.div`
  text-align: center;
  background: #2c3e50;
  padding: 50px 15px;
  width: 100%;
  position: relative;
  z-index: 100;
`

export const IconGroupWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
  align-items: center;
`

export const IconWrapper = styled.div`
  padding-inline-start: 0;
  margin: 0;
`

export const IconLink = styled.a.attrs({
  target: '_blank'
})`
  text-decoration: none;
  color: #34495e;
`

export const IconImage = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  margin-right: 10px;
`

export const BarCodeImage = styled.img`
  width: 130px;
  position: absolute;
  left: calc(50% - 65px);
  top: -130px;
  transition: all 0.3s ease 0s;
  box-shadow: rgb(149, 165, 166) 0px 0px 5px;
  &.hidden {
    transform: translateY(-20px);
    z-index: -1;
    opacity: 0;
  }
  &.display {
    transform: translateY(0px);
    z-index: 99;
    opacity: 1;
  }
  pointer-events: none;
`

export const FooterNoteWrapper = styled.div`
  padding-top: 30px;
  color: #ffffff;
`

export const FooterLink = styled.a.attrs({
  target: '_blank'
})`
  color: #7fffd4 !important;
  border-bottom: 1px solid #79f8d4;
`