import React from 'react';
import '../../styles/global.css'
import '../../styles/aboutPageStyles/about3.css'
import about3img from "../../images/about3img.png";

const About3 = () => {
    return (
        <div className={"about3-container"}>
            <div className={"about3-desc-container-left"}>
                <h2 className={"about3-left"}>Przebieg wydarzenia</h2>
                <p className={"about3-text"}>
                    Uczestnicy konkursu mają 24 godziny na stworzenie i przedstawienie własnego
                    pomysłu na zadany w temacie problem. Następnie ów projekt oceniać będzie jury
                    składające się z partnerów naszego wydarzenia, a także pracowników naukowych
                    Akademii Górniczo-Hutniczej. Każda kategoria ma swoją odpowiednią punktację,
                    wobec której będziecie oceniani.
                </p>
                <div className={"about3-space"}></div>
                <h2 className={"about3-left"}>Atrakcje</h2>
                <p className={"about3-text"}>
                    W czasie wydarzenia nie będziecie narzekać na nudę! W przerwach
                    od pracy będziecie mieli możliwość porozmawiać z pracodawcami.
                    Przeprowadzone zostaną także side-eventy, czyli mini konkursy,
                    w których będzie można wygrać nagrody! Będzie również czekać na Was
                    poczęstunek, aby nie zabrakło Wam sił do rozwiązywania problemów!
                </p>
            </div>
            <div className={"about3-image-container"}>
                <img className={"a3-img"} src={about3img} alt={"about3img"}/>
            </div>
            <div className={"about3-desc-container-right"}>
                <h2 className={"about3-right"}>Czym jest BITEhack?</h2>
                <p className={"about3-text"}>
                    BITEhack jest hackatonem organizowanym przez stowarzyszenie studenckie
                    BEST AGH Kraków. Tegoroczna edycja jest jego szóstą odsłoną.
                    Zeszłoroczną kategorię AI zmieniono w tym roku na GameJam. Pozwala na
                    rozwój, sprawdzenie swoich umiejętności oraz dobrą zabawę studentom. Jest to
                    również okazja aby spotkać się z przedstawicielami firm.
                </p>
                <div className={"about3-space"}></div>
                <h2 className={"about3-right"}>Czy warto?</h2>
                <p className={"about3-text"}>
                    Biorąc udział w wydarzeniu możecie spędzić wspólnie czas ze znajomymi,
                    poznać innych kreatywnych studentów, nabyć potrzebnego
                    doświadczenia i nauczyć się rozwiązywania problemów pracując w zespole.
                    Hackathon jest również okazją do nawiązania kontaktów z przedstawicielami
                    największych firm na krakowskim rynku IT. Zapisz się już teraz!
                </p>
            </div>
        </div>
    )
}

export default About3