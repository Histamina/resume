import React from 'react';
import { myData } from '../data/myData';
import SkillsItem from './SkillsItem';
import LanguagesItem from './LanguagesItem';

const LeftColumn = () => {
    const { name, title, age, email, phone, location, skills, languages } = myData;

    return (
        <>  
            <div className="left-wrapper">
                <div className="imgdata-wrapper">
                    {/* <img/> */}
                    <h3>{name}</h3>
                    <h4>{title}</h4>
                    <h4>{age}</h4>
                </div>
                <div className="contact-wrapper">
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{location}</p>
                </div>
                <div className="skills-wrapper">
                    <h2>SKILLS</h2>
                    {skills.map((data, i)=> <SkillsItem key={i} {...data} /> )}
                </div>
                <div className="language-wrapper">
                    <h2>LANGUAGES</h2>
                    {languages.map((data, i)=> <LanguagesItem key={i} {...data} />)}
                </div>
            </div>
        </>
    );
};

export default LeftColumn;