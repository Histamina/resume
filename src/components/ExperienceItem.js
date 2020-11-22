import React from 'react';
import '../assets/rightColumn.scss';

const ExperienceItem = ({
    company = "",
    period = "",
    job = "",
    description = "",
    references = "",
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
            {
                references ?
                <div className="reference-wrapper"> <p className="reference-data">Referencias:</p> {references.map((data, i) => { return <p className="reference-data" key={i}>{data.name} - {data.email}</p> })} </div> 
                : null
            }
        </div>
    );
}


export default ExperienceItem;