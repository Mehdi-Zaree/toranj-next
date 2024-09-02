import React from 'react';
import Image from "next/image";

function CategoryCard({name,imageSrc,categoryIndex,cardIndex,setCategoryState}) {
    return (
        <>
                    <div
                        className={`w-32 h-36  rounded-xl ${categoryIndex.id === cardIndex?'bg-[#a7d397]':'bg-white'} p-2 cursor-pointer duration-100 shadow`}
                        onClick={()=>setCategoryState(cardIndex,name)}
                    >
                        <div className={`w-full h-full ${categoryIndex.id === cardIndex?'border-2':''} border-dashed border-black rounded-xl flex flex-col items-center justify-center gap-2`}>
                            <Image src={imageSrc} alt={''} width={50} height={50} className={'w-14 h-14'}/>
                            <h4 className={'font-bold text-xl'}>{name}</h4>
                        </div>
                    </div>
        </>
    );
}

export default CategoryCard;