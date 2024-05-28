import React from 'react'
import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/20/solid'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/linkedin'

const Footer = () => {
    return (
        <div className='pt-[8rem] pb-[4rem] bg-[#02050a]'>
            <div className='grid border-t-[1px] pt-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2
            w-[80%] mx-auto gap-[3rem]'>
                <div className='flex items-center space-x-6'>
                    <div className='md:w-[7.5rem] md:h-[6.5rem] w-[5rem] flex items-center justify-center rounded-full
                    bg-[#55e6a5]'>
                        <SocialIcon url="https://linkedin.com/in/aish-joshi" network="linkedin" bgColor="#0077B5" fgColor="#fff" />
                    </div>
                    <div>
                        <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[white]'>LinkedIn</h1>
                        <p className='text-[17px] w-[100%] text-white opacity-60'>www.linkedin.com/in/aish-joshi</p>
                    </div>
                </div>
                <div className='flex items-center space-x-6'>
                    <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] flex items-center justify-center rounded-full
                    bg-[#55e6a5]'>
                        <DevicePhoneMobileIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black' />
                    </div>
                    <div>
                        <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[white]'>Mobile</h1>
                        <p className='text-[17px] w-[100%] text-white opacity-60'>
                            +91 8114478299
                        </p>
                    </div>
                </div>
                <div className='flex items-center space-x-6'>
                    <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] flex items-center justify-center rounded-full
                    bg-[#55e6a5]'>
                        <EnvelopeIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black' />
                    </div>
                    <div>
                        <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[white]'>Email</h1>
                        <p className='text-[17px] w-[90%] text-white opacity-60'>
                            aishjoshi2002@gmail.com<br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer