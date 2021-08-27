import styled from "styled-components"

export const PokemonCard = styled.div`
display: flex;
border: 1px solid black;
align-items: center;
margin: 5px;
padding: 1.5rem;
background-color: #F7D02C ;
justify-content: space-between;
width: 250px;

`
export const CardButton = styled.img`
width: 25px;
cursor: pointer;
:nth-child(2){
    width: 15px;
}

`
export const CardButtons = styled.div`
display: flex;
`
export const ButtonDetail = styled.div`
background-color: #E5000C;
border-radius: 2px ;
width: 25px;
height: 25px;
padding: 5px;
box-sizing: border-box;
`