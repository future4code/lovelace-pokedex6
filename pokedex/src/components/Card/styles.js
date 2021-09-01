import styled from 'styled-components'

export const PokemonCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 1.5rem;
  width: 400px;
  border-radius: 15px;
  background-color: #f7d02c;
  box-shadow: 2px 2px 5px #bebebe;
  img, h3{
    cursor: pointer;
  }

`

export const InsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 1rem 0;
`

export const ButtonsCard = styled.div`
  display: flex;
`

export const PokedexButton = styled.img`
  width: 25px;
  cursor: pointer;
`

export const DetailsButton = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border-radius: 5px;
  background-color: #e5000c;
  img {
    width: 20px;
    cursor: pointer;
  }
`

export const ButtonDetail = styled.div`
  background-color: #e5000c;
  border-radius: 2px;
  width: 25px;
  height: 25px;
  padding: 5px;
  box-sizing: border-box;
`
