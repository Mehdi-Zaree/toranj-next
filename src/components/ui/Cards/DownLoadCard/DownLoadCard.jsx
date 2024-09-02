import React from 'react';
import Link from "next/link";

function DownLoadCard({APP}) {
    return (
        <>
            <Link href={'/'}>
                <div
                    className={'w-40 h-14 md:w-52 bg-white flex items-center justify-center group rounded-2xl hover:bg-[#a7d397] duration-200 cursor-pointer gap-3 '}>
                    <span className={'font-bold text-gray-400 group-hover:text-[#183d3d] duration-200 text-md'}>دریافت از</span>
                    <div className={'text-xl font-semibold text-[#a7d397] group-hover:text-white'}>
                        {APP}
                    </div>
                </div>
            </Link>
        </>
    );
}

export default DownLoadCard;
