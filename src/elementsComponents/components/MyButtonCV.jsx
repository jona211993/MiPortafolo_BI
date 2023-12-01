import { styled } from "styled-components"


function MyButtonCV() {
  
  return (
    <EstiloBoton>
        <a href="https://drive.google.com/file/d/14iv1QZn_e4PVrHoRwes50oG2fSDrKb0t/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        Descargar CV
        </a>
    </EstiloBoton>
  )
}

export default MyButtonCV

const EstiloBoton= styled.button`
    background-color: blue;
    border: 2px solid darkblue;
    border-radius: 5px;    
    padding: 10px;
    box-shadow: 5px 5px 5px 0px lightgrey;
    a{
      color: white;
      text-decoration: none;
      font-family: "Roboto";
      font-size: medium;
      font-weight: 600;
    }
    &:hover{
      background-color: white;
      a{
        color: blue;
      }
    }
    &:active{
      a{color: #9b2814;
      background-color: white;}
    }
   
`;