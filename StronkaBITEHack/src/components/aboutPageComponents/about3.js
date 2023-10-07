import React from 'react';
import '../../styles/global.css'
import '../../styles/aboutPageStyles/about3.css'
import rafonA2 from "../../images/rafon-about2.jpg";

const About3 = () => {
    return (
        <div className={"container"}>
            <div className={"about3-desc-container-left"}>
                <h2 className={"about3-left"}>Przebieg wydarzenia</h2>
                <p className={"about3-text"}>
                    Lorem ipsum dolor sit amet. Ea modi unde ut architecto nemo rem dolor
                    nostrum sit quidem sint qui cupiditate numquam eum quasi commodi. Est
                    itaque pariatur ut nesciunt repudiandae qui tempora dignissimoId tenetur
                    exercitationem qui magni deserunt ea voluptatem
                </p>
                <div className={"about3-space"}></div>
                <h2 className={"about3-left"}>Atrakcje</h2>
                <p className={"about3-text"}>
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
                <h2 className={"about3-right"}>Czym dokładnie jest BH?</h2>
                <p className={"about3-text"}>
                    Lorem ipsum dolor sit amet. Ea modi unde ut architecto nemo rem dolor
                    nostrum sit quidem sint qui cupiditate numquam eum quasi commodi. Est
                    itaque pariatur ut nesciunt repudiandae qui tempora dignissimoId tenetur
                    exercitationem qui magni deserunt ea voluptatem
                </p>
                <div className={"about3-space"}></div>
                <h2 className={"about3-right"}>Czy warto?</h2>
                <p className={"about3-text"}>
                    W CHUJ
                    Lorem ipsum dolor sit amet. Ea modi unde ut architecto nemo rem dolor
                    nostrum sit quidem sint qui cupiditate numquam eum quasi commodi. Est
                    itaque pariatur ut nesciunt repudiandae qui tempora dignissimoId tenetur
                    exercitationem qui magni deserunt ea voluptatem
                </p>
            </div>
        </div>
    )
}

export default About3