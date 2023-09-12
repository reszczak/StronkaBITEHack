import React from 'react';
import '../../styles/global.css';

const InfoBlock = ({ imageSrc, title, content }) => {
    return (
        <div className="info-block">
            <div className="info-image">
                <img src={imageSrc} alt={`Opis ${title}`} />
            </div>
            <div className="info-text">
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default InfoBlock;
