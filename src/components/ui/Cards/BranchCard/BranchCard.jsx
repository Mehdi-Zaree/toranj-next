import React from 'react';
import Image from "next/image";
import Link from "next/link";

function BranchCard({branchImage,branchName,BranchNumber,branchAddress}) {
    return (
        <>
            <div className={'w-full bg-white  flex flex-col items-center gap-5 rounded-2xl shadow group hover:shadow-xl duration-200 overflow-hidden '}>
                <Image src={branchImage} alt={'isfahan'} width={10000} height={10000} className={' w-full h-52'}/>
                <h4 className={'text-center text-2xl '}>نمایندگی { branchName}</h4>
                <div className={'flex gap-3 text-xl text-gray-700 font-semibold'}>
                    <span>{BranchNumber}</span>
                    <div className={'w-1 h-5 rounded bg-yellow-500'}></div>
                    <span>{BranchNumber}</span>
                </div>
                <h6 className={'text-2xl text-gray-500'}>{branchAddress}</h6>
                <Link  href={'/'} className={'w-full flex justify-center'}>
                    <button
                        className={'w-[80%] h-16  bg-[#193D3D] text-2xl text-white font-bold rounded-xl mb-5 scale-y-0 group-hover:scale-y-100 duration-200 origin-top'}>
                        اطلاعات بیشتر
                    </button>
                </Link>
            </div>
        </>
    );
}

export default BranchCard;
