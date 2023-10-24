'use client'

import React, {ReactNode, useState} from 'react'
import {useGlobalContext} from '../context/store'

type Props = {
    children: ReactNode
}

const SidebarWrapper: React.FC<Props> = ({children}) => {

    const {isSidebar} = useGlobalContext();

    return (
        <aside className={`p-6 absolute ${isSidebar ? 'left-0 pl-0' : '-left-[150%]'} transition-all ease-in-out duration-300 lg:static max-h-[100vh] z-20`}>
            <div className="toggle flex flex-col h-full">
                {children}
            </div>
        </aside>
    )
}

export default SidebarWrapper