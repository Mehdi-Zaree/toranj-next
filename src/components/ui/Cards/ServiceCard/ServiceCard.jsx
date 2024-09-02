import React from 'react';
import Image from "next/image";

function ServiceCard({serviceHeader,serviceDescription,serviceImage,index}) {
    return (
        <>
            <div className={`w-[90%] flex  ${index%2?'flex-col-reverse':'flex-col'} items-center  `} >
                <Image src={serviceImage} alt={'service'} width={10000} height={10000} className={'md:w-32 w-20'}/>
                <div className={'text-center flex flex-col items-center gap-3'}>
                    <h6 className={'text-lg md:text-2xl text-gray-700'}>{serviceHeader}</h6>
                    <p className={'text-md md:text-xl text-gray-600 leading-7'}>{serviceDescription}</p>
                </div>
            </div>
        </>
    );
}

export default ServiceCard;
