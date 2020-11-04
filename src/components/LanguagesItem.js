import React from 'react'; 

const LanguagesItem = ({
    title = "",
    reading = 0,
    writing = 0,
    dialogue= 0,
    ...props
}) => {
    return (
        <>
            <div>
                <h3>{title}</h3>
                <p>{reading}</p>
                <p>{writing}</p>
                <p>{dialogue}</p>
            </div>
        </>
    );
};

export default LanguagesItem;