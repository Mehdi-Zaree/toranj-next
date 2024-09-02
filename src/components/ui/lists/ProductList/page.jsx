"use client"
import React, {useState} from 'react';
import CategoryCard from "@/components/ui/Cards/CategoryCard/page";
import ProductCard from "@/components/ui/Cards/productCard/page";
import {Modal} from "@/components/ui/Modal/Modal";


function ProductsList({categoryData,productsData}) {
    const [categoryIndex,setCategoryIndex] = useState({
        id:0,
        name:'ساندویچ'
    });
    const setCategoryState = (cardIndex,name)=>{
        setCategoryIndex({
            id:cardIndex,
            name:name,

        })
    }

    return (
        <>

            <div className={'w-full my-10 flex mx-auto items-center justify-start lg:justify-center gap-3 overflow-x-scroll '}>
                <div className={' flex gap-3 justify-start '}>
                    {categoryData.map((category,cardIndex) => {
                        return (
                            <CategoryCard
                                key={category.category_id}
                                imageSrc={category.categoryImage}
                                name={category.categoryName}
                                cardIndex={cardIndex}
                                categoryIndex={categoryIndex}
                                setCategoryState={setCategoryState}
                            />
                        )
                    })}
                </div>
            </div>
            <div className={'w-full  border-t-2 border-dashed border-gray-400 relative text-center flex flex-col items-center'}>
                <div className={'bg-[#f4f4f4] w-40 h-fit  -translate-y-6'}>
                    <h2 className={'text-4xl font-bold text-gray-600'}>{categoryIndex.name}</h2>
                </div>
                <div className={'w-full md:grid flex flex-col items-center grid-cols-2 px-2 lg:grid-cols-3 gap-5'} >
                    {productsData.map((product,productIndex) => {
                        if(product.categoryId === categoryIndex.id){
                            return(
                                <ProductCard
                                    key={product.productId}
                                    productName={product.productName}
                                    productImage={product.productImage}
                                    description={product.description}
                                    discountAmount={product.discountAmount}
                                    discount={product.discount}
                                    price={product.price}
                                    rating={product.averageRating}
                                    time={product.timeOfPreparation }

                                />
                            )
                        }
                    })}
                </div>
            </div>

        </>

    );
}

export default ProductsList;