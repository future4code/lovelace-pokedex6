import styled from 'styled-components'

export const Header = styled.header`
  display: grid;
  margin-bottom: 15px;
  width: 100%;
  grid-template-columns: 1fr 3fr 1fr;
  background-color: #263238;
  color: whitesmoke;
  align-items: center;
  justify-items: center;
  padding: 1rem 2rem;
  text-align: center;
  button {
    padding: 10px 20px;
    
    :nth-child(1) {
      justify-self: flex-start;
      border-radius: 10px;
    }
    :nth-child(2) {
      justify-self: center;
    }
    :nth-child(3) {
      justify-self: flex-end;
      border-radius: 10px;
    }
  }
`
