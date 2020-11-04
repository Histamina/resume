import React from 'react'; 

const ContactItem = ({
    email = "",
    phone = "",
    location = "",
    ...props
}) => {
    return (
        <>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{location}</p>
        </>
    );
};

export default ContactItem;