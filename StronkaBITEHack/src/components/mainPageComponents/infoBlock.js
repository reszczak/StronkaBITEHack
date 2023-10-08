import React from 'react';
import '../../styles/global.css';
import '../../styles/mainPageStyles/infoBlock.css'

const InfoBlock = ({ imageSrc, title, content, content2 }) => {
    return (
        <div className="info-block">
            <div className="info-image">
                <img src={imageSrc} alt={`Opis ${title}`} />
            </div>
            <div className="info-text">
                <p className={"infoBl-title"}>{title}</p>
                <p className={"infoBl-content"}>{content}</p>
                <p className={"infoBl-content2"}>{content2}</p>
            </div>
        </div>
    );
};

export default InfoBlock;
