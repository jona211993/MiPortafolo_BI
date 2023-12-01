import styled from "styled-components";
import MyButtonCV from "./MyButtonCV";
const Resume = () => {
  return (
    <>
      <ResumeAbout>
        <h2>¿Quién soy yo?</h2>
        <br />
        <h3>Soy Jonatan Pacora - Junior BI</h3>
        <span>
          Egresado de la Universidad Nacional Mayor de San Marcos en la carrera
          de Ingenieria de Sistemas.
        </span>
        <br />
        <br />
        <p>
          Soy un practicante apasionado de Business
          Intelligence con habilidades en Excel, Power BI básico y SQL
          intermedio. Mi experiencia incluye el desarrollo de informes
          detallados y la participación activa en proyectos académicos de BI.
          Destaco por la creación de visualizaciones claras y significativas que
          simplifican la interpretación de datos complejos. Mi enfoque se centra
          en la excelencia en cada proyecto, contribuyendo con soluciones
          efectivas.
        </p>
        <br />
        <MyButtonCV></MyButtonCV>
      </ResumeAbout>
    </>
  );
};
export default Resume;
const ResumeAbout = styled.div`
  width: 100%;
  height: 400px;
  font-family: "Roboto";
  text-align: justify;
  line-height: 1.5;
  /* background-color: #2b69b1; */
  @media only screen and (max-width: 375px) {
    height: 500px;
    h2 {
      text-align: center;
    }
    p {
      font-size: small;
    }
  }
  @media only screen and (min-width: 376px) and (max-width: 425px) {
    height: 560px;
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    height: 600px;
    /* background-color: gray;
    width: 99%; */
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    height: 450px;
    /* background-color: gray;
    width: 99%; */
  }
`;
