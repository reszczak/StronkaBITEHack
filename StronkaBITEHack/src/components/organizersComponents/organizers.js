import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../../styles/organizersStyles/organizers.css'
import Best_logo from "../../images/best_logo.png"

const Organizers = ({ images, currentImage, handleImageChange }) => {
    return (
        <div className={'o-container'}>
            <div className="organizers-container">
                <div className="organizers-content">
                    <h1 className={"organizers-h1"}>Organizatorzy</h1>
                    <div class = "circular" className="organizers-gallery">
                        <ImageGallery
                            items={images.map((image) => ({
                                ...image,
                                originalClass: 'circular-image',
                                thumbnailClass: 'circular-image',
                            }))}
                            showNav={true}
                            showBullets={false}
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
                        <p className={"organizer-name"}>{images[currentImage].name}</p>
                        <p className={"organizer-status"}>{images[currentImage].status}</p>
                        <hr className={"organizer-hr"}/>
                        <p className={"organizer-mail"}>{images[currentImage].mail}</p>
                    </div>
                </div>
                <div className="organizers-gallery-right">
                    <img alt={images[currentImage].description} src={images[currentImage].stat} />
                </div>
            </div>
            <div className="footer">
                <div className={"footer-logo"}>
                    <img src={Best_logo} alt={"Best_logo"}/>
                </div>
                <div className={"footer-best-info"}>
                    <h2 className={"best-title"}>Stowarzyszenie BEST AGH KRAKÓW</h2>
                    DS I "Alfa" BLOK I<br/>
                    Ul. Reymonta 17/E14<br/>
                    30-059 Kraków
                </div>
                <div className={"empty-space"}>
                </div>
            </div>
        </div>
    );
};

export default Organizers;
