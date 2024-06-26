import React from 'react';
import { Bars3Icon } from '@heroicons/react/20/solid';

interface Props {
    openNav: () => void;
}
const Nav = ({ openNav }: Props) => {
    const handleNavClick = (id: string): void => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            })
        }
        return;
    }
    return (
        <div className='w-[100%] fixed z-[1000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
            <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
                <h1 className='flex-[0.6] cursor-pointer  text-[25px] text-white font-bold'>
                    WEB
                    <span className='text-yellow-300'>DEV</span>
                </h1>
                <div className="nav-link" onClick={() => handleNavClick('home')}>HOME</div>
                <div className="nav-link" onClick={() => handleNavClick('about')}>ABOUT</div>
                <div className="nav-link" onClick={() => handleNavClick('skills')}>SKILLS & EXPERIENCE</div>
                <div className="nav-link" onClick={() => handleNavClick('projects')}>PROJECTS</div>
                <div className="nav-link" onClick={() => handleNavClick('contact us')}>CONTACT</div>
                <div onClick={openNav}>
                    <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
                </div>
            </div>
        </div>
    )
}

export default Nav