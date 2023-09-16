import React, { useRef, useState, useEffect } from 'react';
import '../styles/global.css';
import '../styles/globalComponentsStyles/scrollbar.css'
import 'react-image-gallery/styles/css/image-gallery.css';
import Seo from "../components/seo";
import Header from "../components/globalComponents/header";
import MainPage from "../components/mainPageComponents/mainPage"
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

    useEffect(() => {
        const headerButton = document.querySelector(".header-button-logo");
        if (headerButton) {
            headerButton.click();
        }
    }, []);

    const { images, currentImage, handleImageChange } = ImageData();
    const indicators = document.querySelectorAll(".indicator");
    const sections = document.querySelectorAll("section");

    const resetCurrentActiveIndicator = () => {
        const activeIndicator = document.querySelector(".active");
        activeIndicator.classList.remove("active");
    };

    const onSectionLeavesViewport = (section) => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        resetCurrentActiveIndicator();
                        const element = entry.target;
                        const indicator = document.querySelector(`a[href='#${element.id}']`);
                        indicator.classList.add("active");
                        return;
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.75
            }
        );
        observer.observe(section);
    };

    indicators.forEach((indicator) => {
        indicator.addEventListener("click", function (event) {
            event.preventDefault();
            document
                .querySelector(this.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
            resetCurrentActiveIndicator();
            this.classList.add("active");
        });
    });

    sections.forEach(onSectionLeavesViewport);

    return (
        <div>
            <Header scrollToSection={scrollToSection} />
            <aside>
                <ul>
                    <li>
                        <a className="indicator active" href="#main"></a>
                    </li>
                    <li>
                        <a className="indicator" href="#about1"></a>
                    </li>
                    <li>
                        <a className="indicator" href="#about2"></a>
                    </li>
                    <li>
                        <a className="indicator" href="#about3"></a>
                    </li>
                    <li>
                        <a className="indicator" href="#about4"></a>
                    </li>
                    <li>
                        <a className="indicator" href="#organizers"></a>
                    </li>
                </ul>
            </aside>
            <section ref={sectionRefs.main} data-section="main" id={"main"}>
                <MainPage/>
            </section>
            <section ref={sectionRefs.about1} data-section="about1" id={"about1"}>
                <About1/>
            </section>
            <section ref={sectionRefs.about2} data-section="about2" id={"about2"}>
                <About2/>
            </section>
            <section ref={sectionRefs.about3} data-section="about3" id={"about3"}>
                <About3/>
            </section>
            <section ref={sectionRefs.about4} data-section="about4" id={"about4"}>
                <About4/>
            </section>
            <section ref={sectionRefs.organizers} data-section="organizers" id={"organizers"}>
                <Organizers images={images} currentImage={currentImage} handleImageChange={handleImageChange} />
            </section>
        </div>
    );
};

export const Head = () => <Seo title="Hackaton" />

export default HomePage;
