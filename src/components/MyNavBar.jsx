import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import {
  NavBarWrapper,
  NavbarContainer,
  MiIcono,
  ItemMenu,
} from "../elementsComponents/Navbar.elements";
import { AiFillCode } from "react-icons/ai";
import "boxicons";
import "../styles/navbarResponsive.css";

const BasicExample = () => {
   
  const [pulsado,setPulsado]=useState(false);

  function ManejarPulsado(){
    setPulsado(pulsado=>!pulsado);
  }
  let modo= pulsado ? ' active' : '';

  return (
    <NavbarContainer>
      <NavBarWrapper>
        <MiIcono>
          <AiFillCode size={"2em"}></AiFillCode>
          <div>
            <span>&#60;</span>
            <h2> JP </h2>
            <span>&#32;/&#32;&#62;</span>
          </div>
        </MiIcono>
        <div className={`menu${modo}`}>         
          <ItemMenu>
            <HashLink smooth to="#inicio">
              INICIO
            </HashLink>
          </ItemMenu>
          <ItemMenu>
            <HashLink smooth to="#nosotros">
              SOBRE MI
            </HashLink>
          </ItemMenu>
          <ItemMenu>
            <HashLink smooth to="#portafolio">
              PORTAFOLIO
            </HashLink>
          </ItemMenu>
          <ItemMenu>
            <HashLink smooth to="#contacto">
              CONTACTO
            </HashLink>
          </ItemMenu>          
        
        </div>
        <div className="btn-menu" onClick={ManejarPulsado}>
            <box-icon name='menu' animation='tada-hover' color="white" size="md"></box-icon>
          </div>
      </NavBarWrapper>
    </NavbarContainer>
  );
};

export default BasicExample;
