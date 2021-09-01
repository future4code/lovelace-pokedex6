import styled from 'styled-components'

export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
  }
`
export const Home = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`
