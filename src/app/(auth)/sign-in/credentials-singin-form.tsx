'use client'
import React from "react";
import {useSearchParams} from "next/navigation";
import {useFormState, useFormStatus} from 'react-dom'
import {signInWithCredentials} from "../../../../lib/actions/user.action";
import {signInDefaultValues} from "../../../../lib/constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function CredentialsSignInForm() {
    const [data, action] = useFormState(signInWithCredentials, {
        message: '',
        success: false,
    })
    console.log(data)
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/'

    const SignInButton = () => {
        const {pending} = useFormStatus()
        return (
            <button disabled={pending} className={'w-40 h-12 bg-[#1C5B5F] rounded-xl text-gray-200 '}>
                {pending ? 'در حال ورود' : 'ورود به حساب کاربری'}
            </button>
        )
    }
    return (
        <form action={action}
              className={'flex flex-col items-center gap-5'}>
            <input type="hidden" name={'callbackUrl'} value={callbackUrl}/>
            <div className={'w-full relative '}>
                <FontAwesomeIcon icon={faEnvelope} className={'absolute right-2 top-3 text-xl text-[#1C5B5F]'}/>
                <input
                    type="email"
                    className={'h-12  w-full rounded-xl px-8'}
                    placeholder={'try dashmosen@example.com'}
                    id={'email'}
                    name={'email'}
                    required={true}
                    defaultValue={signInDefaultValues.email}
                />
            </div>
            <div className={'w-full relative '}>
                <FontAwesomeIcon icon={faLock} className={'absolute right-2 top-3 text-xl text-[#1C5B5F]'}/>
                <input
                    type="text"
                    className={'h-12 outline outline-gray-200 w-full rounded-xl px-8'}
                    placeholder={'123456'}
                    id={'password'}
                    name={'password'}
                />
            </div>
            <div className={'w-full  rounded-xl *:text-[#1C5B5F] bg-[#a7d397] *:text-lg  flex flex-col p-4'} dir={'ltr'}>
                <span> dashmosen@example.com</span>
                <span> admin@example.com</span>
                <span>123456</span>
            </div>
            <div className={''}>
                <SignInButton/>
            </div>
            {data && !data.success && (
                <div className={'text-center text-red-700'}>{data.message}</div>
            )}
            {!data && (
                <div>
                    ارور ناشناخته رخ داده است.{""}
                    <button className={'w-40 h-12 bg-[#1C5B5F] rounded-xl text-gray-200 my-3 '} onClick={() => window.location.reload()}>
                        لطفا صفحه را بارگیری کنید
                    </button>
                </div>
            )}
            <div className={'text-gray-200'}>
                حساب کاربری ندارید؟
                <Link href={`/sign-up?callbackUrl=${encodeURIComponent(callbackUrl)}`} className={'mx-1 text-[#a7d397]'}>
                    ثبت نام
                </Link>
            </div>
        </form>
    )
}