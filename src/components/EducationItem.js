import React from 'react'; 
import './EducationItem';

const EducationItem = ({
    title = "",
    company = "",
    ...props
}) => {
    return (
        <>
            <div className="education-wrapper">
                <p className="title-wrapper">{title}</p>
                <p className="company-wrapper">{company}</p>
            </div>
        </>
    );
};

export default EducationItem;