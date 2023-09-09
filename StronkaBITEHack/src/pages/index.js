import React, { useRef, useState, useEffect } from 'react';
import '../styles/global.css';
import Seo from "../components/seo";
import rafonIN from "../images/rafon_index.jpg";
import rafonA1 from "../images/rafon-about1.jpg";
import rafonA2 from "../images/rafon-about2.jpg";
import Header from "../components/header";
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import MainPage from "../components/mainPafeComponents/mainPage"

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

    const images = [
        {
            original: rafonA1,
            thumbnail: rafonA1,
            description: 'Opis pierwszego zdjęcia',
            stat: rafonA2,
        },
        {
            original: rafonA1,
            thumbnail: rafonA1,
            description: 'Opis drugiego zdjęcia',
            stat: rafonIN,
        },
    ];


    const [currentImage, setCurrentImage] = useState(0);


    const handleImageChange = (index) => {
        setCurrentImage(index);
    };



    return (
        <div>
            <Header scrollToSection={scrollToSection} />
            <section ref={sectionRefs.main}>
            <MainPage/>
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
                <div className={'container'}>
                    <div className="organizers-container">
                        {/*<h1>Organizatorzy</h1>*/}
                    <div className="organizers-content">
                        <div className="organizers-gallery">
                            <ImageGallery
                                items={images}
                                showNav={true}
                                showBullets={true}
                                showThumbnails={false}
                                showFullscreenButton={false}
                                showPlayButton={false}
                                autoPlay={false}
                                showImageDescription={false}
                                onSlide={handleImageChange}
                                currentIndex={currentImage}
                            />
                        </div>
                        <div className="organizers-description">
                            <p>{images[currentImage].description}</p>
                        </div>
                    </div>
                    <div className="organizers-gallery-right">
                            <img alt={images[currentImage].description} src={images[currentImage].stat} />
                    </div>
                    </div>
                    <div className="footer">
                        CHUJ
                    </div>
                </div>
            </section>
        </div>
    );
};

export const Head = () => <Seo title="O projekcie" />

export default HomePage;
