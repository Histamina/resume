import React from 'react';
import '../assets/rightColumn.scss';
import { myData } from '../data/myData';
import ExperienceItem from './ExperienceItem';
import EducationItem from './EducationItem';

const RightColumn = () => {
    const { description, experience, education } = myData;

    return (
        <>
            <div className="right-wrapper">
                <div className="aboutme-wrapper">
                    <h1>ACERCA DE MÍ</h1>
                    <div className="aboutme-wrapper--description" dangerouslySetInnerHTML={{__html:description}}></div>
                </div>
                <div className="experience-wrapper">
                    <h2>EXPERIENCIA</h2>
                    {experience.map((data, i) => <ExperienceItem key={i} {...data} />)}
                </div>
                <div className="education-wrapper">
                    <h2>EDUCACIÓN</h2>
                    {education.map((data, i) => <EducationItem key={i} {...data} /> )}
                </div>
            </div>
        </>
    );
};

export default RightColumn;