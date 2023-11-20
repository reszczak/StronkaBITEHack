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
import Layer1 from "../images/Background/Layer 1.png"
import Layer2 from "../images/Background/Layer 2.png"
import Layer3 from "../images/Background/Layer 3.png"
import Layer4 from "../images/Background/Layer 4.png"
import Layer5 from "../images/Background/Layer 5.png"
import Layer6 from "../images/Background/Layer 6.png"
import TechWipe from "../images/Background/Slide Reveal (Blue).webm"

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
    const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
    const [isAnimationActive, setIsAnimationActive] = useState(true);
    const [isAnimationStarted, setIsAnimationStarted] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const xOffset = (e.clientX - window.innerWidth / 2) / 50;
            const yOffset = (e.clientY - window.innerHeight / 2) / 50;
            setParallaxOffset({ x: xOffset, y: yOffset });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const [hasScrolledToNewSection, setHasScrolledToNewSection] = useState(false);

    const playTechWipeVideo = () => {
        const video = document.querySelector(".animation-video");
        if (video) {
            video.play();
        }
    };

    useEffect(() => {
        const scrollToMainSection = () => {
            const mainSection = document.querySelector("#main");
            if (mainSection) {
                mainSection.scrollIntoView({ behavior: 'auto', block: 'start' });
            }
        };

        // Wywołaj funkcję po załadowaniu strony
        scrollToMainSection();
    }, []);

    document.documentElement.style.scrollBehavior = 'instant';
    const scrollToSection = (section) => {
        setIsScrolling(true);
        setIsAnimationActive(true);
        setIsAnimationStarted(false);
        setTimeout(() => {
            sectionRefs[section].current.scrollIntoView({ behavior: 'instant' });
            setHasScrolledToNewSection(true);
        }, 350);
        playTechWipeVideo();
    };

    useEffect(() => {
        setTimeout(() => {
            sectionRefs.main.current.scrollIntoView({ behavior: 'instant', block: 'center' });
        }, 500);
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
        setIsAnimationActive(true);
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
                        if (hasScrolledToNewSection && !isAnimationStarted) {
                            // playTechWipeVideo();
                            setIsAnimationStarted(false);
                        }
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
            setTimeout(() => {
                document
                    .querySelector(this.getAttribute("href"))
                    .scrollIntoView({ behavior: 'instant' });
            }, 500);
            resetCurrentActiveIndicator();
            this.classList.add("active");
            playTechWipeVideo();
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
            {isAnimationActive && (
                <video autoPlay muted playsInline className="animation-video">
                    <source src={TechWipe} type="video/webm" />
                </video>
            )}
            <div className="layer" style={{ transform: `translate(${parallaxOffset.x * -0.75}px, ${parallaxOffset.y * -0.75}px)` }}>
                <img src={Layer1} alt="Layer 1" />
            </div>
            <div className="layer" style={{ transform: `translate(${parallaxOffset.x * 0.65}px, ${parallaxOffset.y * 0.65}px)` }}>
                <img src={Layer2} alt="Layer 2" />
            </div>
            <div className="layer" style={{ transform: `translate(${parallaxOffset.x * -0.55}px, ${parallaxOffset.y * -0.55}px)` }}>
                <img src={Layer3} alt="Layer 3" />
            </div>
            <div className="layer" style={{ transform: `translate(${parallaxOffset.x * 0.40}px, ${parallaxOffset.y * 0.40}px)` }}>
                <img src={Layer4} alt="Layer 4" />
            </div>
            <div className="layer" style={{ transform: `translate(${parallaxOffset.x * -0.25}px, ${parallaxOffset.y * -0.25}px)` }}>
                <img src={Layer5} alt="Layer 5" />
            </div>
            <div className="layer" style={{ transform: `translate(${parallaxOffset.x * 0.15}px, ${parallaxOffset.y * 0.15}px)` }}>
                <img src={Layer6} alt="Layer 6" />
            </div>
            <div className={"index-sections"}>
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
        </div>
    );
};

export const Head = () => <Seo title="Hackaton" />

export default HomePage;
