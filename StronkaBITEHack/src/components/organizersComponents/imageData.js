import { useState } from 'react';
import rafonA1 from "../../images/rafon-about1.jpg";
import rafonA2 from "../../images/rafon-about2.jpg";
import rafonIN from "../../images/rafon_index.jpg";
import rafon404 from "../../images/rafon404.jpg"

const ImageData = () => {
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
        {
            original: rafonA1,
            thumbnail: rafonA1,
            description: 'Opis trzeciego zdjęcia',
            stat: rafon404,
        },
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const handleImageChange = (index) => {
        setCurrentImage(index);
    };

    return {images, currentImage, handleImageChange };
};

export default ImageData;
