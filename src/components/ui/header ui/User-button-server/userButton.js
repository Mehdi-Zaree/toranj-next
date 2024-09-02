import React from 'react';
import {auth} from "../../../../../auth";
import Link from "next/link";

async function UserButton(props) {
    const session = await auth()
    return (
        <>
            <Link href={!session ? 'api/auth/signin' : '/profile'}>
                <button
                    className={'w-44 h-12 bg-[#a7d397] rounded-lg text-lg text-[#183d3d] hidden lg:block'}>
                    {!session?'ورود | ثبت نام':session.user.name}
                </button>
            </Link>
        </>
    )

}

export default UserButton;