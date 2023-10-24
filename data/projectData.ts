import {Project} from "@/types";
import webhelpui from '@/public/images/webhelpui-img.png';
import todolistImg from '@/public/images/my-todolist.png';
import keepnoteImg from '@/public/images/my-keepnote.png';
import stochProfitImg from '@/public/images/stock-profit.png';
import learnTrianglesImg from '@/public/images/learn-triangles.png';
import cssArtsImg from '@/public/images/my-css-arts.png';
import metacart from '@/public/images/metacart.png';
import recvas from '@/public/images/recvas.png';
import cinemetrix from '@/public/images/cinemetrix.png';
import sociogram from '@/public/images/sociogram.png';
import {LuListTodo, LuTriangle} from 'react-icons/lu';
import {AiOutlineStock} from 'react-icons/ai';
import {SlNote} from 'react-icons/sl';
import {HiOutlinePaintBrush} from 'react-icons/hi2';

const ProjectData: Project[] = [
    {
        id: 1,
        description: '',
        title: 'Sociogram',
        thumbnail: sociogram,
        link: 'https://sociogramapp.netlify.app/',
        github: 'https://github.com/niketvns/sociogram',
        techStack: ['React', 'JavaScript', 'Tailwind', 'MockBee'],
        major: true
    },
    {
        id: 2,
        description: '',
        title: 'Cinematrix',
        thumbnail: cinemetrix,
        link: 'https://cinematrixvideos.netlify.app/',
        github: 'https://github.com/niketvns/cinematrix-video-gallary',
        techStack: ['React', 'JavaScript', 'Tailwind', 'MockBee'],
        major: true
    },
    {
        id: 3,
        description: '',
        title: 'MetaCartShop',
        thumbnail: metacart,
        link: 'https://metacartshop.netlify.app/',
        github: 'https://github.com/niketvns/metacart',
        techStack: ['React', 'JavaScript', 'CSS', 'MockBee'],
        major: true
    },
    {
        id: 4,
        description: '',
        title: 'WebHelpUI',
        thumbnail: webhelpui,
        link: 'https://webhelp-ui.netlify.app/',
        github: 'https://github.com/niketvns/webHelp-UI',
        techStack: ['HTML', 'JavaScript', 'CSS', 'MockBee'],
        major: true
    },
    {
        id: 5,
        description: '',
        title: 'RecVAS',
        thumbnail: recvas,
        link: 'https://recvas.netlify.app/',
        github: 'https://github.com/niketvns/recvas',
        techStack: ['React', 'CSS', 'JavaScript', 'React-Media-Recorder'],
        major: true
    },
    {
        id: 6,
        description: '',
        title: 'Stock-profit',
        thumbnail: stochProfitImg,
        link: 'https://nk-stock-profit-loss-calculator.netlify.app/',
        github: 'https://github.com/niketvns/stock-profit-loss-calculator',
        techStack: ['HTML', 'CSS', 'JS'],
        major: false,
        Icon: AiOutlineStock,
    },
    {
        id: 7,
        description: '',
        title: 'Learn Triangles',
        thumbnail: learnTrianglesImg,
        link: 'https://learn-triangles-by-niket.netlify.app/',
        github: 'https://github.com/niketvns/learn-triangles',
        techStack: ['HTML', 'CSS', 'JS'],
        major: false,
        Icon: LuTriangle,
    },
    {
        id: 8,
        description: '',
        title: 'CSS Arts',
        thumbnail: cssArtsImg,
        link: 'https://niket-css-arts.netlify.app/',
        github: 'https://github.com/niketvns/my-CSS-art-collection',
        techStack: ['HTML', 'CSS'],
        major: false,
        Icon: HiOutlinePaintBrush,
    },
    {
        id: 9,
        description: '',
        title: 'ToDoList',
        thumbnail: todolistImg,
        link: 'https://niketvns.github.io/ToDoList/',
        github: 'https://github.com/niketvns/ToDoList',
        techStack: ['React', 'CSS', 'JS'],
        major: false,
        Icon: LuListTodo
    },
    {
        id: 10,
        description: '',
        title: 'Keep Note',
        thumbnail: keepnoteImg,
        link: 'https://niketvns.github.io/keep-note/',
        github: 'https://github.com/niketvns/keep-note',
        techStack: ['React', 'CSS', 'JS'],
        major: false,
        Icon: SlNote,
    },
]

export default ProjectData;