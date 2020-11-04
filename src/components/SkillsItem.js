import React from 'react'; 

const SkillsItem = ({
    title = "",
    progress = 0,
    ...props
}) => {
    return (
        <>
            <div>
                <p>{title}</p>
                <p>{progress}</p>
            </div>
        </>
    );
};

export default SkillsItem;