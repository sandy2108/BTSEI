"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsCopy } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {
    const onClickCopy = () => {
        const addressToCopy = "factorysei1qyfgukz2q333fdx3sr07560set7r0v0qe2326a/BTSEI";
        if (addressToCopy) {
            navigator.clipboard.writeText(addressToCopy);
            toast.info('Copied address to clipboard!');
        }
    };


    return (
        <div className='relative w-full'>
            <div className='max-w-[1480px] mx-auto p-4'>
                <div className='grid grid-cols-1 md:grid-cols-12'>
                    <div className='col-span-6'>
                        <div className='md:mt-2 gap-16'>
                            <h1 className='text-[#FF9DA6] font-[ClashGrotest-Semibold] text-[64px] leading-[78px] shadow-md font-semibold text-shadow-md text-center md:text-left'>$BTSEI</h1>
                            <h2 className='text-[#FF9DA6] max-w-[400px] font-[ClashGrotest-Medium] text-[24px] md:text-[40px] md:leading-[48px] font-medium  tracking-wide leading-[32px] md:tracking-tighter text-center md:text-left my-1 text-balance'>
                                No Team, No Roadmap,
                                Just Satoshi’s Legacy
                            </h2>

                            <div className='max-w-[400px] md:block'>
                                <h3 className='text-[#FFFFFF] text-sm  font-[HelveticalNowDisplay] leading-5 tracking-tight md:tracking-wider  text-center md:text-left mt-2'>The meme coin that SEI deserves.
                                </h3>
                                <h3 className='text-[#FFFFFF] font-[HelveticalNowDisplay] mx-auto md:max-w-none mt-1 max-w-[350px] text-sm font-normal leading-5 tracking-tight md:tracking-wider text-center md:text-left'>
                                    Total supply: 21,000,000NO PRSEALE, NO TEAM TOKENS, NO BS.</h3>
                            </div>


                        </div>
                        <div className=' md:mt-15  my-10'>
                            <div className='w-full gap-4'>
                                <Link target='_blank' href="https://x.com/btsei_token" className="box text-[#FF9EA8] w-full md:w-[270px] ">
                                    x
                                </Link>
                                <Link href="https://coinhall.org/sei/sei1slanyyjzw06j0dr49tzkfnzjmx6wckhcpm75dx7azh50y0m2t5sq37vuzg" target="_blank" className="box text-[#FF9EA8] w-full md:w-[270px]">
                                    COINHALL
                                </Link>

                            </div>
                            <div>
                                <Link href="https://t.me/BTSEIToken" target="_blank" className="box text-[#FF9EA8] md:w-[270px] w-full">
                                    TELEGRAM
                                </Link>
                                <Link href="https://sei.astroport.fi/swap?to=usei&from=factory/sei1qyfgukz2q333fdx3sr07560set7r0v0qe2326a/BTSEI" target="_blank" className="box text-[#FF9EA8] md:w-[270px] w-full">
                                    ASTROPORT SWAP
                                </Link>

                            </div>



                        </div>
                    </div>
                    <div className='hidden md:flex col-span-6  items-end justify-end'>
                        <Image src="/Btc.png" width={850} height={650} alt="btcimage" />
                    </div>
                </div>
                <div className='md:flex  justify-between'>
                    <div
                        className='rectanglebg border-2 flex items-center justify-between border-[#FF9DA6] max-w-[530px] flex-1 px-5 py-3 gap-5'
                        style={{
                            backgroundImage: "url('/public/rectanglebg.png')",
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className='max-w-[200px] md:max-w-[300px] md:px-4 '>
                            <h1 className='flex items-center text-[#FF9DA6]'>Contract address: <BsCopy className='text-white font-bold mx-2 cursor-pointer ' size={13} onClick={onClickCopy} /></h1>
                            <p onClick={onClickCopy} className='flex cursor-pointer text-[#FFFFFF] break-all text-sm'>factorysei1qyfgukz2q333fdx3sr07560set7r0v0qe2326a/BTSEI </p>

                        </div>
                        <div>
                            <Image src="/rectangle.png" width={98} height={98} alt="rectangle" />
                        </div>

                    </div>
                    <div className='flex justify-center my-10 md:my-0 z-20'>
                        <div className='flex gap-5 items-end'>

                            <Link href="/" className='bg-black border border-solid border-[#FF9DA6] border-opacity-40 rounded-full p-2'>
                                <BsTwitterX className='text-white' size={18} />
                            </Link>
                            <Link href="https://t.me/BTSEIToken" className='bg-black border border-solid border-[#FF9DA6] border-opacity-40 rounded-full p-2'>
                                <FaTelegramPlane className='text-white' size={20} />
                            </Link>
                        </div>
                    </div>



                </div>




            </div>

            <div className='md:hidden col-span-6 items-end justify-end relative '>
                <Image src="/Btc.png" width={1000} height={800} alt="btcimage" />

                <div className='absolute bottom-0 right-0'>
                    <Image src="/Grid.png" width={800} height={600} />
                </div>
                <div className='absolute bottom-0 right-0'>
                    <Image src="/bottomright.png" width={800} height={600} />
                </div>
            </div>

            <div className='hidden md:flex fixed bottom-0 right-0'>
                <Image src="/bottomright.png" width={500} height={500} />
            </div>
            <div className='hidden md:flex fixed bottom-0 right-0 h-full w-auto'>
                <Image src="/Grid.png" width={1000} height={1000} />
            </div>

        </div >
    )
}

export default Hero
