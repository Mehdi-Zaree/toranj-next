import ProductsList from "@/components/ui/home ui/lists/ProductList/page";
import {getAllCategories} from "../../lib/actions/category.action";
import {getAllProducts} from "../../lib/actions/products.action";
import InfoHeroCard from "@/components/ui/home ui/InfoHeroCard/page";
import DiscountList from "@/components/ui/home ui/lists/discountList/DiscountList";
import ChefList from "@/components/ui/home ui/lists/ChefList/ChefList";
import DownLoadBox from "@/components/ui/home ui/DownLoadBox/DownLoadBox";
import ServiceList from "@/components/ui/home ui/lists/ServiceList/ServiceList";
import {getAllServices} from "../../lib/actions/services.action";
import {getAllComments} from "../../lib/actions/comments.action";
import CommentList from "@/components/ui/home ui/lists/CommentList/CommentList";
import BranchList from "@/components/ui/home ui/lists/BranchList/BranchList";
import {getAllBranches} from "../../lib/actions/Branches.action";
import SocialList from "@/components/ui/home ui/lists/SocialList/SocialList";
import {getAllSocials} from "../../lib/actions/socials.actions";
import React, {ReactNode} from "react";



export default async function Home() {
    const categoryData = await getAllCategories()
    const productsData = await getAllProducts()
    const servicesData = await getAllServices()
    const commentsData = await getAllComments()
    const branchesData = await getAllBranches()
    const socialsData = await getAllSocials()

    return (
        <>
            <InfoHeroCard/>
            <ProductsList productsData={productsData} categoryData={categoryData}/>
            <DiscountList productsData={productsData}/>
            <ChefList productsData={productsData}/>
            <DownLoadBox/>
            <ServiceList servicesData={servicesData}/>
            <CommentList commentsData={commentsData}/>
            <BranchList branchesData={branchesData}/>
            <SocialList socialsData={socialsData}/>
        </>
    );
}

