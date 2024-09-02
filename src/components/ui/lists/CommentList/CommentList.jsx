"use client"
import React from 'react';
import CommentCard from "@/components/ui/Cards/CommentCard/CommentCard";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import 'swiper/css/pagination';
import 'swiper/css';

function CommentList({commentsData}) {
    return (
        <>
            <section className={' w-full my-20  border-t-4 border-dashed border-gray-300'}>
                <div className={'bg-[#f4f4f4] w-52 flex place-content-center h-fit mx-auto  -translate-y-6'}>
                    <h2 className={'text-4xl font-bold text-gray-600 '}>نظرات مشتریان</h2>
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
                            slidesPerView: 3,
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
                    {commentsData.map((comment, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <CommentCard
                                    userImage={comment.userImage}
                                    userComment={comment.comment}
                                    userName={comment.userName}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </section>
        </>
    );
}

export default CommentList;
