import React from 'react'

interface IProps {
    border: string;
    skill: string
}

const SkillComponent: React.FC<IProps> = ({border, skill}) => {
    const colorVariants: {
        [key: string]: string
    } = {
        blue: 'border-blue-500/60',
        red: 'border-red-500/60',
        yellow: 'border-yellow-500/60',
        green: 'border-green-500/60',
        purple: 'border-purple-500/60'
    }

    return (
        <div className={`skill bg-primary border border-black ${colorVariants[border]} px-1.5 py-0.5 text-sm rounded-lg`}>
            {skill}
        </div>
    )
}

export default SkillComponent;