"use client"
import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import NavigationButton from "@/components/ui/swiper/NavigationButton/NavigationButton";
import ChefCard from "@/components/ui/Cards/ChefCard/ChefCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


function ChefList({productsData}) {
    return (
        <>
            <section className={' w-full my-20  border-t-4 border-dashed border-gray-300 flex flex-col justify-center '}>
                <div className={'bg-[#f4f4f4] w-64 flex place-content-center h-fit mx-auto  -translate-y-6'}>
                    <h2 className={'text-4xl font-bold text-gray-600 '}>پیشنهاد سرآشپز</h2>
                </div>
                <Swiper
                    modules={[Pagination,Navigation,Autoplay]}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        '@0.75': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '@1.00': {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        '@1.50': {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className={'w-full'}
                >
                    {productsData.map((product,productIndex) => {
                        if(product.productId<=15){
                            return(
                                <SwiperSlide key={product.productId} >
                                   <ChefCard
                                       productName={product.productName}
                                       productImage={product.productImage}
                                       productDescription={product.description}
                                       price={product.price}
                                   />
                                </SwiperSlide>
                            )
                        }
                    })}

                    <NavigationButton style={'w-full h-full absolute top-0 left-0'} buttonStyle={`bg-[#0F4E50] text-white`}/>
                </Swiper>
                <Link href={'/'}>
                    <button
                        className={'mx-auto w-40 h-12 bg-[#d4e6ce] rounded-2xl my-12 flex place-items-center justify-center gap-3 hover:gap-5 duration-200 '}>
                        <span className={'text-xl text-[#193D3D] font-bold'}>مشاهده همه</span>
                        <div
                            className={'w-6 h-6 bg-white text-xl rounded-lg flex items-center justify-center text-[#193D3D]'}>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </div>
                    </button>
                </Link>
            </section>
        </>
    );
}

export default ChefList;
