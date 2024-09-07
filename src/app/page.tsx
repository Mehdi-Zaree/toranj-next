import InfoHeroCard from '@/components/ui/home ui/InfoHeroCard/page';
import ProductsList from '@/components/ui/home ui/lists/ProductList/page';
import DiscountList from '@/components/ui/home ui/lists/discountList/DiscountList';
import ChefList from '@/components/ui/home ui/lists/ChefList/ChefList';
import DownLoadBox from '@/components/ui/home ui/DownLoadBox/DownLoadBox';
import ServiceList from '@/components/ui/home ui/lists/ServiceList/ServiceList';
import CommentList from '@/components/ui/home ui/lists/CommentList/CommentList';
import BranchList from '@/components/ui/home ui/lists/BranchList/BranchList';
import SocialList from '@/components/ui/home ui/lists/SocialList/SocialList';

async function fetchData(url: string) {
    // استفاده از `NEXT_PUBLIC_BASE_URL` برای تنظیم پایه URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
    const res = await fetch(`${baseUrl}${url}`, { cache: 'force-cache'  });
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
}
export default async function Home() {
    const [categoryData, productsData, servicesData, commentsData, branchesData, socialsData] = await Promise.all([
        fetchData('/api/categories'),
        fetchData('/api/products'),
        fetchData('/api/services'),
        fetchData('/api/comments'),
        fetchData('/api/branches'),
        fetchData('/api/socials')
    ]);
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
