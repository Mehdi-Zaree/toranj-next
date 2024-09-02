import React from "react";
import {Metadata} from "next";
import {redirect} from "next/navigation";
import {auth} from '../../../auth'
import {APP_NAME} from "../../../lib/constants";
import CredentialsSignInForm from "@/app/sign-in/credentials-singin-form";
import Image from "next/image";
export const metadata : Metadata = {
    title : `sign in ${APP_NAME}`
}

export default async function SignIn({
    searchParams: {callbackUrl}
}:{searchParams:{
    callbackUrl:string
    }}) {
  const session = await auth()
    if (session) {
        return redirect(callbackUrl|| '/')
    }
    return(
        <div className={'w-2/5 bg-[#183d3d] rounded-xl overflow-hidden flex flex-col gap-5 items-center justify-center py-10'}>
            <div >
                <Image src={'https://ezteam.ir/toranj/wp-content/uploads/2023/12/Frame-229.svg'} alt={'signInLogo'} width={10000} height={10000} className={'w-32'}/>
            </div>
            <h2 className={'text-2xl text-gray-100'}>
                ورود
            </h2>
            <CredentialsSignInForm/>
        </div>
    )
}



