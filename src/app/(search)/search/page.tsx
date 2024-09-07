"use client"
import React, {useEffect} from 'react';
import {useSearchStore} from "@/app/(search)/useSearchStore";
import ProductCard from "@/components/ui/Cards/productCard/page";

function Page() {
    const {searchResult,inputValue } = useSearchStore()


    return (
        <>
            <section className={'w-full px-8 py-6  border rounded-2xl my-10 flex flex-col gap-5'}>
                <h1 className={'text-4xl text-gray-700 font-semibold '}> نتایج جستجو {inputValue}</h1>
                <div className={'w-full  grid md:grid-cols-2 lg:grid-cols-3 gap-5'}>
                    {searchResult.map((product:object,index:number)=>{
                        return <ProductCard key={index} product={product}/>
                    })}
                </div>
            </section>
        </>
    );
}

export default Page;
