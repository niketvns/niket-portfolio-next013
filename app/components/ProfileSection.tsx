import React, {FC, ReactNode} from 'react';

type Props = {
    children: ReactNode
}

const ProfileSection: FC<Props> = ({children}) => {
    // BgImageProvider
    return (
        <section className="bg-[url('/images/cover.jpg')] bg-no-repeat bg-cover md:rounded">
            <div className='backdrop-blur-sm flex justify-center md:justify-between gap-3 p-6 rounded-lg items-center '>
                {children}
            </div>
        </section>
    );
};

export default ProfileSection;