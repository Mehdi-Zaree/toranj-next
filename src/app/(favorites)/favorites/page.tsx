
import React from 'react';
import FavoritesList from "@/components/ui/favorites ui/favoritesList/FavoritesList";
function Page() {

    return (
        <>
            <section className={'w-full flex flex-col gap-3 px-5 py-8 my-10  rounded-2xl'}>
                <h1 className={'font-semibold text-gray-700 text-3xl'}>علاقه مندی های شما</h1>
                <FavoritesList/>
            </section>
        </>
    );
}

export default Page;