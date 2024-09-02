import React from 'react';
import ServiceCard from "@/components/ui/Cards/ServiceCard/ServiceCard";

function ServiceList({servicesData}) {
    return (
        <>
            <section className={' w-full my-40  border-t-4 border-dashed border-gray-300 flex flex-col justify-center '}>
                <div className={'bg-[#f4f4f4] w-64 flex place-content-center h-fit mx-auto  -translate-y-6'}>
                    <h2 className={'text-4xl font-bold text-gray-600 '}>خدمات ما</h2>
                </div>
                <div className={'grid grid-cols-2 gap-8 md:grid-cols-4'}>
                    {servicesData.map((service,index)=>{
                        return(
                            <ServiceCard
                                key={index}
                                serviceHeader={service.serviceHeading}
                                serviceDescription={service.serviceDescription}
                                serviceImage={service.serviceImage}
                                index={index}
                            />
                        )
                    })}
                </div>

            </section>
        </>
    );
}

export default ServiceList;
