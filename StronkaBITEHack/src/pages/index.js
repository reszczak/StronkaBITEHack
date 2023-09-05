import React, { useRef, useState, useEffect } from 'react';
import '../styles/global.css';
import Seo from "../components/seo";
import rafon from "../images/Rafonix - przejebane życie.mp4";
import rafonIN from "../images/rafon_index.jpg";
import rafonA1 from "../images/rafon-about1.jpg";
import rafonA2 from "../images/rafon-about2.jpg";
import VideoPlayer from "../components/videoPlayerHomePage";
import Header from "../components/header";
import InfoBlock from "../components/InfoBlock";
import CategorySlider from "../components/categorySlider";

const HomePage = () => {
    const sectionRefs = {
        main: useRef(null),
        about1: useRef(null),
        about2: useRef(null),
        about3: useRef(null),
        about4: useRef(null),
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
            <section ref={sectionRefs.about1}>
                <div className={"container"}>
                    <div className={"about1-image-container"}>
                        <h1></h1>
                        <img className={"a1-img"} src={rafonA1} alt={"rafon-about1"}/>
                        <img className={"a1-img"} src={rafonA1} alt={"rafon-about1"}/>
                    </div>
                    <div className={"about1-desc-container"}>
                        <h1>O projekcie</h1>
                        <p>
                            Lorem ipsum dolor sit amet. Ea modi unde ut architecto nemo rem dolor
                            nostrum sit quidem sint qui cupiditate numquam eum quasi commodi. Est
                            itaque pariatur ut nesciunt repudiandae qui tempora dignissimoId tenetur
                            exercitationem qui magni deserunt ea voluptatem
                        </p>
                    </div>
                    <div className={"about1-paragraph-container"}>
                        <p>
                            Lorem ipsum dolor sit amet. Ea modi unde ut architecto nemo rem dolor
                            nostrum sit quidem sint qui cupiditate numquam eum quasi commodi. Est
                            itaque pariatur ut nesciunt repudiandae qui tempora dignissimoId tenetur
                            exercitationem qui magni deserunt ea voluptatem
                        </p>
                    </div>
                </div>
            </section>
            <section ref={sectionRefs.about2}>
                <div className={"container"}>
                    <div className={"about2-desc-container"}>
                        <h2>Kategoria klasyczna</h2>
                        <p>
                            Lorem ipsum dolor sit amet. Ea modi unde ut architecto nemo rem dolor
                            nostrum sit quidem sint qui cupiditate numquam eum quasi commodi. Est
                            itaque pariatur ut nesciunt repudiandae qui tempora dignissimoId tenetur
                            exercitationem qui magni deserunt ea voluptatem
                        </p>
                        <h2>Kategoria robotyczna</h2>
                        <p>
                            Lorem ipsum dolor sit amet. Ea modi unde ut architecto nemo rem dolor
                            nostrum sit quidem sint qui cupiditate numquam eum quasi commodi. Est
                            itaque pariatur ut nesciunt repudiandae qui tempora dignissimoId tenetur
                            exercitationem qui magni deserunt ea voluptatem
                        </p>
                        <h2>Kategoria GameJam</h2>
                        <p>
                            Lorem ipsum dolor sit amet. Ea modi unde ut architecto nemo rem dolor
                            nostrum sit quidem sint qui cupiditate numquam eum quasi commodi. Est
                            itaque pariatur ut nesciunt repudiandae qui tempora dignissimoId tenetur
                            exercitationem qui magni deserunt ea voluptatem
                        </p>
                    </div>
                    <div className={"about2-image-container"}>
                        <img className={"a2-img"} src={rafonA2} alt={"rafon-about2"}/>
                    </div>
                    <div className={"about2-paragraph-container"}>
                        <h2>Trzy różne kategorie</h2>
                    </div>
                </div>
            </section>
            <section ref={sectionRefs.about3}>
                <div className={"container"}>
                    <div className={"about3-desc-container-left"}>
                        <h2>Przebieg wydarzenia</h2>
                        <p>
                            Lorem ipsum dolor sit amet. Ea modi unde ut architecto nemo rem dolor
                            nostrum sit quidem sint qui cupiditate numquam eum quasi commodi. Est
                            itaque pariatur ut nesciunt repudiandae qui tempora dignissimoId tenetur
                            exercitationem qui magni deserunt ea voluptatem
                        </p>
                        <div className={"about3-space"}></div>
                        <h2>Atrakcje</h2>
                        <p>
                            Lorem ipsum dolor sit amet. Ea modi unde ut architecto nemo rem dolor
                            nostrum sit quidem sint qui cupiditate numquam eum quasi commodi. Est
                            itaque pariatur ut nesciunt repudiandae qui tempora dignissimoId tenetur
                            exercitationem qui magni deserunt ea voluptatem
                        </p>
                    </div>
                    <div className={"about3-image-container"}>
                        <img className={"a3-img"} src={rafonA2} alt={"rafon-about3"}/>
                    </div>
                    <div className={"about3-desc-container-right"}>
                        <h2>Czym dokładnie jest BITEHack?</h2>
                        <p>
                            Lorem ipsum dolor sit amet. Ea modi unde ut architecto nemo rem dolor
                            nostrum sit quidem sint qui cupiditate numquam eum quasi commodi. Est
                            itaque pariatur ut nesciunt repudiandae qui tempora dignissimoId tenetur
                            exercitationem qui magni deserunt ea voluptatem
                        </p>
                        <div className={"about3-space"}></div>
                        <h2>Czy warto</h2>
                        <p>
                            W CHUJ
                            Lorem ipsum dolor sit amet. Ea modi unde ut architecto nemo rem dolor
                            nostrum sit quidem sint qui cupiditate numquam eum quasi commodi. Est
                            itaque pariatur ut nesciunt repudiandae qui tempora dignissimoId tenetur
                            exercitationem qui magni deserunt ea voluptatem
                        </p>
                    </div>
                </div>
            </section>
            <section ref={sectionRefs.about4}>
                <div className={"container"}>
                    <div className={"about4-content"}>
                        <h2>Partner Główny</h2>
                        <div className={"about4-image-container"}>
                            <img className={"a4-img"} src={rafonA1} alt={"rafon-about4"}/>
                        </div>
                        <h3>Partnerzy</h3>
                    </div>
                    <div className={"partner-images"}>
                        <img className={"partner-img"} src={rafonA1} alt={"rafon-partner"}/>
                        <img className={"partner-img"} src={rafonA1} alt={"rafon-partner"}/>
                        <img className={"partner-img"} src={rafonA1} alt={"rafon-partner"}/>
                        <img className={"partner-img"} src={rafonA1} alt={"rafon-partner"}/>
                        <img className={"partner-img"} src={rafonA1} alt={"rafon-partner"}/>
                        <img className={"partner-img"} src={rafonA1} alt={"rafon-partner"}/>
                        <img className={"partner-img"} src={rafonA1} alt={"rafon-partner"}/>
                        <img className={"partner-img"} src={rafonA1} alt={"rafon-partner"}/>
                        <img className={"partner-img"} src={rafonA1} alt={"rafon-partner"}/>
                        <img className={"partner-img"} src={rafonA1} alt={"rafon-partner"}/>
                    </div>
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
