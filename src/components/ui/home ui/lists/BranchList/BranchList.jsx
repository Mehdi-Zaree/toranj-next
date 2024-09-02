"use client"
import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import 'swiper/css/pagination';
import 'swiper/css';
import BranchCard from "@/components/ui/Cards/BranchCard/BranchCard";

function BranchList({branchesData}) {
    return (
        <>
            <section className={' w-full my-20  border-t-4 border-dashed border-gray-300'}>
                <div className={'bg-[#f4f4f4] w-64 flex place-content-center h-fit mx-auto  -translate-y-6'}>
                    <h2 className={'text-4xl font-bold text-gray-600 '}>نمایندگی های ترنج</h2>
                </div>
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    pagination={{clickable: true}}
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
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className={'w-full flex justify-center'}
                >
                    {branchesData.map((branch,index)=>{
                        return(
                            <SwiperSlide
                                key={index}
                            >
                                <BranchCard
                                    branchImage={branch.branchImage}
                                    branchAddress={branch.branchAddress}
                                    branchName={branch.branchName}
                                    BranchNumber={branch.branchNumber}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </section>
        </>
    );
}

export default BranchList;
