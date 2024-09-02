import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useSwiper} from "swiper/react";

function NavigationButton({style,buttonStyle,}) {
    const swiper = useSwiper()
    return (
        <div className={style}>
            <button
                className={`w-14 h-14 ${buttonStyle}  absolute left-4 top-[43%] rounded-xl flex place-items-center justify-center cursor-pointer z-50`}
                onClick={()=>swiper.slidePrev()}
            >
            <FontAwesomeIcon icon={faArrowLeft} className={' text-xl'} />
            </button>
            <button
                className={`w-14 h-14 ${buttonStyle}  absolute right-4 top-[43%] rounded-xl flex place-items-center justify-center cursor-pointer z-50`}
                onClick={()=>swiper.slideNext()}
            >
                <FontAwesomeIcon icon={faArrowRight} className={' text-xl'}/>
            </button>
        </div>
    );
}

export default NavigationButton;
