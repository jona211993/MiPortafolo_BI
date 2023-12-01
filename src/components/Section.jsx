import {
  ContainerAbout,
  ContainerContentAbout,  
  TitleAbout,
  WraperAbout,
} from "../elementsComponents/Section.elements";
import MySkills from "../elementsComponents/components/MySkills";
import Resume from "../elementsComponents/components/Resume";
const Section = () => {
  return (
    <ContainerAbout id="nosotros">
      <WraperAbout>
        <TitleAbout>
          <h1>Sobre mí</h1>
        </TitleAbout>
        <ContainerContentAbout>
          <Resume></Resume>
          <MySkills id ="misSkills"></MySkills>
        </ContainerContentAbout>
      </WraperAbout>
    </ContainerAbout>
  );
};

export default Section;
