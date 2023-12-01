import MyNavBar from "./MyNavBar";
import Banner from "./Banner";
import Section from "./Section";
import SectionPortafolio from "../elementsComponents/components/SectionPortafolio";
import Footer from "./Footer";


function Home() {
  return (
    <>
    <MyNavBar></MyNavBar>
    <Banner></Banner>
    <Section></Section>
    <SectionPortafolio></SectionPortafolio>
    <Footer></Footer>
    </>
  )
}

export default Home