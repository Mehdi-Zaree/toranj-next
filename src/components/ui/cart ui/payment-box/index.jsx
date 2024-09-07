import React from 'react';
import {useCartStore, useIsHydrated} from "@/app/(cart)/cartStore";

function Index() {
   const hydrate = useIsHydrated()
    const totalPrice = useCartStore((state)=>state.totalPrice)
    return (
        <>
            <div className={'lg:w-[60%] w-[95%] md:w-[75%] mx-auto flex flex-col h-full gap-8 py-10 items-center px-5 bg-white rounded-2xl'}>
                <span className={'flex  text-3xl font-semibold text-gray-600 text-center'}>جمع کل سبد خرید</span>
                <div className={'w-full border-b h-12 flex justify-between  md:px-16 lg:px-3 items-center '}>
                    <span className={'text-xl font-semibold text-gray-700'}>جمع جزء</span>
                    <span className={'text-xl text-gray-700'}>{hydrate?Number(totalPrice).toLocaleString('fa')+'تومان ' :"در حال محاسبه"} </span>
                </div>
                <div className={'w-full border-b h-12 flex justify-between  md:px-16 lg:px-3  '}>
                    <span className={'text-xl font-semibold text-gray-700'}>جمع کل</span>
                    <span className={'text-xl text-gray-700 font-semibold'}>{hydrate?Number(totalPrice).toLocaleString('fa')+'تومان ' :"در حال محاسبه"} </span>
                </div>
                <button className={'w-full h-16 text-2xl text-white bg-[#183d3d] rounded-xl'}>
                    ادامه جهت تسویه حساب
                </button>
            </div>
        </>
    );
}

export default Index;
