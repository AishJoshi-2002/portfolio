import Image from 'next/image'
import React from 'react'
import p1 from '../public/images/p1.jpg'
import p2 from '../public/images/p2.jpg'
import p3 from '../public/images/p3.jpg'
import p4 from '../public/images/p4.jpg'
import p5 from '../public/images/p5.jpg'


const Projects = () => {
    return (
        <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
            <h1 className="heading">
                Pro<span className="text-yellow-400">Jects</span>
            </h1>
            <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
                <div data-aos='fade-up'>
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relatvie w-[100%] h-[200px] md:h-[300px]">
                        <a href="https://github.com/AishJoshi-2002/clone-Netflix">
                            <Image src={p1} alt="To-DO App" layout="fill" className="object-contain"/>
                        </a>
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-delay='300'> 
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relatvie w-[100%] h-[200px] md:h-[300px]">
                        <a href="https://github.com/AishJoshi-2002/clone-Netflix">
                            <Image src={p2} alt="Streaming Service Platform Clone" layout="fill" className="object-contain"/>
                        </a>
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-delay='600'>
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relatvie w-[100%] h-[200px] md:h-[300px]">
                        <a href="https://github.com/AishJoshi-2002/React/tree/main/news-app">
                            <Image src={p3} alt="News App" layout="fill" className="object-contain"/>
                        </a>
                    </div>
                </div>
                {/* <div data-aos='fade-up' data-aos-delay='900'>
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relatvie w-[100%] h-[200px] md:h-[300px]">
                        <Image src={p4} alt="portfolio" layout="fill" className="object-contain"/>
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-delay='1200'>
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relatvie w-[100%] h-[200px] md:h-[300px]">
                        <Image src={p5} alt="portfolio" layout="fill" className="object-contain"/>
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-delay='1500'>
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relatvie w-[100%] h-[200px] md:h-[300px]">
                        <Image src={p2} alt="portfolio" layout="fill" className="object-contain"/>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Projects