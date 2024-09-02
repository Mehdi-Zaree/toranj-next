import React from 'react';
import Image from "next/image";

function DiscountProductCard({productName,productImage,discountAmount,productPrice,productId}) {
    return (
       <>
           <div
               className={'flex flex-col gap-3 place-items-center '}
               key={productId}
           >
               <Image src={productImage} alt={'pizza'} width={1000} height={1000}
               className={'w-36 h-36'}/>
               <h4 className={' text-xl text-white font-semibold text-center '}>{productName}</h4>
               <span
                   className={'w-16 h-12 outline outline-[#ffa600] text-2xl rounded-lg flex justify-center items-center text-[#ffa600]   '}>
                   {`${discountAmount}%`}
               </span>
               <span className={'text-2xl font-bold text-white'}>{productPrice}</span>
               <button className={'w-32 h-16 rounded-2xl bg-[#1c5b5f] hover:bg-[#a7d397] hover:text-[#1c5b5f] text-gray-300 text-2xl duration-100'}>
                    سفارش
               </button>
           </div>
       </>
    );
}

export default DiscountProductCard;
