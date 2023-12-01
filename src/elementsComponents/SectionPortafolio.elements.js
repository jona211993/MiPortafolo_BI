import styled from 'styled-components'
export const ContainerPortafolio = styled.div`
  width: 100%;  
  margin:auto;
  /* background-color: purple; */
  top: 0;
  @media screen and (max-width: 375px )  {      
        height:3100px ;       
    }

  
`;
export const WraperPortafolio = styled.div`
  margin: auto;
  width: 90%;  
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  align-items: center;  
  flex-wrap: wrap;
  justify-content: center;
  /* border: solid 1px;  */
  /* background-color: greenyellow;   */
  @media screen and (max-width: 375px )  {   
      height:2880px ;
       
    }

`;
export const TitlePortafolio = styled.div`
  width: 100%;
  align-items: start;
  display: flex;
  flex-direction :column ;
  /* background-color: white; */
  font-family: 'Roboto';
  h3{
    font-weight:500;
    margin: 1em;
  }
`;
export const ContainerContentPortafolio = styled.div`
  width: 100%;  
  display: flex;  
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  font-size: 1.2rem;
  /* background-color: blue; */

`;