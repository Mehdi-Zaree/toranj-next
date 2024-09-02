import React from 'react';
import SignInButton from "@/components/ui/header ui/user-button-client/signInButton";
import SearchButton from "@/components/ui/buttons/search button/searchButton";
import NavMenu from "@/components/ui/header ui/navMenu/NavMenu";
import MobileNav from "@/components/ui/header ui/mobileNav/MobileNav";

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