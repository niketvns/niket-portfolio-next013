import React, {FC, ReactNode} from 'react';
import {Project} from "@/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
    project: Project
}

const ProjectCard: FC<Props> = ({project}) => {
    return (
        <Link
            href={project.github}
            target='_blank'
            rel='noopener'
            className='flex flex-col gap-2 bg-white rounded-lg overflow-hidden cursor-pointer'
        >
            <Image
                src={project.thumbnail}
                alt={project.title}
                className='max-h-56 min-h-32 md:h-32 object-cover border-b-2 hover:scale-105 transition-all duration-500 ease-in-out'
            />
            <div className='py-3 md:pb-5 px-4 flex flex-col gap-1.5'>
                <h2 className='text-black font-bold'>{project.title}</h2>
                <p className='flex flex-wrap gap-1 text-black text-xs'>
                    {
                        project.techStack.map((skill, index) => (
                            <span
                                className='bg-highlight text-white py-1 px-2 rounded-full'
                                key={index}
                            >
                                {skill}
                            </span>
                        ))
                    }
                </p>
            </div>
        </Link>
    );
};

export default ProjectCard;