import styled from 'styled-components'

export const PokemonGrid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
justify-items: center;
/* max-width:1250px; */
/* margin: 0 auto; */

@media (max-width: 1250px) {
  grid-template-columns: repeat(3, 1fr);
  max-width:940px;
  
}
@media (max-width: 960px) {
  grid-template-columns: repeat(2, 1fr);
  max-width:620px;
}
@media (max-width: 640px) {
  grid-template-columns: 1fr;
}

`
