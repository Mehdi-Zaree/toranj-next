import React from 'react';
import {auth} from "../../../../../auth";
import MobileNavClient from "@/components/ui/header ui/mobileNavClient/MobileNavClient";


async function  MobileNav(props) {
    const session = await auth()

    return (
        <>
            <nav className={'w-full  flex md:hidden fixed bottom-0 left-0 z-50'}>
                <MobileNavClient session={session} />
            </nav>
        </>
    );
}

export default MobileNav;
