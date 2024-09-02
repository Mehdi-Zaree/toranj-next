"use client"
import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

function SearchButton(props) {
    const [searchOpen, setSearchOpen] = useState(false);
    const searchInput = useRef(null);
    const searchHandler = ()=>{
        setSearchOpen(!searchOpen)
        if(searchOpen){
            searchInput.current.blur();
        }else{
            searchInput.current.focus();
        }
    }
    return (
        <>
            <div className={' flex items-center border border-[#a7d397] rounded-lg overflow-hidden'}
                 onClick={searchHandler}
            >
                <input
                    type="text"
                    className={`origin-left ${searchOpen ? 'w-40' : 'w-0'} ${searchOpen ? 'px-4' : 'px-0'}   h-12 bg-[#183d3d] outline-none  placeholder-[#a7d397] text-[#a7d397] caret-[#a7d397]  duration-200`}
                    placeholder={'جستجو کنید...'}
                    ref={searchInput}
                />
                <button
                    className={`w-12 h-12 flex items-center justify-center`}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={'w-7 h-7 text-[#a7d397]'}/>
                </button>

            </div>
        </>
    );
}

export default SearchButton;
