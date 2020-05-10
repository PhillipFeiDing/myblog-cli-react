import styled from 'styled-components'

export const ParticlesWrapper = styled.div`
  &.normal {
    position: absolute;
  }
  &.sticky {
    position: sticky;
  }
  top: ${(props) => (props.offsetTop + 'px')};
  height: 100vh;
  width: 100%;
  transition: all 0.5s ease-in;
`