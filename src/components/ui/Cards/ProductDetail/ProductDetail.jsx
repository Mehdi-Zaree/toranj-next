"use client"
import React from 'react';
import CloseModalButton from "@/components/ui/buttons/CloseModalButton/CloseModalButton";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import {Pagination} from "swiper/modules";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-regular-svg-icons";
import {faPlus, faStopwatch} from "@fortawesome/free-solid-svg-icons";
import {useCartStore} from "@/app/(cart)/cartStore";

function ProductDetail({setIsModalOpen, productImage, productName, productPrice, rating,time,description,product}) {
    const addToCart = useCartStore((state)=>state.addToCart)
    return (
        <div className={'lg:w-1/2 md:h-auto  w-full h-screen lg:flex  rounded-xl bg-white shadow-md relative gap-10 px-2 py-4 lg:py-10 transition-transform duration-300 transform-gpu'}>
            <CloseModalButton setIsModalOpen={setIsModalOpen}/>
            <div className={'flex flex-col w-full lg:w-1/3  '}>
                        <Image loading={'eager'} src={product.productImage} alt={product.productName} width={1000} height={10000}
                               className={' w-full mx-auto'}/>
            </div>
            <div className={'w-full lg:w-3/4 h-1/2 lg:h-full px-4 flex flex-col gap-3 '}>
                <div className={'w-full flex justify-between my-3'}>
                    <h3 className={'text-2xl text-gray-700 font-semibold'}>{product.productName}</h3>
                    <span className={'text-2xl text-gray-700 font-semibold'}> {Number(product.price).toLocaleString('fa')} تومان</span>
                </div>
                <div className={'lg:w-1/2 flex gap-8'}>
                    {product.averageRating === '0' ?
                        <div className={'flex items-center gap-1'}>
                            <FontAwesomeIcon icon={faStar} className={'text-[#FCB900]'}/>
                            <span className={'text-black '}>  نظری ثبت نشده است!</span>
                        </div>
                        : ''}
                    <div className={'flex items-center gap-2'}>
                        <FontAwesomeIcon icon={faStopwatch} className={'text-xl text-gray-500'}/>
                        <span>{product.timeOfPreparation} دقیقه</span>
                    </div>
                </div>
                <div className={'text-start my-5 flex flex-col gap-2 border-b-2 border-dashed'}>
                    <h4 className={'text-gray-500 text-xl font-semibold  '}>محتویات : </h4>
                    <p className={'leading-7 text-gray-500 w-full md:w-1/2 '}>{product.description}</p>
                </div>
                <button
                    onClick={()=>{
                        alert(`${product.productName} به سبد خرید اضافه شد   `)
                        addToCart(product)
                    }}
                    className={'flex items-center gap-2 w-32 h-12 bg-[#1C5B5F] justify-center text-white rounded-xl font-semibold'}>
                    <FontAwesomeIcon icon={faPlus}/>
                    افزودن

                </button>
            </div>

        </div>
    );
}

export default ProductDetail;
