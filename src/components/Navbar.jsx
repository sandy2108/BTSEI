import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='w-full '>
            <div className='max-w-[1480px] mx-auto p-4'>
                <div className='flex items-center justify-between'>
                    <div className=''>
                        <Image src="/Logo.png" alt="logo" width={60} height={60} />

                    </div>
                    <div className='flex items-center justify-between md:gap-x-10 gap-x-2 text-[#FF9DA6] z-20'>
                        <Link target='_blank' href="https://coinhall.org/sei/sei1slanyyjzw06j0dr49tzkfnzjmx6wckhcpm75dx7azh50y0m2t5sq37vuzg" className='text-[14px] leading-[21px]'>CHART</Link>
                        <Link target='_blank' href="https://sei.astroport.fi/swap?to=usei&from=factory/sei1qyfgukz2q333fdx3sr07560set7r0v0qe2326a/BTSEI" className='text-[14px] leading-[21px]'>BUY </Link>
                    </div>

                </div>

            </div>
            <div className='absolute top-0 left-0 opacity-12'>
                <Image src="/topleft.png" width={645} height={692} />
            </div>

        </div>
    )
}

export default Navbar