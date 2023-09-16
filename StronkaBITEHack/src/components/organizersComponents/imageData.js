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
            description: 'Konrad Krzemiński',
            name: 'Konrad Krzemiński',
            status: 'Główny koordynator projektu',
            mail: 'konrad.krzeminski@best.krakow.pl',
            stat: rafon404,
        },
        {
            original: rafonA1,
            thumbnail: rafonA1,
            description: 'Mateusz Wirkijowski',
            name: 'Mateusz Wirkijowski',
            status: 'Koordynator ds. Grafiki i Promocji',
            mail: 'mateusz.wirkijowski@best.krakow.pl',
            stat: rafonIN,
        },
        {
            original: rafonA1,
            thumbnail: rafonA1,
            description: 'Karolina Sędzik',
            name: 'Karolina Sędzik',
            status: 'Koordynator ds. Zasobów Ludzkich',
            mail: 'karolina.sedzik@best.krakow.pl',
            stat: rafon404,
        },
        {
            original: rafonA1,
            thumbnail: rafonA1,
            description: 'Weronika Tokarczyk',
            name: 'Weronika Tokarczyk',
            status: 'Koordynator ds. Logistyki',
            mail: 'weronika.tokarczyk@best.krakow.pl',
            stat: rafonIN,
        },
        {
            original: rafonA1,
            thumbnail: rafonA1,
            description: 'Tomasz Kaczor',
            name: 'Tomasz Kaczor',
            status: 'Koordynator ds. Kontaktu z firmami',
            mail: 'tomasz.kaczor@best.krakow.pl',
            stat: rafon404,
        },
        {
            original: rafonA1,
            thumbnail: rafonA1,
            description: 'Konrad Korzec',
            name: 'Konrad Korzec',
            status: 'Koordynator ds. Merytoryki',
            mail: 'konrad.korzec@best.krakow.pl',
            stat: rafonIN,
        },
        {
            original: rafonA1,
            thumbnail: rafonA1,
            description: 'Dawid Reszczyński',
            name: 'Dawid Reszczyński',
            status: 'Koordynator ds. Merytoryki',
            mail: 'dawid.reszczynski@best.krakow.pl',
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
