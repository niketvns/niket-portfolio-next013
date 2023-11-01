import React, {FC} from 'react';
import Link from 'next/link'
import {getSidebarItems, getSocialItems} from "@/lib/getSidebarItems";
import {NavItemsType, SocialItemsType} from "@/types";
import SidebarHeader from "@/app/components/SidebarHeader";
import SidebarClose from "@/app/components/SidebarClose";
import SidebarBody from "@/app/components/SidebarBody";
import SidebarWrapper from './SidebarWrapper';

type Props = {}
const Sidebar: FC<Props> = ({}): JSX.Element => {
    const navItems: NavItemsType = getSidebarItems();
    const socialItems: SocialItemsType = getSocialItems();

    const customizeColor: {
        [key: string]: string
    } = {
        red: 'text-red-400',
        green: "text-green-400",
        blue: 'text-blue-400',
        darkBlue: 'text-blue-600'
    }

    return (
        // SidebarWrapper
        <SidebarWrapper>
            <SidebarHeader>
                <div className='flex gap-2'>
                    <div className="circle h-4 w-4 bg-highlight rounded-full cursor-pointer"></div>
                    <div className="circle h-4 w-4 bg-highlight rounded-full cursor-pointer"></div>
                </div>
            </SidebarHeader>
            <SidebarBody>
                <SidebarClose />
                <div className='max-h-[82vh] overflow-auto'>
                    {
                        Object.entries(navItems).map(([key, {Icon}]) => (
                            <Link
                                key={key}
                                href='/'
                                className='flex items-center gap-4 p-4 hover:-translate-y-0.5 transition-all ease-in-out duration-100'
                            >
                                {/* {console.log("sidebar: " + Icon)} */}
                                <Icon className='text-2xl' />
                                <span className='text-sm'>{key}</span>
                            </Link>
                        ))
                    }
                    <div className="social text-lg py-2 mt-2">Socials</div>
                    {
                        Object.entries(socialItems).map(([content, {Icon, color, link}]) => (
                            <Link
                                key={content}
                                className='flex items-center gap-4 p-4 hover:-translate-y-0.5 transition-all ease-in-out duration-100'
                                href={link}
                                target='_blank'
                                rel='noopener'
                            >
                                <Icon className={`text-2xl ${customizeColor[color]}`} />
                                <span className='text-sm'>{content}</span>
                            </Link>
                        ))
                    }
                </div>
            </SidebarBody>
        </SidebarWrapper >
    );
};

export default Sidebar;