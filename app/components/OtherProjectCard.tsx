import {Project} from '@/types'
import Link from 'next/link'
import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'

type Props = {
    project: Project
}

const OtherProjectCard: React.FC<Props> = ({project}) => {
    return (
        <Link
            href={project.github}
            key={project.id}
            className="flex justify-between gap-5 card-primary items-center p-4 cursor-pointer"
            target='_blank'
            rel='noopener noreferer'
        >
            <div className="icon text-xl">
                <project.Icon />
            </div>
            <div className="details flex-1">
                <h2 className="mb-2">{project.title}</h2>
                <p className="flex flex-wrap">
                    {
                        project.techStack.map((skill, ind) => (
                            <span key={ind} className="p-0.5 rounded-full text-xs text-info">{skill}{ind < project.techStack.length - 1 ? "," : ""}</span>
                        ))
                    }
                </p>
            </div>
            <div className="arrow">
                <IoIosArrowForward />
            </div>
        </Link>
    )
}

export default OtherProjectCard;