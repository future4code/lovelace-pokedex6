import styled from 'styled-components'

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: lightgrey;
  align-items: center;
  justify-items: center;
  padding: 0 2rem;
  button {
    :nth-child(1) {
      justify-self: flex-start;
    }
    :nth-child(3) {
      justify-self: flex-end;
    }
  }
`
