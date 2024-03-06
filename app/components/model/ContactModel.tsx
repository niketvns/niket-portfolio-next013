import React, {Dispatch, FC, SetStateAction} from 'react'
import ContactForm from '../ContactForm';
import ModelClose from './ModelClose';
import {AiOutlineClose} from 'react-icons/ai';

type Props = {
    setIsContactModel: Dispatch<SetStateAction<boolean>>
}

const ContactModel: FC<Props> = ({setIsContactModel}): JSX.Element => {
    return (
        <div className='bg-white relative p-8 rounded flex flex-col gap-3'>
            <ModelClose>
                <AiOutlineClose onClick={() => setIsContactModel(prev => !prev)} />
            </ModelClose>
            <h1 className='text-black font-bold text-2xl'>Contact Me</h1>
            <ContactForm />
        </div>
    )
}

export default ContactModel;