import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Organizers = ({ images, currentImage, handleImageChange }) => {
    return (
        <div className={'container'}>
            <div className="organizers-container">
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
    );
};

export default Organizers;
