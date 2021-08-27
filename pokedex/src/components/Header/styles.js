import styled from 'styled-components'

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #263238;
  color: whitesmoke;
  align-items: center;
  justify-items: center;
  padding: 0 2rem;
  text-align: center;
  button {
    :nth-child(1) {
      justify-self: flex-start;
      border-radius: 10px;
    }
    :nth-child(3) {
      justify-self: flex-end;
      border-radius: 10px;
    }
  }
`
