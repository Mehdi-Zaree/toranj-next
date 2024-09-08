import React from 'react';
import DownLoadCard from "@/components/ui/Cards/DownLoadCard/DownLoadCard";
import Image from "next/image";
import homeStaticTextEnums from "@/app/enums/static-text-enums";

function DownLoadBox() {

    return (
        <>
            <div className={'discount w-full lg:h-64 py-5  border bg-[#183d3d] rounded-xl lg:px-20 gap-5 items-center justify-start lg:flex relative my-24'}>
                <div className={'flex flex-col gap-4 p-5 md:items-center lg:items-start'}>
                    <h4 className={'flex gap-1 text-4xl text-white font-bold'}>دانلود <span className={'text-[#a7d397]'}>اپلیکیشن</span>تورنج </h4>
                    <p className={'text-[#6b9c9c] text-md '}>{homeStaticTextEnums.downloadText}</p>
                </div>
                <div className={'flex justify-center items-center gap-2'}>
                    <div className={'lg:grid flex flex-col grid-cols-2 gap-2'}>
                        <DownLoadCard APP={'بازار'}/>
                        <DownLoadCard APP={"مایکت"}/>
                        <DownLoadCard APP={"گوگل پلی"}/>
                        <DownLoadCard APP={"لینک مستقیم"}/>
                    </div>
                    <Image src={'/assets/images/toranjOnPhone.webp'} alt={'app'}
                           width={1000} height={1000} className={'w-40 lg:w-52'}/>
                </div>
            </div>
        </>
    );
}

export default DownLoadBox;
