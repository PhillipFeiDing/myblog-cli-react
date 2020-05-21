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
  padding: '10px'
}

export const minorModuleStyle = {
  width:'min(300px, 85vw)',
  height: 'min(300px, 85vw)',
  display: 'inline-block',
  overflow: 'hidden',
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
  maxHeight: '68%', 
  fontSize: '14px'
}

export const minorModuleListItemSpanStyle = {
  padding: '0',
  position: 'relative',
  height: '14px', 
  width: '14px', 
  background: '#ffffff',
  cursor: 'pointer'
}