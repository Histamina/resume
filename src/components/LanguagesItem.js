import React from 'react';
import { IoMdEye } from 'react-icons/io';
import { BsChat } from 'react-icons/bs';
import { BsFonts } from 'react-icons/bs';

const LanguagesItem = ({
    title = "",
    reading = 0,
    writing = 0,
    dialogue= 0,
    ...props
}) => {
    return (
        <>
            <div className="language-items">
                <h3 className="language-items--title">{title}</h3>
                <div className="progress-bar--wrapper">
                    <div className="progress-bar">
                        <IoMdEye />
                        <div className="progress-bar--holder">
                            <div className="progress-bar--style" style={{width: `${reading}%`}}></div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <BsChat />
                        <div className="progress-bar--holder">
                            <div className="progress-bar--style" style={{width: `${dialogue}%`}}></div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <BsFonts />
                        <div className="progress-bar--holder">
                            <div className="progress-bar--style" style={{width: `${writing}%`}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LanguagesItem;