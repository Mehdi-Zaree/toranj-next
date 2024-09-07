"use client"
import React from 'react';
import {useState,useEffect} from "react";
import CartCard from "@/components/ui/Cards/Cart-card/CartCard";
import {useCartStore,useIsHydrated} from "@/app/(cart)/cartStore";


function Index() {
    const hydrated = useIsHydrated()
const cart = useCartStore((state)=>state.cart)


    return (<>
            <ul className={'w-full flex flex-col items-end gap-5  px-5 md:px-10  my-28   '}>
                <div className={'w-3/4 h-12 hidden md:flex justify-evenly gap-4 items-center *:text-gray-600 *:md:text-xl px-2 '}>
                    <span className={' text-lg   '}>
                    محصول :
                    </span>
                    <span className={' text-lg '}>
                    قیمت :
                    </span>
                    <span className={' text-lg '}>
                    تعداد :
                    </span>
                    <span className={' text-lg '}>
                    جمع جزء :
                    </span>
                </div>
                <div className={'w-full flex flex-col gap-5 lg:overflow-y-scroll lg:h-64 '}>
                    {cart.map((product,index)=>{
                        if(hydrated){
                            return(
                                <CartCard key={index} product={product} index={index}/>
                            )
                        }else{
                            return null
                        }
                    })}
                </div>
            </ul>
        </>);
}

export default Index;
