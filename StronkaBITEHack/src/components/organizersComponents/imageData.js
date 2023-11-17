import { useState } from 'react';
import Konrad from "../../images/CT/Konrad.jpg"
import Werka from "../../images/CT/Werka.jpg"
import Karo from "../../images/CT/Karo.jpg"
import Kondziu from "../../images/CT/Kondziu.jpg"
import Pimpek from "../../images/CT/Pimpek.jpg"
import Dawid from "../../images/CT/Dawid.jpg"
import Tomek from "../../images/CT/Tomek.jpg"

import stat1 from "../../images/stat/stat1.png"
import stat2 from "../../images/stat/stat2.png"
import stat3 from "../../images/stat/stat3.png"
import stat4 from "../../images/stat/stat4.png"

const ImageData = () => {
    const images = [
        {
            original: Kondziu,
            thumbnail: Kondziu,
            description: '',
            name: 'Konrad Krzemiński',
            status: 'Główny Koordynator Projektu',
            mail: 'konrad.krzeminski@best.krakow.pl',
            stat: stat4,
        },
        {
            original: Pimpek,
            thumbnail: Pimpek,
            description: '',
            name: 'Mateusz Wirkijowski',
            status: 'Koordynator ds. Grafiki i Promocji',
            mail: 'mateusz.wirkijowski@best.krakow.pl',
            stat: stat3,
        },
        {
            original: Karo,
            thumbnail: Karo,
            description: '',
            name: 'Karolina Sędzik',
            status: 'Koordynator ds. Zasobów Ludzkich',
            mail: 'karolina.sedzik@best.krakow.pl',
            stat: stat4,
        },
        {
            original: Werka,
            thumbnail: Werka,
            description: '',
            name: 'Weronika Tokarczyk',
            status: 'Koordynator ds. Logistyki',
            mail: 'weronika.tokarczyk@best.krakow.pl',
            stat: stat3,
        },
        {
            original: Tomek,
            thumbnail: Tomek,
            description: '',
            name: 'Tomasz Kaczor',
            status: 'Koordynator ds. Kontaktu z Firmami',
            mail: 'tomasz.kaczor@best.krakow.pl',
            stat: stat4,
        },
        {
            original: Konrad,
            thumbnail: Konrad,
            description: '',
            name: 'Konrad Korzec',
            status: 'Koordynator ds. Merytoryki',
            mail: 'konrad.korzec@best.krakow.pl',
            stat: stat3,
        },
        {
            original: Dawid,
            thumbnail: Dawid,
            description: '',
            name: 'Dawid Reszczyński',
            status: 'Koordynator ds. Merytoryki',
            mail: 'dawid.reszczynski@best.krakow.pl',
            stat: stat4,
        },
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const handleImageChange = (index) => {
        setCurrentImage(index);
    };

    return {images, currentImage, handleImageChange };
};

export default ImageData;
