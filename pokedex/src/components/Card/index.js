import React from "react";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import DetailsIcon from "../../img/details_icon.svg";
import PokedexIcon from "../../img/pokedex_icon.svg";

const Card = ({ pokemon, addPokemon, buttonName }) => {
  const {} = React.useContext(GlobalContext);

  const history = useHistory();
  const goToDetails = () => {
    history.push(`/pokemon/${pokemon.name}`);
  };
  return (
    <S.PokemonCard>
      <div>
        <h3 onClick={goToDetails}>{pokemon?.name}</h3>
        <div>
          <S.CardButton src={PokedexIcon} onClick={() => addPokemon(pokemon)} atl='Adicionar a Pokédex' />
          <S.ButtonDetail>
          <S.CardButton
            src={DetailsIcon}
            alt="Detalhes do Pokémon"
            onClick={goToDetails}
          />
          </S.ButtonDetail>
        </div>
      </div>
      <img src={pokemon?.img.front} alt={pokemon?.name} onClick={goToDetails} />
    </S.PokemonCard>
  );
};

export default Card;
