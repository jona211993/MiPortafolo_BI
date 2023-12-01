import React from 'react'
import styled from 'styled-components'

function OneSkill({imagen,nombre,alt}) {
  return (
    <ItemSkill>
        <img  src={imagen}
        alt={alt}></img>
        <h4>{nombre}</h4>
    </ItemSkill>
  )
}

export default OneSkill;
const ItemSkill=styled.div`
  width: 60%;
  height: 80%;
  font-family: 'Roboto';
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: greenyellow; */
  img{
    width: 50%;
    height: 50%;
    object-fit: contain;
    transition: transform 3s;
    
  }
  img:hover{
    transform: translateY(8px) rotate(10deg) translateY(8px) rotate(-10deg) ;
  }
  h4{
    text-align: center;
    margin-top:10px ;
  }
  
`;
