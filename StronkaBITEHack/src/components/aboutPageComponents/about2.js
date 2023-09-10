import React from 'react';
import '../../styles/global.css'
import rafonA2 from "../../images/rafon-about2.jpg";

const About2 = () => {
    return (
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
    )
}

export default About2