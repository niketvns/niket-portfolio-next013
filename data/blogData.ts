import {Blog} from "@/types";
import PositionImg from '@/public/images/position-property.png';
import DomImg from '@/public/images/DOM-tree.png';
import javaScriptImg from '@/public/images/javaScriptImg.avif';
import equalityOperator from '@/public/images/equality-operator.avif';
import asyncDeferImg from '@/public/images/async-defer-js.webp';

const BlogData: Blog[] = [
    {
        id: 1,
        title: 'Position Property in CSS',
        thumbnail: PositionImg,
        link: 'https://niket-points.hashnode.dev/position-property-in-css',
        date: '22-09-2022',
        duration: '3 Min',
        tags: ['CSS']
    },
    {
        id: 2,
        title: 'What is DOM ?',
        thumbnail: DomImg,
        link: 'https://niket-points.hashnode.dev/what-is-dom',
        date: '28-09-2022',
        duration: '3 Min',
        tags: ['JavaScipt']
    },
    {
        id: 3,
        title: 'Variables in JavaScript',
        thumbnail: javaScriptImg,
        link: 'https://niket-points.hashnode.dev/variables-in-javascript',
        date: '17-10-2022',
        duration: '4 Min',
        tags: ['JavaScipt']
    },
    {
        id: 4,
        title: '"==" vs "===" in JavaScript ?',
        thumbnail: equalityOperator,
        link: 'https://niket-points.hashnode.dev/loose-vs-strict-equality-in-js',
        date: '18-02-2023',
        duration: '2 Min',
        tags: ['JavaScipt']
    },
    {
        id: 5,
        title: 'Async and Defer in HTML',
        thumbnail: asyncDeferImg,
        link: 'https://medium.com/@niketvns/async-defer-in-html-f600ca34eba5',
        date: '22-10-2023',
        duration: '3 Min',
        tags: ['JavaScipt', 'Optimization']
    },
]

export default BlogData;