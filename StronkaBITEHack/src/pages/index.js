import React, { useRef, useState, useEffect } from 'react';
import '../styles/global.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import Seo from "../components/seo";
import Header from "../components/header";
import MainPage from "../components/mainPafeComponents/mainPage"
import About1 from "../components/aboutPageComponents/about1";
import About2 from "../components/aboutPageComponents/about2";
import About3 from "../components/aboutPageComponents/about3";
import About4 from "../components/aboutPageComponents/about4";
import Organizers from "../components/organizersComponents/organizers";
import ImageData from "../components/organizersComponents/imageData";

const HomePage = () => {
    const sectionRefs = {
        main: useRef(null),
        about1: useRef(null),
        about2: useRef(null),
        about3: useRef(null),
        about4: useRef(null),
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

    const { images, currentImage, handleImageChange } = ImageData();

    return (
        <div>
            <Header scrollToSection={scrollToSection} />
            <section ref={sectionRefs.main}>
                <MainPage/>
            </section>
            <section ref={sectionRefs.about1}>
                <About1/>
            </section>
            <section ref={sectionRefs.about2}>
                <About2/>
            </section>
            <section ref={sectionRefs.about3}>
                <About3/>
            </section>
            <section ref={sectionRefs.about4}>
                <About4/>
            </section>
            <section ref={sectionRefs.organizers}>
                <Organizers images={images} currentImage={currentImage} hendleImageChange={handleImageChange}/>
            </section>
        </div>
    );
};

export const Head = () => <Seo title="Hackaton" />

export default HomePage;