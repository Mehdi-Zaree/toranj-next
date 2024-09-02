import React from 'react';
import {auth} from "../../../auth";
import ProfileInput from "@/components/ui/profile ui/profile-input/ProfileInput";
import {SignOut} from "../../../lib/actions/user.action";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

async function Page() {
    const session = await auth()


    return (
        <>
            <h1 className={'text-center my-10 text-4xl text-gray-700'}>پروفایل شما</h1>
            <div className={'w-3/4 bg-white flex flex-col  mx-auto my-10 rounded-2xl p-8 '}>
                <form action={SignOut} className={' h-12 flex justify-end'} >
                        <button
                            className={'w-32 h-12 rounded-2xl outline outline-1 outline-[#a7d397] text-[#a7d397] flex gap-2 items-center justify-center'}
                            >
                            <FontAwesomeIcon icon={faArrowRightFromBracket} className={'text-[#a7d397]'}/>
                            خروج از حساب
                        </button>
                </form>
                <ProfileInput/>

            </div>
        </>
    );
}

export default Page;
