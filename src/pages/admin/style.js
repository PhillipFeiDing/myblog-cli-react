import styled from 'styled-components'

export const AdminWrapper = styled.div`
  min-height: 100vh;
  background: #fff;
  position: relative;
  background: #fafafa;
  color: #2c3e50;
`

export const LoginWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85vw;
  max-width: 400px;
  border-radius: 3px;
`

export const consoleTitleStyle = {
  textAlign: 'center', 
  padding: '20px 0 0 0'
}

export const consoleContentWrapperStyle = {
  position: 'relative',
  overflow: 'hidden', 
  textAlign: 'center'
}

export const moduleStyle = {
  background: '#ccc',
  border: '#999 solid 1px',
  borderRadius: '10px',
  margin: '20px',
  boxShadow: '0 0 15px #777',
  padding: '10px',
  maxHeight: '85vh'
}

export const minorModuleStyle = {
  width:'min(400px, 85vw)',
  height: '400px',
  display: 'inline-block',
  overflow: 'hidden',
  textAlign: 'left'
}

export const majorModuleStyle = {
  width:'min(840px, 85vw)',
  overflow: 'hidden',
  display: 'inline-block',
  textAlign: 'left'
}

export const subTitleStyle = {
  textAlign: 'center',
  padding: '10px 0 15px 0',
  lineHeight: '18px',
  fontSize: '18px',
  margin: '0'
}

export const minorModuleInputButtonStyle = {
  borderRadius: '0 .2rem .2rem 0', 
  border: '1px solid #ced4da', 
  borderLeft: 'none'
}

export const minorModuleListStyle = {
  overflow: 'auto', 
  maxHeight: '76%', 
  fontSize: '14px'
}

export const minorModuleListItemContentSpanStyle = {
  display: 'inline-block',
  overflow: 'auto',
  whiteSpace: 'nowrap',
  cursor: 'cell'
}

export const minorModuleListItemIconSpanStyle = {
  padding: '0',
  position: 'relative',
  height: '14px', 
  width: '14px', 
  background: '#ffffff',
  cursor: 'pointer'
}

export const bottomButtonWrapperStyle = {
  overflow: 'hidden',
  width: 'min(85vw, 840px)',
  display: 'inline-block',
  textAlign: 'center',
  paddingTop: '20px',
  paddingBottom: '50px'
}

export const tableHeaderStyle = {
  position: 'sticky',
  top: '0',
  border: '0'
}

export const tagSelectStyle = {
  transform: 'scale(1.82,1.82) translate(0,2.5%)',
  marginRight: '10px',
  marginLeft: '10px',
  cursor: 'pointer'
}