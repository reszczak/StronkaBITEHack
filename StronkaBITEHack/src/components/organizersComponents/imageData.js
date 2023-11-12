import { useState } from 'react';
import rafonA1 from "../../images/rafon-organizer.jpg";
import rafonIN from "../../images/rafon_index.jpg";
import rafon404 from "../../images/rafon404.jpg"

import Konrad from "../../images/CT/Konrad.jpg"
import Werka from "../../images/CT/Werka.jpg"

const ImageData = () => {
    const images = [
        {
            original: rafonA1,
            thumbnail: rafonA1,
            description: '',
            name: 'Konrad Krzemiński',
            status: 'Główny Koordynator Projektu',
            mail: 'konrad.krzeminski@best.krakow.pl',
            stat: rafon404,
        },
        {
            original: rafonA1,
            thumbnail: rafonA1,
            description: '',
            name: 'Mateusz Wirkijowski',
            status: 'Koordynator ds. Grafiki i Promocji',
            mail: 'mateusz.wirkijowski@best.krakow.pl',
            stat: rafonIN,
        },
        {
            original: rafonA1,
            thumbnail: rafonA1,
            description: '',
            name: 'Karolina Sędzik',
            status: 'Koordynator ds. Zasobów Ludzkich',
            mail: 'karolina.sedzik@best.krakow.pl',
            stat: rafon404,
        },
        {
            original: Werka,
            thumbnail: Werka,
            description: '',
            name: 'Weronika Tokarczyk',
            status: 'Koordynator ds. Logistyki',
            mail: 'weronika.tokarczyk@best.krakow.pl',
            stat: Werka,
        },
        {
            original: rafonA1,
            thumbnail: rafonA1,
            description: '',
            name: 'Tomasz Kaczor',
            status: 'Koordynator ds. Kontaktu z Firmami',
            mail: 'tomasz.kaczor@best.krakow.pl',
            stat: rafon404,
        },
        {
            original: Konrad,
            thumbnail: Konrad,
            description: '',
            name: 'Konrad Korzec',
            status: 'Koordynator ds. Merytoryki',
            mail: 'konrad.korzec@best.krakow.pl',
            stat: Konrad,
        },
        {
            original: rafonA1,
            thumbnail: rafonA1,
            description: '',
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
