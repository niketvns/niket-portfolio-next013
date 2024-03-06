'use client'

import React, {ChangeEvent, FC, FormEvent, useState} from 'react'
import {BsSend} from 'react-icons/bs';
import Button from './ui/Button';
import Input from './ui/Input';
import Textarea from './ui/Textarea';
import {useGlobalContext} from '../context/store';

type Props = {}

const ContactForm: FC<Props> = ({}): JSX.Element => {

    const {handleFormSubmit} = useGlobalContext();

    return (
        <form onSubmit={handleFormSubmit} className='flex flex-col gap-4 items-center'>
            <div className="form__input w-full flex flex-col gap-2">
                <span>Name</span>
                <Input
                    type="text"
                    name="name"
                    placeholder='ex: John Doe'
                />
            </div>
            <div className="form__input w-full flex flex-col gap-2">
                <span>Email</span>
                <Input
                    type="email"
                    name="email"
                    placeholder='ex: johndoe@example.com'
                />
            </div>
            <div className="form__input w-full flex flex-col gap-2">
                <span>Mobile No</span>
                <Input
                    type="number"
                    name="mobile"
                    placeholder='ex: +91'
                />
            </div>
            <div className="form__input w-full flex flex-col gap-2">
                <span>Message</span>
                <Textarea
                    name="message"
                    placeholder='Write your message...'
                />
            </div>
            <div className="form__button">
                <Button>
                    Send <BsSend />
                </Button>
            </div>
        </form >
    )
}

export default ContactForm