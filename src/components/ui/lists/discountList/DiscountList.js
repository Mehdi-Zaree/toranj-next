"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import DiscountProductCard from "@/components/ui/Cards/DiscountProductCard/DiscountProductCard";
import NavigationButton from "@/components/ui/swiper/NavigationButton/NavigationButton";

function DiscountList({productsData}) {
    return (
        <>
            <section className={' w-full my-20  border-t-4 border-dashed border-gray-300  '}>
                <div className={'bg-[#f4f4f4] w-52 flex place-content-center h-fit mx-auto  -translate-y-6'}>
                    <h2 className={'text-4xl font-bold text-gray-600 '}>تخفیفات ویژه</h2>
                </div>
                <div className={'discount w-full h-96 mx-auto rounded-2xl bg-[#193D3D] my-14 relative '}>
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
                                        if(product.discount){
                                            return(
                                                <SwiperSlide key={product.productId} >
                                                    <DiscountProductCard
                                                        discountAmount={product.discountAmount}
                                                        productImage={product.productImage}
                                                        productName={product.productName}
                                                        productPrice={product.price}
                                                        productId={product.productId}
                                                    />
                                                </SwiperSlide>
                                            )
                                        }
                                    })}

                            <NavigationButton style={'w-full h-full absolute top-0 left-0'}
                            buttonStyle={'bg-white text-[#0F4E50]'}
                            />
                        </Swiper>
                    </div>


            </section>
        </>
    );
}

export default DiscountList;
