import React, { useRef, useState, useEffect } from 'react';
import '../styles/global.css';
import Seo from "../components/seo";
import rafon from "../images/Rafonix - przejebane życie.mp4";
import rafonIN from "../images/rafon_index.jpg";
import VideoPlayer from "../components/videoPlayerHomePage";
import Header from "../components/header";
import InfoBlock from "../components/InfoBlock";
import CategorySlider from "../components/categorySlider";

const HomePage = () => {
    const sectionRefs = {
        main: useRef(null),
        about: useRef(null),
        regulations: useRef(null),
        organizers: useRef(null)
    };

    const [isScrolling, setIsScrolling] = useState(false);

    const scrollToSection = (section) => {
        setIsScrolling(true);
        sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        sectionRefs.main.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, []);

    return (
        <div>
            <Header scrollToSection={scrollToSection} />
            <section ref={sectionRefs.main}>
                <div className={"container"}>
                    <div className={"video-container"}>
                        <VideoPlayer videoSrc={rafon} />
                    </div>
                    <div className={"content-container"}>
                        <h1>O projekcie</h1>
                        <InfoBlock
                            imageSrc={rafonIN}
                            title="Kiedy?"
                            content="20-21 stycznia 2k24"
                        />
                        <InfoBlock
                            imageSrc={rafonIN}
                            title="Gdzie?"
                            content="Klub studio"
                        />
                        <CategorySlider/>
                    </div>
                </div>
            </section>
            <section ref={sectionRefs.about}>
                <div className={"container"}>
                    <h1>O projekcie</h1>
                </div>
            </section>
            <section ref={sectionRefs.regulations}>
                <div className={"container"}>
                    <h1>Regulamin</h1>
                </div>
            </section>
            <section ref={sectionRefs.organizers}>
                <div className={"container"}>
                    <h1>Organizatorzy</h1>
                </div>
            </section>
        </div>
    );
};

export const Head = () => <Seo title="O projekcie" />

export default HomePage;
