'use client'

import React from 'react';
import Link from "next/link";

const Error = () => {
    return (
        <div className='grid place-content-center gap-5 justify-items-center h-[100vh] text-highlight'>
            Error Occured, Please try after sometime!
            <Link href='/' className='btn-primary px-4 py-2 rounded-lg active:scale-95 ease-in-out duration-150 transition-all'>Try Again</Link>
        </div>
    );
};

export default Error;