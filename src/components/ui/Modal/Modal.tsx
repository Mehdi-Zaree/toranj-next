
import React, {useEffect, useState} from "react";
export const Modal = (
    {
        isOpen,
        onClose,
        children,
    }:{
        isOpen : boolean,
        onClose : () => void,
        children: React.ReactNode,
    })=> {
    useEffect(()=>{
        const handleKeyDown = (event:KeyboardEvent)=>{
            if(event.key === 'EScape'){
                onClose()
            }
        }
        window.addEventListener('keydown', handleKeyDown);
    },[onClose])
    if(!isOpen) return null
    return <>
        <div className={'w-screen h-screen fixed top-0 left-0 flex  justify-center items-center bg-black bg-opacity-50 backdrop-blur-md transition-opacity duration-300 z-50'}>
            {children}
        </div>
    </>
}