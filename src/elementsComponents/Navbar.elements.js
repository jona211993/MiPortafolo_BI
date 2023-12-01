import styled from "styled-components";
export const NavbarContainer = styled.div`
  width: 100%;
  height: 100%;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: #1c2833;
`;

export const NavBarWrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1300px;
  height: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  .btn-menu{
    @media (min-width: 590px) {
    display: none;
  }
  }
`;
export const MiIcono = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.2rem;
  color: #f4f6f7;
  div {
    color: #1f5fb8;
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    font-family: "Roboto";
  }
  div > h2 {
    color: white;
    font-family: "Roboto";
  }
`;

// export const Menu = styled.div`
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   div>a{
//     display: block;
//   }
  
//   @media (max-width: 590px) {
//     position: absolute; 
//     top: -700px;
//     left: -2000px; 
//     margin-left: auto;
//     margin-right: auto;
//   }

//   .active{
//     width: 100%;
//     height: 100%;
//     display: block;
//     position: initial;
//     margin-left: auto;
//     margin-right: auto;
//     text-align: center;
//     top: 0%;
//     left: 0;
//     right: 0;
//     background-color: brown;

//   }
  
// `;
export const ItemMenu = styled.div`
  height: 100%;
  padding: 0%.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: end; 

  font-size: 1.2rem;
  font-weight: 400;
  font-family: "Candara";
  a {
    text-decoration: none;
    color: white;  }
  a:hover{
    color: blue;
  }
`;
