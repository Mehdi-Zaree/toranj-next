"use client"
import React, {useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {useSearchStore} from "@/app/(search)/useSearchStore";

function SearchButton() {
    const [searchOpen, setSearchOpen] = useState(false);
    const searchInput = useRef(null);
    const {products, fetchProduct,searchProduct} = useSearchStore()


    const searchHandler = ()=>{
        setSearchOpen(!searchOpen)
        if(searchOpen){
            searchInput.current.blur();
        }else{
            searchInput.current.focus();
        }
    }
    const searchInputHandler= ()=>{
        fetchProduct()
    }
    return (
        <>
            <div className={' flex items-center border border-[#a7d397] rounded-lg overflow-hidden'}
                 onClick={searchHandler}
            >
                <input
                    type="search"
                    className={`origin-left ${searchOpen ? 'w-40' : 'w-0'} ${searchOpen ? 'px-4' : 'px-0'}   h-12 bg-[#183d3d] outline-none  placeholder-[#a7d397] text-[#a7d397] caret-[#a7d397]  duration-200`}
                    placeholder={'جستجو کنید...'}
                    ref={searchInput}
                    onInput={searchInputHandler}
                />
                <Link href={!searchOpen ? '' : '/search'}>
                    <button
                        className={`w-12 h-12 flex items-center justify-center`}
                        onClick={()=>{
                            if(searchOpen === true && searchInput.current.value.length > 0) {

                                searchProduct(searchInput.current.value)
                            }
                        }}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={'w-7 h-7 text-[#a7d397]'}/>
                    </button>
                </Link>

            </div>
        </>
    );
}

export default SearchButton;
