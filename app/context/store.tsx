'use client'

import {FormData} from "@/types";
import {Context, createContext, useContext, useState, Dispatch, SetStateAction, ReactNode, ChangeEvent, FormEvent} from "react";

interface IcontextProps {
    isSidebar: boolean;
    setIsSidebar: Dispatch<SetStateAction<boolean>>;
    formData: FormData;
    setFormData: Dispatch<SetStateAction<FormData>>;
    handleFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
    inputChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const GlobalContext: Context<IcontextProps> = createContext<IcontextProps>({
    isSidebar: false,
    setIsSidebar: (): boolean => false,
    formData: {
        name: '',
        email: '',
        mobile: '',
        message: ''
    },
    setFormData: (): FormData => ({
        name: '',
        email: '',
        mobile: '',
        message: ''
    }),
    handleFormSubmit: () => false,
    inputChangeHandler: () => false
});

const GlobalContextProvider = ({children}: {children: ReactNode}) => {
    const [isSidebar, setIsSidebar] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        mobile: '',
        message: ''
    })

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        console.log('submitted');
    }

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}))
    }

    return (
        <GlobalContext.Provider value={{isSidebar, setIsSidebar, formData, setFormData, handleFormSubmit, inputChangeHandler}}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext);

export {GlobalContextProvider, useGlobalContext};