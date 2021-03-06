import React from 'react';
import '../assets/leftColumn.scss';
import profile from '../assets/profile.jpeg';
import { myData } from '../data/myData';
import SkillsItem from './SkillsItem';
import LanguagesItem from './LanguagesItem';
import { DiReact } from 'react-icons/di';
import { MdEmail } from 'react-icons/md';
import { MdPhoneIphone } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const LeftColumn = () => {
    const { name, title, age, email, phone, location, linkedin, github,skills, languages } = myData;

    return (
        <>  
            <div className="left-wrapper">
                <div className="imgdata-wrapper">
                    <img src={profile} alt="profile" width="265" height="350" />
                    <h3 className="imgdata-wrapper--name">{name}</h3>
                    <p className="imgdata-wrapper--title">{title}</p>
                    <p className="imgdata-wrapper--dot">•</p>
                    <p className="imgdata-wrapper--age">{age}</p>
                </div>
                <div className="contact-wrapper">
                    <p className="contact-wrapper--email"><MdEmail className="contact-wrapper--icon"/>{email}</p>
                    <p className="contact-wrapper--phone"><MdPhoneIphone className="contact-wrapper--icon"/>{phone}</p>
                    <p className="contact-wrapper--location"><MdLocationOn className="contact-wrapper--icon"/>{location}</p>
                    <p className="contact-wrapper--linkedin"><FaLinkedin className="contact-wrapper--icon"/>{linkedin}</p>
                    <p className="contact-wrapper--github"><FaGithub className="contact-wrapper--icon"/>{github}</p>
                </div>
                <div className="skills-wrapper">
                    <h2 className="skills-wrapper--title">HABILIDADES</h2>
                    {skills.map((data, i)=> <SkillsItem key={i} {...data} /> )}
                </div>
                <div className="language-wrapper">
                    <h2 className="language-wrapper--title">IDIOMAS</h2>
                    {languages.map((data, i)=> <LanguagesItem key={i} {...data} />)}
                </div>
                <div className="react-icon--wrapper">
                    <p>Developed with <DiReact className="react-icon"/></p>
                </div>
            </div>
        </>
    );
};

export default LeftColumn;