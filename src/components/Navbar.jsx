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
                    <div className='flex items-center justify-between gap-x-4 text-[#FF9DA6]'>
                        <Link href="/" className='text-[14px] leading-[21px]'>CONTACT US</Link>
                        <Link href="/" className='text-[14px] leading-[21px]'>ABOUT US</Link>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Navbar