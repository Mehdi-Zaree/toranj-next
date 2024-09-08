import React from "react";
import {Metadata} from "next";
import {redirect} from "next/navigation";
import {auth} from '../../../../auth'
import {APP_NAME} from "../../../../lib/constants";
import CredentialsSignInForm from "@/app/(auth)/sign-in/credentials-singin-form";
import Image from "next/image";
import logo from '@/app/logo.svg'
import staticFormTexts from "@/app/enums/static-form-texts";
export const metadata : Metadata = {
    title : `sign in ${APP_NAME}`
}

export default async function SignIn({
    searchParams: {callbackUrl}
}:{searchParams:{
    callbackUrl:string
    }}) {
  const session = await auth()
    console.log("----------------------------------")
    console.log(session)
    // اینجا هم چک میکنم ببینم چی توی کاربر باید باشه که من این رو رد کنم باید توکن بهش پاس بدیم
    console.log("----------------------------------")
    if (session?.user.token) {
        return redirect(callbackUrl|| '/')
    }
    return(
            <div
                className={'w-full lg:w-2/5 bg-[#183d3d] rounded-xl overflow-hidden flex flex-col gap-5 items-center justify-center py-10'}>
                <div>
                    <Image src={logo} alt={'signInLogo'}
                           width={10000} height={10000} className={'w-32'}/>
                </div>
                <h2 className={'text-2xl text-gray-100'}>
                    {staticFormTexts.signIn}
                </h2>
                <CredentialsSignInForm/>
            </div>
    )
}



