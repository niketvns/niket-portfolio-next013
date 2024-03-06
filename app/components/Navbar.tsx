'use client'

import React, {FC, ReactNode, useState} from 'react';
import {GoPerson} from 'react-icons/go';
import {RxHamburgerMenu} from 'react-icons/rx';
import {useGlobalContext} from '../context/store';
import ModelWrapper from './model/ModelWrapper';
import ContactModel from './model/ContactModel';
import Button from './ui/Button';


type Props = {}

const Navbar: FC<Props> = (): JSX.Element => {
    const [isContactModel, setIsContactModel] = useState<boolean>(false);

    const {setIsSidebar} = useGlobalContext();

    return (
        <>
            <nav className='sticky top-0 z-10 bg-primary p-4 flex justify-between items-center'>
                <div></div>
                <div className='flex items-center gap-4'>
                    <div onClick={() => setIsContactModel(prev => !prev)}>
                        <Button>
                            Contact Me
                            <GoPerson className="text-lg" />
                        </Button>
                    </div>
                    <div
                        className="hamburger block lg:hidden text-2xl cursor-pointer hover:text-white/80 ease-in duration-100 select-none"
                        onClick={() => setIsSidebar(prev => !prev)}
                    >
                        <RxHamburgerMenu />
                    </div>
                </div>
            </nav>
            {
                isContactModel &&
                <ModelWrapper>
                    <ContactModel setIsContactModel={setIsContactModel} />
                </ModelWrapper>
            }
        </>
    );
};

export default Navbar;