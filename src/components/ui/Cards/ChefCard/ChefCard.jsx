import React from 'react';
import Image from "next/image";

function ChefCard({productImage,productName,productDescription,price}) {
    return (
        <>
            <div className={'w-full h-full bg-white rounded-2xl flex flex-col justify-center items-center gap-4 py-8 px-8 shadow hover:shadow-2xl duration-200 '}>
                <Image src={productImage} alt={"شسبای"} width={10000} height={10000} className={'w-52 h-52'}/>
                <h5 className={'text-2xl font-bold  '}>{productName}</h5>
                <p className={'text-center text-lg leading-7 text-gray-400 line-clamp-2'}>{productDescription}</p>
                <span className={'text-2xl font-semibold'}>{price} تومان </span>
                <button className={'w-full h-20 bg-[#ededed] rounded-2xl text-2xl hover:bg-[#193d3d] hover:text-white font-semibold text-gray-400 duration-200'}>افزودن به سبد خرید</button>
            </div>
        </>
    );
}

export default ChefCard;
