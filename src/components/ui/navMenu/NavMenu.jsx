"use client"
import React from 'react';
import Image from "next/image";
import {APP_NAME} from "../../../../lib/constants";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouseChimney} from "@fortawesome/free-solid-svg-icons/faHouseChimney";
import {faBagShopping} from "@fortawesome/free-solid-svg-icons/faBagShopping";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {usePathname} from "next/navigation";

function NavMenu(props) {
    const segment = usePathname()
    return (
        <>
            <div className={'flex items-center gap-7 px-3 lg:pr-10'}>
                <Image src={'https://ezteam.ir/toranj/wp-content/uploads/2023/12/Frame-229.svg'} width={10000}
                       height={10000} alt={`${APP_NAME} logo`} className={'w-20 lg:w-32 '}/>
                <ul className={'  gap-5 hidden md:flex translate-y-1 '}>
                    <Link href={'/'}
                          className={` ${segment === '/' ? 'text-white' : 'text-[#8CADAE]'} duration-200 `}>
                        <li className={'flex flex-col items-center gap-1'}>
                            <FontAwesomeIcon icon={faHouseChimney} className={'w-5 h-5'}/>
                            <span className={'font-bold'}>خانه </span>
                            <span
                                className={`w-1 h-1 rounded-full bg-white ${segment === '/' ? 'flex' : 'hidden'} `}></span>
                        </li>
                    </Link>
                    <Link href={'/orders'}
                          className={` ${segment === '/orders' ? 'text-white' : 'text-[#8CADAE]'} duration-200 `}>
                        <li className={'flex flex-col items-center gap-1'}>
                            <FontAwesomeIcon icon={faBagShopping} className={'w-5 h-5'}/>
                            <span className={'font-bold'}>سفارشات </span>
                            <span
                                className={`w-1 h-1 rounded-full bg-white ${segment === '/orders' ? 'flex' : 'hidden'}`}></span>
                        </li>
                    </Link>
                    <Link href={'/favorites'}
                          className={` ${segment === '/favorites' ? 'text-white' : 'text-[#8CADAE]'} duration-200 `}>
                        <li className={'flex flex-col items-center gap-1'}>
                            <FontAwesomeIcon icon={faHeart} className={'w-5 h-5'}/>
                            <span className={'font-bold'}>علاقه مندی ها </span>
                            <span
                                className={`w-1 h-1 rounded-full bg-white ${segment === '/favorites' ? 'flex' : 'hidden'}`}></span>
                        </li>
                    </Link>
                    <Link href={'/cart'}
                          className={` ${segment === '/cart' ? 'text-white' : 'text-[#8CADAE]'} duration-200 `}>
                        <li className={'flex flex-col items-center gap-1 '}>
                            <div className={'relative'}>
                                <FontAwesomeIcon icon={faCartShopping} className={'w-5 h-5 flex '}/>
                                <div
                                    className={'w-4 h-4 rounded-full flex items-center justify-center bg-[#faa631] text-white absolute -top-2 -right-2'}>
                                    {0}
                                </div>
                            </div>

                            <span className={'font-bold'}>سبد خرید </span>
                            <span
                                className={`w-1 h-1 rounded-full bg-white ${segment === '/cart' ? 'flex' : 'hidden'}`}></span>

                        </li>
                    </Link>
                </ul>
            </div>
        </>
    );
}

export default NavMenu;
