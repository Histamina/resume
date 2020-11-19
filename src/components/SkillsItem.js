import React from 'react';
import '../assets/leftColumn.scss'; 

const SkillsItem = ({
    title = "",
    progress = 0,
    ...props
}) => {
    return (
        <>
            <div className="progress-bar--wrapper">
                <p className="progress-bar--title">{title}</p>
                <div className="progress-bar">
                    <div className="progress-bar--style" style={{width: `${progress}%`}}></div>
                </div>
            </div>
        </>
    );
};

export default SkillsItem;