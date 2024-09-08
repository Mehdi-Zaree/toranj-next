"use client"
import React from 'react';
import {signOut} from "next-auth/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import staticFormTexts from "@/app/enums/static-form-texts";

function ButtonSignOut() {
    return (
        <button
            onClick={() => signOut({callbackUrl: "/sign-in"})}
            className={'w-32 h-12 rounded-2xl outline outline-1 outline-[#a7d397] text-[#a7d397] flex gap-2 items-center justify-center'}
        >
            <FontAwesomeIcon icon={faArrowRightFromBracket} className={'text-[#a7d397]'}/>
            {staticFormTexts.signOut}
        </button>
    );
}

export default ButtonSignOut;