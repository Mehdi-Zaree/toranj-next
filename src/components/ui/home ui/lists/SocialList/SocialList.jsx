import React from 'react';
import SocialCard from "@/components/ui/Cards/SocialCard/SocialCard";
import {faInstagram, faTelegram, faWhatsapp, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {getAllSocials} from "../../../../../../lib/actions/socials.actions";
import homeStaticTextEnums from "@/app/enums/static-text-enums";

async function SocialList({socialsData}) {
   const socials = await getAllSocials()
    const socialIcons = [
        faInstagram,
        faTelegram,
        faWhatsapp ,
        faXTwitter,
    ]
    return (
        <>
            <section className={' w-full my-40  border-t-4 border-dashed border-gray-300 flex flex-col justify-center '}>
                <div className={'bg-[#f4f4f4] w-80 flex place-content-center h-fit mx-auto  -translate-y-6'}>
                    <h2 className={'text-4xl font-bold text-gray-600 '}>{homeStaticTextEnums.connectionLinksWithToranj}</h2>
                </div>
                <div className={' lg:flex items-center justify-evenly gap-5'}>
                    {socials.map((social,index)=>{
                        return(
                          <SocialCard
                              key={index}
                              social={social}
                              socialIcons={socialIcons[index]}
                          />
                        )
                    })}
                </div>
            </section>
        </>
    );
}

export default SocialList;

