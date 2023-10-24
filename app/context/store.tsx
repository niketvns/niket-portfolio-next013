'use client'

import {Context, createContext, useContext, useState, Dispatch, SetStateAction, ReactNode} from "react";

interface IcontextProps {
    isSidebar: boolean;
    setIsSidebar: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext: Context<IcontextProps> = createContext<IcontextProps>({
    isSidebar: false,
    setIsSidebar: (): boolean => false
});

const GlobalContextProvider = ({children}: {children: ReactNode}) => {
    const [isSidebar, setIsSidebar] = useState<boolean>(false);

    return (
        <GlobalContext.Provider value={{isSidebar, setIsSidebar}}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext);

export {GlobalContextProvider, useGlobalContext};