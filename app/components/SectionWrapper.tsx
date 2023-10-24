import React, {FC, ReactNode} from 'react';

type Props = {
    children: ReactNode
}

const SectionWrapper: FC<Props> = ({children}) => {
    return (
        <div className='px-1 md:px-3 pt-6 md:pt-10'>
            {children}
        </div>
    );
};

export default SectionWrapper;