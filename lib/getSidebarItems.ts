import {AiOutlineFire, AiOutlineInstagram} from 'react-icons/ai';
import {FiHome, FiCode, FiVideo, FiGithub, FiTwitter, FiLinkedin} from 'react-icons/fi';
import {NavItemsType, SocialItemsType} from "@/types";

export function getSidebarItems(): NavItemsType {
    return {
        Home: {
            Icon: FiHome
        },
        Trending: {
            Icon: AiOutlineFire
        },
        Snippets: {
            Icon: FiCode
        },
        Videos: {
            Icon: FiVideo
        }
    }
}

export function getSocialItems(): SocialItemsType {
    return {
        Instagram: {
            Icon: AiOutlineInstagram,
            color: "red",
            link: 'https://www.instagram.com/mishrank_mkp25675/'
        },
        Github: {
            Icon: FiGithub,
            color: "green",
            link: 'https://github.com/niketvns'
        },
        Twitter: {
            Icon: FiTwitter,
            color: "blue",
            link: 'https://twitter.com/Niketmishravns'
        },
        LinkedIn: {
            Icon: FiLinkedin,
            color: "darkBlue",
            link: 'https://www.linkedin.com/in/niket-kumar-mishra-37ab5a215/'
        }
    }
}