import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faTelegram, faWhatsapp, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";






function SocialCard({social,socialIcons}) {
    return (
        <>
            <Link href={social.socialLink} target={"_blank"}>
                <div
                    className={'w-full lg:w-72 h-32 bg-white rounded-3xl hover:bg-[#183d3d] group cursor-pointer duration-200 flex gap-6 items-center justify-between px-5 my-3 '}>
                    <div className={'flex gap-3'}>
                        <FontAwesomeIcon icon={socialIcons}
                                         className={'text-4xl w-12 h-12 group-hover:text-white text-[#183d3d]'}/>
                        <div className={'text-gray-400 group-hover:text-gray-300'}>
                            در
                            <span
                                className={'text-[#183d3d] text-2xl font-semibold mx-1 group-hover:text-white'}>{social.socialName}</span>
                            <div>ترنج را دنبال کنید</div>
                        </div>
                    </div>
                    <div className={'w-12 h-12 rounded-2xl bg-[#f4f4f4] flex items-center justify-center'}>
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default SocialCard;