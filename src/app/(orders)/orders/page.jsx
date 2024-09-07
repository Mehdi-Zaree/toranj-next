"use client"
import React from 'react';
import {useOrderStore} from "@/app/(orders)/orderStore";
import NothingAdded from "@/components/NothingAdded/NothingAdded";

function Page() {
const orders = useOrderStore((state)=>state.orders)

    if(orders.length === 0){
        return <NothingAdded text={"سفارشی ثبت نشده  است!"}/>;
    }
    return (
        <>
            <section>

            </section>
        </>
    );
}

export default Page;
