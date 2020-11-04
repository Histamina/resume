import React from 'react';

const ImageDataItem = ({
    name = "",
    title = "",
    age = "",
    ...props
}) => {
    return (
        <>
            {/* <img/> */}
            <h3>{name}</h3>
            <h4>{title}</h4>
            <h4>{age}</h4>
        </>
    );
};

export default ImageDataItem;