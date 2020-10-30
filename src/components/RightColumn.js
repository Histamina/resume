import React from 'react';
import { myData } from '../data/myData';

const RightColumn = () => {
    const { experience, education } = myData;
    
    return (
        <>
            <div className="aboutme-wrapper">
                <h1>ACERCA DE MÍ</h1>
                <p>{myData.description}</p>
            </div>
            <div className="experience-wrapper">
                <h2>EXPERIENCIA</h2>
                {experience.map(data => 
                    <div> 
                        <p>{data.company}</p> 
                        <p>{data.period}</p> 
                        <p>{data.job}</p> 
                        <p>{data.description}</p> 
                    </div>
                )}
            </div>
            <div className="education-wrapper">
                <h2>EDUCATION</h2>
                {education.map(data => 
                    <div>
                        <p>{data.title}</p>
                        <p>{data.company}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default RightColumn;