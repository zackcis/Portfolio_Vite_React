import { Element } from "react-scroll"; // Import Element from react-scroll
import { FifthSection } from "./components/fifthSection/fifthSection";
import { FirstSection } from "./components/firstSection/firstSection";
import { Footer } from "./components/footer/footer";
import { FourthSection } from "./components/fourthSection/fourthSection";
import { SecondSection } from "./components/secondSection/secondSection";
import { ThirdSection } from "./components/thirdSection/thirdSection";

export const HomePage = () => {
    return (
        <>
            <Element name="home">
                <FirstSection />
            </Element>
            <Element name="techstack">
                <SecondSection />
            </Element>
            <Element name="projects">
                <ThirdSection />
            </Element>
            <Element name="">
                <FourthSection />
            </Element>
            <Element name="experience">
                <FifthSection />
            </Element>
            <Element name="contact">
                <Footer />
            </Element>
        </>
    );
};
