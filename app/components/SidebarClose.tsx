'use client'

import React, {FC, ReactNode} from 'react';
import {AiOutlineClose} from "react-icons/ai";
import {useGlobalContext} from '../context/store';

type Props = {}
const SidebarClose: FC<Props> = () => {

    const {setIsSidebar} = useGlobalContext();

    return (
        <div
            className="close block lg:hidden absolute right-2 top-2 text-2xl text-end cursor-pointer"
            onClick={() => setIsSidebar(prev => !prev)}
        >
            <AiOutlineClose />
        </div>
    );
};

export default SidebarClose;