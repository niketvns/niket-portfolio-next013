import React, {FC, ReactNode} from 'react';

type Props = {
    children: ReactNode
}

const SidebarBody: FC<Props> = ({children}) => {
    return (
        <div className='card-primary relative min-h-[60vh] p-5 pt-8 w-60 rounded flex-1'>
            {children}
        </div>
    );
};

export default SidebarBody;