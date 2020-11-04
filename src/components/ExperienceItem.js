import React from 'react';
import '../assets/rightColumn.scss';

const ExperienceItem = ({
    company = "",
    period = "",
    job = "",
    description = "",
    ...props
}) => {
    return (
        <div>
            <div className="companyPeriod-wrapper">
                <p className="company-wrapper">{company}</p> 
                <p className="period-wrapper">{period}</p> 
            </div>
            <p className="job-wrapper">{job}</p> 
            <p className="description-wrapper">{description}</p> 
        </div>
    );
}


export default ExperienceItem;