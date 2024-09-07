import React from 'react';
import Image from "next/image";
import logo from '@/app/logo.svg'
import {APP_NAME} from "../../../lib/constants";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faClock, faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function  Footer() {
    return (
        <>
            <footer >
                <div
                    className={'w-full  bg-[#183d3d] px-2 md:px-8 py-6  rounded-2xl flex flex-col   gap-12 my-10 '}>
                    <div className={'w-full  h-32  p-1 md:flex  justify-between items-center gap-12 '}>
                        <Image src={logo} alt={`${APP_NAME} logo`} width={0} height={0} className={'w-36 lg:w-32 '}/>
                        <div className={' flex gap-4 text-lg'}>
                            <div className={'text-white font-bold'}>تماس با ترنج</div>
                            <span className={'text-[#A7D397]'}>|</span>
                            <div className={'font-bold flex '} dir={'ltr'}>
                                <span className={'text-[#FAA631]'}>021</span><span
                                className={'text-white'}>- 3259756 </span>
                            </div>
                        </div>
                    </div>
                    <div className={'flex-col md:flex-row flex'}>
                        <div className={'px-2 flex flex-col gap-3 '}>
                            <h3 className={'text-md text-[#d4d1cd]'}> درباره ی ترنج</h3>
                            <p className={'text-[#95a5a4] leading-7'}>به رستوران ما خوش آمدید! ما با محیط دلنشین، غذاهای
                                خوشمزه و خدمات عالی، تجربه‌ای لذت‌بخش برای شما فراهم می‌کنیم. همیشه خوشحال می‌شویم که
                                شما را
                                در میان مهمانانمان دیدار کنیم. با فضایی آرامش بخش و غذاهایی متنوع و لذیذ، رستوران ما
                                مناسبترین انتخاب برای تمام لحظات شاد و لذت بخش شماست.</p>
                            <div className={'flex justify-between md:justify-center'}>
                                <Image
                                    src={'/namad1.webp'}
                                    width={150} height={150} alt={'namad1'}/>
                                <Image
                                    src={'/namad2.webp'}
                                    width={150} height={150} alt={'namad2'}/>
                            </div>
                        </div>
                        <div className={'w-full flex justify-center gap-10  '}>
                            <ul className={'text-center'}>
                                <h3 className={'text-[#d4d1cd] mb-3'}>لینک های مفید</h3>
                                <li className={'text-[#95a5a4]'}>
                                    <Link href={'/'}>
                                        خانه
                                    </Link>
                                </li>
                                <li className={'text-[#95a5a4]'}>
                                    <Link href={'/orders'}>
                                        سفارشات
                                    </Link>
                                </li>
                                <li className={'text-[#95a5a4]'}>
                                    <Link href={'/orders'}>
                                        علاقمندی
                                    </Link>
                                </li>
                                <li className={'text-[#95a5a4]'}>
                                    <Link href={'/orders'}>
                                        سبد خرید
                                    </Link>
                                </li>
                                <li className={'text-[#95a5a4]'}>
                                    <Link href={'/orders'}>
                                        تماس با ما
                                    </Link>
                                </li>
                                <li className={'text-[#95a5a4]'}>
                                    <Link href={'/orders'}>
                                        درباره ما
                                    </Link>
                                </li>
                            </ul>
                            <ul className={'text-center'}>
                                <h3 className={'text-[#d4d1cd] mb-3'}>لینک های مفید</h3>
                                <li className={'text-[#95a5a4]'}>
                                    <Link href={'/'}>
                                        خانه
                                    </Link>
                                </li>
                                <li className={'text-[#95a5a4]'}>
                                    <Link href={'/orders'}>
                                        سفارشات
                                    </Link>
                                </li>
                                <li className={'text-[#95a5a4]'}>
                                    <Link href={'/orders'}>
                                        علاقمندی
                                    </Link>
                                </li>
                                <li className={'text-[#95a5a4]'}>
                                    <Link href={'/orders'}>
                                        سبد خرید
                                    </Link>
                                </li>
                                <li className={'text-[#95a5a4]'}>
                                    <Link href={'/orders'}>
                                        تماس با ما
                                    </Link>
                                </li>
                                <li className={'text-[#95a5a4]'}>
                                    <Link href={'/orders'}>
                                        درباره ما
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={'flex flex-col gap-3'}>
                            <h3 className={'text-white mb-3 text-lg'}>
                                اطلاعات تماس با مهدی زارعی
                            </h3>
                            <div className={'flex gap-2 items-center'}>
                                <FontAwesomeIcon icon={faEnvelope} className={'text-lg text-[#95a5a4]'}/>
                                <h4 className={'text-white font-bold'}>ایمیل:</h4>
                                <Link href={'mailto:mahdizarei22019@gmail.com'} className={'text-lg text-[#95a5a4]'}>
                                    mahdizarei22019@gmail.com
                                </Link>
                            </div>
                            <div className={'flex gap-3 items-center'}>
                                <FontAwesomeIcon icon={faPhone} className={'text-lg text-[#95a5a4]'}/>
                                <h4 className={'text-white font-bold'}>تماس :</h4>
                                <Link href={''} className={'text-lg text-[#95a5a4]'}>
                                    989366334236+
                                </Link>
                            </div>
                            <div className={'flex gap-3 items-center flex-wrap'}>
                                <FontAwesomeIcon icon={faClock} className={'text-lg text-[#95a5a4]'}/>
                                <h4 className={'text-white font-bold'}>ساعت کاری کافه رستوران تورنج:</h4>
                                <Link href={''} className={'text-lg text-[#95a5a4]'}>
                                    همه روزه : 8 صبح الی 11 شب
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'w-full md:flex justify-between items-center rounded-2xl bg-[#183d3d]  p-6 text-center'}>
                    <span className={'text-white font-bold'}>
                        تمامی حقوق این مینی پروژه توسط مهدی زارعی محفوظ است.
                    </span>
                    <div className={'text-2xl  flex justify-center gap-3 text-[#95a5a4] mt-2'}>
                        <Link href={'https://linkedin.com/in/mehdi-zri'}>
                            <FontAwesomeIcon icon={faLinkedin} className={''}/>
                        </Link>
                        <Link href={'https://github.com/Mehdi-Zaree'}>
                            <FontAwesomeIcon icon={faGithub}/>
                        </Link>
                        <Link href={'https://linkedin.com/in/mehdi-zri'}>
                            <FontAwesomeIcon icon={faInstagram}/>
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
