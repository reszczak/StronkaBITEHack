import React from 'react';
import '../../styles/global.css'
import '../../styles/aboutPageStyles/about1.css'
import rafonA1 from "../../images/rafon-about1.jpg";

const About1 = () => {
    return (
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
    )
}

export default About1;