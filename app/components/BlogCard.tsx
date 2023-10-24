import {Blog} from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BsCalendarDate} from 'react-icons/bs'

type TProps = {
    blog: Blog
}

const BlogCard: React.FC<TProps> = ({blog}) => {
    return (
        <Link
            className='flex flex-col gap-1 overflow-hidden rounded-lg cursor-pointer card-primary'
            href={blog.link}
            key={blog.id}
            target='_blank'
            rel='noopener noreferer'
        >
            <Image
                src={blog.thumbnail}
                alt={blog.title}
                className='h-32 object-cover rounded-lg hover:scale-105 transition-all duration-500 ease-in-out'
            />
            <div className='py-3 md:pb-5 px-2 flex flex-col gap-1.5'>
                <h2 className='font-bold'>{blog.title}</h2>
                <div className='flex gap-4 text-info text-sm'>
                    <span className='flex items-center gap-2'> <BsCalendarDate /> {blog.date}</span>
                    <span className='flex items-center gap-1'> <AiOutlineClockCircle /> {blog.duration}</span>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard;