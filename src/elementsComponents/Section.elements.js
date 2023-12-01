import styled from "styled-components";

export const ContainerAbout = styled.div`
  width: 100%;  
  /* background-color: violet; */
  display: grid;
  align-items: start;
  justify-content: center;   
  @media only screen and (max-width: 285px){   
    height: 1350px;   
  }
  @media only screen and (min-width: 376px) and (max-width: 425px){   
    height: 1450px;    
  }
  @media only screen and (min-width: 426px) and (max-width: 768px){   
    height: 1200px;    
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px){   
    height: 1100px;    
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px){   
    height: 1200px;    
  }
  @media only screen and (min-width: 1441px) and (max-width: 2687px){   
    height: 1200px;    
  }
 
  
`;
export const WraperAbout = styled.div`
  width: 90%;
  height: 90%;
  padding-left: 1em;
  padding-right: 1em;
  display: flex;
  align-items: start;
  justify-content: center;
  margin: auto;
  flex-direction: column;
  flex-wrap: wrap;  
  /* border: solid 5px; 
  background-color: red; */
  @media only screen and (max-width: 375px){
    grid-template-columns:auto;
    height: 1350px;   
  }
  @media only screen and (min-width: 376px) and (max-width: 425px){   
    height: 1400px;    
  }
  @media only screen and (min-width: 426px) and (max-width: 768px){   
    height: 1150px;    
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px){   
    height: 1000px;    
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px){   
    height: 1100px;    
  }
  @media only screen and (min-width: 1441px) and (max-width: 2687px){   
    height: 1150px;
  }
`;
export const TitleAbout = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;  
  /* background-color: white; */
  font-family: 'Roboto';
`;
export const ContainerContentAbout = styled.div`
  width: 100%;
  margin: auto;  
  display: flex;
  flex-direction:column ;
  align-items: start;
  flex-wrap: wrap;
  font-size: 1.2rem;
  /* border: solid 5px; 
  background-color: cyan; */
  @media only screen and (min-width: 426px) and (max-width:768px){   
    height: 1020px;    
  }
  @media only screen and (min-width: 376px) and (max-width: 425px){   
    height: 1300px;    
  }
   @media only screen and (max-width: 375px){
    height: 1270px;   
  } 
 
  
`;


