import React from 'react';
import Image from "next/image";

function CommentCard({userImage,userName,userComment}) {
    return (
        <>
            <div className={'w-full h-72 flex flex-col items-center gap-4 bg-white hover:bg-[#183d3d] rounded-2xl shadow p-5 duration-200 group hover:text-white'}>
            <Image src={userImage} alt={'comment1'} width={100} height={100} className={'w-32 h-32 rounded-full'}/>
                <h4 className={'text-3xl text-gray-600  group-hover:text-white duration-200'}>{userName}</h4>
                <p className={'text-center leading-8 text-xl text-gray-400 group-hover:text-gray-200 overflow-y-scroll'}>{userComment} </p>
            </div>
        </>
    );
}

export default CommentCard;
