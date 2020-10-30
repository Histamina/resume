import React from 'react';
import { myData } from '../data/myData';

const LeftColumn = () => {
    const { skills, languages } = myData;

    return (
        <>
            <div className="imgdata-wrapper">
                {/* <img/> */}
                <h3>{myData.name}</h3>
                <h4>{myData.title}</h4>
                <h4>{myData.age}</h4>
            </div>
            <div className="contact-wrapper">
                <p>{myData.email}</p>
                <p>{myData.phone}</p>
                <p>{myData.location}</p>
            </div>
            <div className="skills-wrapper">
                <h2>SKILLS</h2>
                {skills.map(data =>
                    <div>
                        <p>{data.title}</p>
                        <p>{data.progress}</p>
                    </div>
                )}
            </div>
            <div className="language-wrapper">
                <h2>LANGUAGES</h2>
                {languages.map(data =>
                    <div>
                        <h3>{data.title}</h3>
                        <p>{data.reading}</p>
                        <p>{data.writing}</p>
                        <p>{data.dialogue}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default LeftColumn;