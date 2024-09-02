import React from 'react';
import SocialCard from "@/components/ui/Cards/SocialCard/SocialCard";
import {faInstagram, faTelegram, faWhatsapp, faXTwitter} from "@fortawesome/free-brands-svg-icons";

function SocialList({socialsData}) {
    const socialIcons = [
        faInstagram,
        faWhatsapp,
        faXTwitter,
        faTelegram,
    ]
    return (
        <>
            <section className={' w-full my-40  border-t-4 border-dashed border-gray-300 flex flex-col justify-center '}>
                <div className={'bg-[#f4f4f4] w-80 flex place-content-center h-fit mx-auto  -translate-y-6'}>
                    <h2 className={'text-4xl font-bold text-gray-600 '}>راه های ارتباطی با ترنج</h2>
                </div>
                <div className={' lg:flex items-center justify-evenly gap-5'}>
                    {socialsData.map((social,index)=>{
                        return(
                            <SocialCard
                                key={index}
                                socialIcon={socialIcons[index]}
                                socialName={social.socialName}
                                socialLink={social.socialLink}
                            />
                        )
                    })}
                </div>
            </section>
        </>
    );
}

export default SocialList;

