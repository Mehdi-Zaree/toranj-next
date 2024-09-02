import React from 'react';
import {auth} from "../../../../../auth";
import Link from "next/link";

async function UserButton(props) {
    const session = await auth()
    if(!session)
        return(
            <Link href={'api/auth/signin'}>
                <button
                    className={'w-44 h-12 bg-[#a7d397] rounded-lg text-lg text-[#183d3d] hidden lg:block'}>
                    ورود | ثبت نام
                </button>
            </Link>
        )
    return (
        <Link href={'/profiles'}>
            <button
                className={'w-44 h-12 bg-[#a7d397] rounded-lg text-lg text-[#183d3d] hidden lg:block'}>
                {session.user.name}
            </button>
        </Link>
    )
}

export default UserButton;