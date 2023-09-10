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

    const handleDotClick = (sectionName) => {
        const section = sectionRefs[sectionName].current;
        section.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const dots = document.querySelectorAll(".dot");

        dots.forEach((dot) => {
            const sectionName = dot.getAttribute("data-section");
            dot.addEventListener("click", () => {
                handleDotClick(sectionName);
            });
        });

        window.addEventListener("scroll", () => {
            const scrollPosition = window.scrollY;
            const sections = Object.values(sectionRefs);

            sections.forEach((sectionRef) => {
                const section = sectionRef.current;
                if (!section) return;

                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.clientHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    const sectionName = section.getAttribute("data-section");
                    dots.forEach((dot) => {
                        dot.classList.remove("active");
                        if (dot.getAttribute("data-section") === sectionName) {
                            dot.classList.add("active");
                        }
                    });
                }
            });
        });
    }, [sectionRefs]);

    return (
        <div>
            <Header scrollToSection={scrollToSection} />
            <div id="scrollbar" className="scrollbar">
                <div className="dot" data-section="main"></div>
                <div className="dot" data-section="about1"></div>
                <div className="dot" data-section="about2"></div>
                <div className="dot" data-section="about3"></div>
                <div className="dot" data-section="about4"></div>
                <div className="dot" data-section="organizers"></div>
            </div>
            <section ref={sectionRefs.main} data-section="main">
                <MainPage/>
            </section>
            <section ref={sectionRefs.about1} data-section="about1">
                <About1/>
            </section>
            <section ref={sectionRefs.about2} data-section="about2">
                <About2/>
            </section>
            <section ref={sectionRefs.about3} data-section="about3">
                <About3/>
            </section>
            <section ref={sectionRefs.about4} data-section="about4">
                <About4/>
            </section>
            <section ref={sectionRefs.organizers} data-section="organizers">
                <Organizers images={images} currentImage={currentImage} handleImageChange={handleImageChange} />
            </section>
        </div>
    );
};

export const Head = () => <Seo title="Hackaton" />

export default HomePage;
