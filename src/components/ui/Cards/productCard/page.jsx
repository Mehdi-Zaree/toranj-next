"use client"
import React, {useState} from 'react';
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Modal} from "@/components/ui/Modal/Modal";
import ProductDetail from "@/components/ui/Cards/ProductDetail/ProductDetail";
import ImageSkeleton from "@/components/ui/loading/image-skeleton";
import {useCartStore} from "@/app/(cart)/cartStore";
import AddToFavorite from "@/components/ui/buttons/addToFavorite/AddToFavorite";

function ProductCard({product}) {
    const cart = useCartStore((state)=>state.cart)
    const addToCart = useCartStore((state)=>state.addToCart)
    const quantityPlus = useCartStore((state)=>state.quantityPlus)
    const [isModalOpen, setIsModalOpen] =useState(false);
    return (
        <>
            <Modal isOpen={isModalOpen} onClose={()=>{
                setIsModalOpen(false)
            }} >
                <ProductDetail
                    setIsModalOpen={setIsModalOpen}
                    product={product}
                />
            </Modal>
                    <div
                        className={'w-full h-72  bg-white rounded-2xl shadow relative py-5 px-4 '}

                    >
                        <div
                            className={'w-full border-b-4 border-dashed  h-2/3 flex gap-3 cursor-pointer hover:bg-gray-100 rounded duration-200'}
                            onClick={()=>setIsModalOpen(true)}
                        >
                            {
                                product.productImage ? (
                                    <Image
                                        src={product.productImage}
                                        loading={"lazy"}
                                        width={100} height={100} alt={'pizza'} className={' w-32 h-32'}/>
                                ) : (
                                    <ImageSkeleton/>
                                )
                            }

                            <div className={'py-4 flex flex-col gap-5'}>
                                <h3 className={'text-2xl text-[#4c4c4c] font-semibold'}>{product.productName}</h3>
                                <p className={'line-clamp-2 md:text-xl leading-8 text-[#848484]'}>{product.description}</p>
                            </div>
                        </div>
                        <div className={'flex justify-between items-center h-1/3'}>
                            <div className={'flex gap-2 items-center'}>
                                <button onClick={() => {
                                    addToCart(product)
                                    alert(`${product.productName} به سبد خرید اضافه شد   `)
                                }}
                                        className={'w-14 bg-[#ededed] hover:bg-[#183d3d] text-gray-400  hover:text-gray-200 duration-100 h-14 border rounded-2xl flex items-center justify-center'}>
                                    <FontAwesomeIcon icon={faPlus}/>
                                </button>
                                <AddToFavorite product={product}/>
                            </div>
                            <div className={'w-32 h-full flex flex-col items-end p-1  gap-2 justify-center'}>
                                <div className={` gap-2 ${product.discount ? 'flex' : 'hidden'} `}>
                                    <div className={'line-through text-gray-500'}>
                                        {Number(product.price).toLocaleString('fa')}
                                    </div>
                                    <span
                                        className={'w-12 h-8 bg-[#ffa600] text-white rounded-lg flex justify-center items-center   '}>
                                        {`${product.discountAmount}%`}
                                    </span>
                                </div>
                                <div className={'font-bold text-xl '}>
                                     {product.discount?Number(product.price-(product.price*product.discountAmount/100)).toLocaleString('fa'):Number(product.price).toLocaleString('fa')}تومان
                                </div>
                            </div>
                        </div>

                    </div>

        </>
    );
}

export default ProductCard;