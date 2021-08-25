import React from 'react'
import * as S from './styles'

const Header = (props) => {
  return (
    <S.Header>
      <button onClick={props.onClickButton}>{props.buttonName}</button>
      <h1>{props.title}</h1>
      {props.button2Name && (
        <button onClick={props.onClickButton2}>{props.button2Name}</button>
      )}
    </S.Header>
  )
}

export default Header
