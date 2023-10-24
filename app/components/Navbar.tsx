'use client'

import React, {FC, ReactNode} from 'react';
import {GoPerson} from 'react-icons/go';
import {RxHamburgerMenu} from 'react-icons/rx';
import {useGlobalContext} from '../context/store';

type Props = {}

const Navbar: FC<Props> = () => {

    const {setIsSidebar} = useGlobalContext();

    return (
        <nav className='sticky top-0 z-10 bg-primary p-4 flex justify-between items-center'>
            <div></div>
            <div className='flex items-center gap-4'>
                <button className='flex items-center gap-2 bg-highlight text-white/80 p-2 rounded text-sm'>
                    Contact Me
                    <GoPerson className="text-lg" />
                </button>
                <div
                    className="hamburger block lg:hidden text-2xl cursor-pointer hover:text-white/80 ease-in duration-100 select-none"
                    onClick={() => setIsSidebar(prev => !prev)}
                >
                    <RxHamburgerMenu />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;