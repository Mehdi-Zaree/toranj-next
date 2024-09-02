"use client"
import React, {useState} from 'react';
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Modal} from "@/components/ui/Modal/Modal";
import CloseModalButton from "@/components/ui/buttons/CloseModalButton/CloseModalButton";
import ProductDetail from "@/components/ui/Cards/ProductDetail/ProductDetail";

function ProductCard({productImage,productName,description,discount,discountAmount,price,rating,time}) {
    const [isModalOpen, setIsModalOpen] =useState(false);
    return (
        <>
            <Modal isOpen={isModalOpen} onClose={()=>{
                setIsModalOpen(false)
            }} >
                <ProductDetail
                    setIsModalOpen={setIsModalOpen}
                    productImage={productImage}
                    productName={productName}
                    productPrice={price}
                    rating={rating}
                    time={time}
                    description={description}
                />
            </Modal>
                    <div
                        className={'w-full h-72  bg-white rounded-2xl shadow relative py-5 px-4 cursor-pointer'}
                        onClick={()=>setIsModalOpen(true)}
                    >
                        <div className={'w-full border-b-4 border-dashed  h-2/3 flex gap-3'}>
                            <Image
                                src={productImage}
                                width={100} height={100} alt={'pizza'} className={' w-32 h-32'}/>
                            <div className={'py-4 flex flex-col gap-5'}>
                                <h3 className={'text-2xl text-[#4c4c4c] font-semibold'}>{productName}</h3>
                                <p className={'line-clamp-2 md:text-xl leading-8 text-[#848484]'}>{description}</p>
                            </div>
                        </div>
                        <div className={'flex justify-between items-center  h-1/3'}>
                            <button
                                className={'w-14 bg-[#ededed] hover:bg-[#183d3d] text-gray-400  hover:text-gray-200 duration-100 h-14 border rounded-2xl flex items-center justify-center'}>
                                <FontAwesomeIcon icon={faPlus}/>
                            </button>
                            <div className={'w-32 h-full flex flex-col items-end p-1  gap-2 justify-center'}>
                                <div className={` gap-2 ${discount?'flex':'hidden'} `}>
                                    <div className={'line-through text-gray-500'}>
                                        {price}
                                    </div>
                                    <span
                                        className={'w-12 h-8 bg-[#ffa600] text-white rounded-lg flex justify-center items-center   '}>
                                        {`${discountAmount}%`}
                                    </span>
                                </div>
                                <div className={'font-bold text-xl'}>
                                    تومان {discount?price - (price*discountAmount/100):price}
                                </div>
                            </div>
                        </div>

                    </div>

        </>
    );
}

export default ProductCard;