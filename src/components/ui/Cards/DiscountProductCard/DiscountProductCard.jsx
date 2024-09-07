import React from 'react';
import Image from "next/image";
import {useCartStore} from "@/app/(cart)/cartStore";

function DiscountProductCard({product}) {
    const addToCart = useCartStore((state)=>state.addToCart)
    return (
       <>
           <div
               className={'flex flex-col gap-3 place-items-center '}
               key={product.productId}
           >
               <Image src={product.productImage} alt={'pizza'} width={1000} height={1000}
               className={'w-36 h-36'}/>
               <h4 className={' text-xl text-white font-semibold text-center '}>{product.productName}</h4>
               <span
                   className={'w-16 h-12 outline outline-[#ffa600] text-2xl rounded-lg flex justify-center items-center text-[#ffa600]   '}>
                   {`${product.discountAmount}%`}
               </span>
               <span className={'text-2xl font-bold text-white'}>{Number(product.price).toLocaleString('fa')}</span>
               <button
                    onClick={()=>{
                        alert(`${product.productName} به سبد خرید اضافه شد   `)
                        addToCart(product)
                    }}
                   className={'w-32 h-16 rounded-2xl bg-[#1c5b5f] hover:bg-[#a7d397] hover:text-[#1c5b5f] text-gray-300 text-2xl duration-100'}>
                    سفارش
               </button>
           </div>
       </>
    );
}

export default DiscountProductCard;
