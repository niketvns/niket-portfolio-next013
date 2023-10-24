import React, {FC} from 'react';


type Props = {
    children: React.ReactNode
}
const SidebarHeader: FC<Props> = ({children}) => {
    return (
        <div className='hidden xs:block p-5 pt-0'>
            {children}
        </div>
    );
};

export default SidebarHeader;