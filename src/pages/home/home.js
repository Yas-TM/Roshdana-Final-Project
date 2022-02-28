import { CourseSection, ReasonSection, BlogSection, Colleagues, Advantage, SecondSection, MainHeader } from "../../components";
import { Element } from "react-scroll";

const Home = () => {

    return(
        <> 
            <MainHeader />
            <SecondSection />    
            <Element id="reason"><ReasonSection /></Element>
            <Element id="courses"><CourseSection /></Element>
            <Element id="advantage"><Advantage /></Element>
            <Element id="colleagues"><Colleagues /></Element>
            <Element id="blog"><BlogSection /></Element>     
        </>
    )
}

export default Home;