import React from 'react';
import Image from "next/image";
import Link from "next/link";
import noOrder from './../../../public/assets/images/no_order.svg'

function NothingAdded({text}:any) {
    return (
        <>
            <div className={'w-full h-screen border rounded-2xl flex flex-col items-center py-10 gap-12  my-10'}>
                <Image src={noOrder} width={500} height={5000} alt={'cart-empty'} />
                <h2 className={'text-2xl text-gray-600 font-semibold text-center'}>{text}</h2>
                <Link href={'/'}>
                    <button className={' w-64  h-12 text-xl text-white font-semibold rounded-xl bg-[#183d3d]'}>
                        بازگشت به منو رستوران
                    </button>
                </Link>
            </div>
        </>
    );
}

export default NothingAdded;