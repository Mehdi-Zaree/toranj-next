"use client"
import React from 'react';
import {signOut} from "next-auth/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";

function ButtonSignOut() {
    return (
        <button
            onClick={() => signOut({callbackUrl: "/sign-in"})} // داداش این خودش میاد سشن رو اکسپایر میکنه
            className={'w-32 h-12 rounded-2xl outline outline-1 outline-[#a7d397] text-[#a7d397] flex gap-2 items-center justify-center'}
        >
            <FontAwesomeIcon icon={faArrowRightFromBracket} className={'text-[#a7d397]'}/>
            خروج از حساب
        </button>
    );
}

export default ButtonSignOut;