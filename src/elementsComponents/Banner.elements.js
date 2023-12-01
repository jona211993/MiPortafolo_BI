import styled from "styled-components";
export const BannerContainer = styled.div`
  background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)), url("https://images.pexels.com/photos/669616/pexels-photo-669616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");  
  width: 100%;
  height: 400px;
  background-position: center;
  background-size: cover;
`;
export const BannerWraper = styled.div`
  margin: auto;
  width: 100%;  
  height: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: solid 1px;
`;

export const Foto=styled.div`
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
  background-image: url("https://i.postimg.cc/7hWY8DFc/foto-perfil.jpg");
  background-size: cover; 
  border-radius: 50%;
  margin: 30px; 
`;

export const MiTitulo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-size: 1.2rem;
    font-family: 'Roboto';
    color: #F4F6F7;

    h1{
        color: white;
    }
    h2{
        color: yellow;
    }
    h3{
        color: yellow;
    }

`;
