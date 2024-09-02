import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRectangleXmark} from "@fortawesome/free-regular-svg-icons";

function CloseModalButton({setIsModalOpen}) {
    return (
        <button
            onClick={()=>setIsModalOpen(false)}
            className={' rounded-md flex items-center justify-center absolute top-4 left-[88%] lg:left-4 z-50'}
        >
           <FontAwesomeIcon icon={faRectangleXmark} className={'text-3xl text-[#1C5B5F] font-thin'}/>
        </button>
    );
}

export default CloseModalButton;
