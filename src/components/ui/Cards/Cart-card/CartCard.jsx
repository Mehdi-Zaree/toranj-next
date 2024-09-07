"use client"
import React, {useState} from 'react';
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus, faX} from "@fortawesome/free-solid-svg-icons";
import {useCartStore} from "@/app/(cart)/cartStore";

function CartCard({product,index}) {
    const quantityPlus = useCartStore((state)=>state.quantityPlus)
    const quantityMinus = useCartStore((state)=>state.quantityMinus)
    const removeFromCart =useCartStore((state)=>state.removeFromCart)

    return (
        <li className={'w-full rounded-3xl bg-white px-6 py-2 md:py-5 flex flex-col md:flex-row gap-2 md:justify-between '}>

            <div className={'flex justify-between  md:flex-row-reverse md:justify-center gap-10 '}>
                <Image
                    src={product.image}
                    alt={'cart'} width={10000} height={10000} className={'w-16 md:w-20'}/>
                <button onClick={()=>{
                    removeFromCart(product.id)
                }}>
                    <FontAwesomeIcon icon={faX} className={'text-gray-400 md:text-xl '}/>
                </button>
            </div>
            <div className={'md:w-3/4 w-full flex flex-col md:flex-row justify-evenly  gap-2 '}>
                <div className={'flex justify-between items-center'}>
                <span className={'font-semibold text-lg text-gray-700 md:hidden md:text-2xl'}>
                    محصول :
                </span>
                    <span className={'text-gray-600 md:text-lg'}>
                    {product.name}
                </span>
                </div>
                <div className={'flex justify-between items-center'}>
                <span className={'font-semibold text-lg text-gray-700 md:hidden'}>
                    قیمت :
                </span>
                    <span className={'text-gray-600 md:text-lg'}>
                        {Number(product.price).toLocaleString('fa-ir')}
                </span>
                </div>
                <div className={'flex justify-between items-center'}>
                <span className={'font-semibold text-lg text-gray-700 md:hidden'}>
                    تعداد :
                </span>

                    <div className={'flex gap-2'}>
                        <button onClick={()=>{
                            quantityPlus(product.id)
                        }}>
                            <FontAwesomeIcon icon={faPlus} className={'text-gray-500'}/>
                        </button>
                        <span
                            className={'w-6  h-6 md:w-12 md:h-12 md:text-lg rounded-md flex items-center justify-center border border-[#1C5B5F] text-gray-600'}>
                            {product.quantity}
                        </span>
                        <button onClick={()=>{
                            if(product.quantity>1){
                                 quantityMinus(product.id)
                            }
                        }}>
                            <FontAwesomeIcon icon={faMinus} className={'text-gray-500'}/>
                        </button>
                    </div>

                </div>
                <div className={'flex justify-between items-center'}>
                <span className={'font-semibold text-lg text-gray-700 md:hidden'}>
                    جمع جزء :
                </span>
                    <span className={" text-gray-600 text-lg"}>
                    {Number(product.price*product.quantity).toLocaleString('fa-ir')} تومان
                </span>

                </div>
            </div>
        </li>
    );
}

export default CartCard;
