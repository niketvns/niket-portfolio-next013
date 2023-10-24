import React from 'react'
import SkillComponent from './SkillComponent';

type Props = {
    tech: string;
    skills: Array<{
        skill: string;
        border?: string
    }>;
}

const SkillCard: React.FC<Props> = ({tech, skills}): JSX.Element => {
    return (
        <div className="card-primary py-4 px-4 rounded pb-8">
            <h2 className="text-xl mb-3 font-bold">{tech}</h2>
            <div className="flex flex-wrap gap-4">
                {
                    skills?.map(obj => (
                        <SkillComponent key={obj.skill} border={obj.border ?? 'black'} skill={obj.skill} />
                    ))
                }
            </div>
        </div>
    )
}

export default SkillCard;