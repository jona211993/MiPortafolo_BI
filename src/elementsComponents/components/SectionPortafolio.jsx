import { ContainerContentPortafolio, ContainerPortafolio, TitlePortafolio, WraperPortafolio } from '../SectionPortafolio.elements'
import Card from './Card'


function SectionPortafolio() {
  return (
     <section id="portafolio">
        <ContainerPortafolio className='container-porta'>
            <WraperPortafolio>
                <TitlePortafolio>
                    <h1>Portafolio</h1>
                    <h3>Aquí puedes ver los proyectos en los que he trabajado:</h3>
                </TitlePortafolio>
                <ContainerContentPortafolio>
                    <Card></Card>                
                </ContainerContentPortafolio>
            </WraperPortafolio>
        </ContainerPortafolio>
     </section>
    
  );
}

export default SectionPortafolio;