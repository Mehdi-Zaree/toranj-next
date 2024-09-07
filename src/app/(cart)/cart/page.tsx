"use client"
import React from 'react';
import PaymentBox from "@/components/ui/cart ui/payment-box/index";
import CartList from "@/components/ui/cart ui/cart list";
import {useCartStore, useIsHydrated} from "@/app/(cart)/cartStore";
import NothingAdded from "@/components/NothingAdded/NothingAdded";


function Page() {
    const cart = useCartStore((state)=>state.cart);
    const hydrate = useIsHydrated()
    if(!hydrate){
        return null
    }
    if(cart.length === 0)
       return <NothingAdded text={'هنوز محصولی اضافه نکردی !'}/>

    return (
        <>
            <section className={'w-full  flex flex-col lg:px-20 items-center px-5 gap-5'}>
                <h1 className={'text-3xl text-gray-700 font-semibold my-5'}>
                    سبد خرید شما
                </h1>

                <div className={'w-full h-12  before:content-[""] before:flex before:w-3/4 md:before:w-[95%] before:mx-auto before:h-full before:border-b-2 before:border-dashed before:border-gray-400 before:-translate-y-1/2 relative  '}>

                    <div className={'w-full  h-full absolute top-0 right-0 flex justify-between items-center '}>
                        <div className={' flex flex-col items-center gap-1'}>
                            <span
                                className={'w-12 h-12 rounded-full bg-[#a7d397] flex place-content-center items-center'}>
                                <svg width="34" height="34" viewBox="0 0 35 34" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.4 9.20825H22.6001C27.4167 9.20825 27.8984 11.4608 28.2242 14.2091L29.4992 24.8341C29.91 28.3191 28.8334 31.1666 23.875 31.1666H11.1392C6.1667 31.1666 5.09003 28.3191 5.51503 24.8341L6.79005 14.2091C7.10171 11.4608 7.58337 9.20825 12.4 9.20825Z"
                    stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path
                    d="M11.8335 11.3333V6.37492C11.8335 4.24992 13.2502 2.83325 15.3752 2.83325H19.6252C21.7502 2.83325 23.1668 4.24992 23.1668 6.37492V11.3333"
                    stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M29.4143 24.1257H11.8335" stroke="#000" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"></path>
              </svg>
                            </span>
                            <span className={'flex text-gray-500 font-semibold'}>
                                سبد خرید
                            </span>
                        </div>
                        <div className={' flex flex-col items-center gap-1'}>
                            <span className={'w-12 h-12 rounded-full bg-white flex place-content-center items-center'}>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17.0001 19.0258C19.4412 19.0258 21.4201 17.0469 21.4201 14.6058C21.4201 12.1647 19.4412 10.1858 17.0001 10.1858C14.559 10.1858 12.5801 12.1647 12.5801 14.6058C12.5801 17.0469 14.559 19.0258 17.0001 19.0258Z"
                    stroke="#909090" strokeWidth="1.5"></path>
                <path
                    d="M5.12857 12.0275C7.91941 -0.240835 26.0952 -0.226668 28.8719 12.0417C30.5011 19.2383 26.0244 25.33 22.1002 29.0983C19.2527 31.8467 14.7477 31.8467 11.8861 29.0983C7.97607 25.33 3.49941 19.2242 5.12857 12.0275Z"
                    stroke="#909090" strokeWidth="1.5"></path>
              </svg>
                            </span>
                            <span className={'flex text-gray-500 font-semibold'}>
                                آدرس و نحوه ارسال
                            </span>
                        </div>
                        <div className={' flex flex-col items-center gap-1'}>
                            <span className={'w-12 h-12 rounded-full bg-white flex place-content-center items-center'}>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M25.5565 19.1958C24.9615 19.7767 24.6215 20.6125 24.7065 21.505C24.834 23.035 26.2365 24.1542 27.7665 24.1542H30.4582V25.84C30.4582 28.7725 28.064 31.1667 25.1315 31.1667H8.86817C5.93567 31.1667 3.5415 28.7725 3.5415 25.84V16.3059C3.5415 13.3734 5.93567 10.9792 8.86817 10.9792H25.1315C28.064 10.9792 30.4582 13.3734 30.4582 16.3059V18.3459H27.5965C26.8032 18.3459 26.0807 18.6575 25.5565 19.1958Z"
                    stroke="#909090" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path
                    d="M3.5415 17.5808V11.1067C3.5415 9.4209 4.57567 7.91917 6.14817 7.32417L17.3965 3.07417C19.1532 2.40833 21.0373 3.71171 21.0373 5.59588V10.9792"
                    stroke="#909090" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path
                    d="M31.9582 19.791V22.7095C31.9582 23.4886 31.3348 24.1261 30.5415 24.1544H27.7648C26.2348 24.1544 24.8323 23.0352 24.7048 21.5052C24.6198 20.6127 24.9598 19.7769 25.5548 19.1961C26.079 18.6577 26.8015 18.3461 27.5948 18.3461H30.5415C31.3348 18.3744 31.9582 19.0119 31.9582 19.791Z"
                    stroke="#909090" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M9.9165 17H19.8332" stroke="#909090" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"></path>
              </svg>
                            </span>
                            <span className={'flex text-gray-500 font-semibold'}>
                                پرداخت
                            </span>
                        </div>
                    </div>
                </div>
                <div className={'w-full flex flex-col items-center gap-2 lg:flex-row lg:my-20 '}>
                    <CartList/>
                    <PaymentBox/>
                </div>

            </section>
        </>
    );
}

export default Page;