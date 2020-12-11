import React from 'react';

const LanguagesItem = ({
    title = "",
    level = "",
    ...props
}) => {
    return (
        <>
            <div className="language-items">
                <h3 className="language-items--title">{title}</h3>
                <p className="language-items--level">{level}</p>
            </div>
        </>
    );
};

export default LanguagesItem;