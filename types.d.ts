import {IconType} from "react-icons";

type NavItemsType = {
    Home: {
        Icon: IconType
    },
    Trending: {
        Icon: IconType
    },
    Snippets: {
        Icon: IconType
    },
    Videos: {
        Icon: IconType
    }
}

type SocialItemsType = {
    Instagram: {
        Icon: IconType;
        color: string;
        link: string;
    },
    Github: {
        Icon: IconType;
        color: string;
        link: string;
    },
    Twitter: {
        Icon: IconType;
        color: string;
        link: string;
    },
    LinkedIn: {
        Icon: IconType;
        color: string;
        link: string;
    }
}

type Project = {
    id: number;
    title: string;
    description: string;
    thumbnail?: staticImageData;
    Icon?: IconType;
    techStack: Array<string>;
    link: string;
    github: string;
    major?: boolean;
}


type Blog = {
    id: number;
    title: string;
    thumbnail: staticImageData;
    link: string;
    date: string;
    duration: string;
    tags: Array<string>;
}

type SkillDetails = {
    Frontend: {
        skills: Array<{
            skill: string;
            border?: string;
        }>
    },
    Backend: {
        skills: Array<{
            skill: string;
            border?: string;
        }>
    },
    Database: {
        skills: Array<{
            skill: string;
            border?: string;
        }>
    }
}