import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouseChimney} from "@fortawesome/free-solid-svg-icons/faHouseChimney";
import {faBagShopping} from "@fortawesome/free-solid-svg-icons/faBagShopping";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faCartShopping, faMagnifyingGlass, faUser} from "@fortawesome/free-solid-svg-icons";
import {APP_NAME} from "./../../../../lib/constants/index";
import SignInButton from "@/components/ui/buttons/signIn button/signInButton";
import SearchButton from "@/components/ui/buttons/search button/searchButton";
import NavMenu from "@/components/ui/navMenu/NavMenu";
import MobileNav from "@/components/ui/mobileNav/MobileNav";

const Header = () => {



    return (
        <>
            <header className={'w-full  lg:px-12 flex  '}>
                {/*header*/}
                <div className={'w-full h-24 bg-[#183D3D] rounded-xl flex items-center justify-between '}>
                    {/*right div*/}
                    <NavMenu/>
                    {/* left div*/}
                    <div className={'flex  ml-6 items-center gap-5 '}>
                        <SearchButton/>
                        <SignInButton/>
                    </div>
                    {/* left div*/}

                </div>
            </header>
            <MobileNav/>
            {/* mobile bottom nav*/}

        </>
    )
}
export default Header;