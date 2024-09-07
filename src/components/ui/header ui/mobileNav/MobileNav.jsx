'use client'
import React from 'react';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouseChimney} from "@fortawesome/free-solid-svg-icons/faHouseChimney";
import {faBagShopping} from "@fortawesome/free-solid-svg-icons/faBagShopping";
import {faCartShopping, faUser} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {usePathname} from "next/navigation";
import {useCartStore, useIsHydrated} from "@/app/(cart)/cartStore";

function MobileNav(props) {
    const segment = usePathname()
    const hydrate = useIsHydrated()
    const totalItem = useCartStore((state)=>state.totalItem)
    return (
        <>
            <nav className={'w-full  flex md:hidden fixed bottom-0 left-0 z-50'}>
                <div className={'w-full  flex items-center justify-center  top-0 left-0'}>
                    <svg className="mobile-footer-img w-full " width="0" height="90" viewBox="0 0 375 72" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M187 35.5C199.384 35.5 210.274 28.7544 216.621 19.1246C219.648 14.5329 223.304 9.8664 227.558 6.35171C231.81 2.83856 236.63 0.5 242 0.5H375.5V72.5H-0.499939V0.5H132C137.37 0.5 142.19 2.83856 146.442 6.35171C150.696 9.8664 154.352 14.5329 157.379 19.1246C163.726 28.7544 174.616 35.5 187 35.5Z"
                            fill="white"></path>
                    </svg>
                    <div className={' w-full  h-32  absolute top-0 flex justify-center  gap-16  px-5'}>
                        {/*right div*/}
                        <div className={' flex justify-center gap-12   py-3'}>
                            <Link href={'/'}
                                  className={` ${segment === '/' ? 'text-[#183D3D]' : 'text-[#909090]'} duration-200 `}>
                                <li className={'flex flex-col items-center gap-1 text-sm'}>
                                    <FontAwesomeIcon icon={faHouseChimney} className={'w-5 h-5'}/>
                                    <span className={'font-bold'}>خانه</span>
                                    <span
                                        className={`w-1 h-1 rounded-full bg-[#faa631] ${segment === '/' ? 'flex' : 'hidden'}`}></span>
                                </li>
                            </Link>
                            <Link href={'/orders'}
                                  className={`${segment === '/orders' ? 'text-[#183D3D]' : 'text-[#909090]'} duration-200 `}>
                                <li className={'flex flex-col items-center gap-1 text-sm'}>
                                    <FontAwesomeIcon icon={faBagShopping} className={'w-5 h-5'}/>
                                    <span className={'font-bold'}>سفارشات </span>
                                    <span
                                        className={`w-1 h-1 rounded-full bg-[#faa631] ${segment === '/orders' ? 'flex' : 'hidden'}`}></span>
                                </li>
                            </Link>
                        </div>
                        {/*right div*/}
                        {/*cart*/}
                        <div
                            className={'flex w-16 h-16 rounded-full bg-[#183D3D] absolute -top-10 items-center justify-center '}>
                            <Link href={'/cart'}
                                  className={` ${segment === '/cart' ? 'text-white' : 'text-[#8CADAE]'} duration-200   `}>
                                <li className={' flex flex-col items-center gap-1  justify-center rounded-full  '}>
                                    <div className={'relative'}>
                                        <FontAwesomeIcon icon={faCartShopping} className={'text-2xl flex text-white '}/>
                                        <div
                                            className={'w-4 h-4 rounded-full flex items-center justify-center bg-[#faa631] text-white absolute -top-2 -right-2'}>
                                            {hydrate?totalItem:0}
                                        </div>
                                    </div>
                                </li>
                            </Link>
                        </div>
                        {/*cart*/}
                        {/*left div*/}
                        <div className={'flex justify-center gap-5    py-3 '}>
                            <Link href={'/favorites'}
                                  className={` ${segment === '/favorites' ? 'text-[#183D3D]' : 'text-[#909090]'} duration-200 `}>
                                <li className={'flex flex-col items-center gap-1 text-sm  w-16'}>
                                    <FontAwesomeIcon icon={faHeart} className={'w-5 h-5'}/>
                                    <span className={'font-bold cursor-pointer '}>علاقه مندی </span>
                                    <span
                                        className={`w-1 h-1 rounded-full bg-[#faa631] ${segment === '/favorites' ? 'flex' : 'hidden'}`}></span>
                                </li>
                            </Link>
                            <Link href={'/profile'}
                                  className={` ${segment === '/Profile' ? 'text-[#183D3D]' : 'text-[#909090]'} duration-200 flex w-full   `}>
                                <li className={'flex flex-col items-center gap-1 text-sm '}>
                                    <FontAwesomeIcon icon={faUser} className={'w-5 h-5'}/>
                                    <span className={'font-bold'}>پروفایل </span>
                                    <span
                                        className={`w-1 h-1 rounded-full bg-[#faa631] ${segment === '/Profile' ? 'flex' : 'hidden'}`}></span>
                                </li>
                            </Link>
                        </div>
                        {/*left div*/}

                    </div>
                </div>

            </nav>
        </>
    );
}

export default MobileNav;
