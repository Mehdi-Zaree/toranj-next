"use client"
import React from 'react';
import {useFavoritesStore, useIsHydrated} from "@/app/(favorites)/favoritesStore";
import NothingAdded from "@/components/NothingAdded/NothingAdded";
import ProductCard from "@/components/ui/Cards/productCard/page";

function FavoritesList() {
    const hydrated = useIsHydrated()
    const favorites = useFavoritesStore((state)=>state.favorites)
    if(!hydrated){
    return null
    }
    if(favorites.length === 0 ){
        return <NothingAdded text={'هیچ محصولی به علاقه مندی ها اضافه نشده!'}/>;
    }

    return (
        <div className={'grid  md:grid-cols-2 lg:grid-cols-3 gap-5'}>
            {favorites.map((item:any,index:number)=>{
                if(hydrated){
                    return(
                        <ProductCard key={index} product={item}/>
                    )
                }else{
                    return null
                }
            })}
        </div>
    );
}

export default FavoritesList;