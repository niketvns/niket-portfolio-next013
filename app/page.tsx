import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";
import ProfileSection from "@/app/components/ProfileSection";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineInstagram} from 'react-icons/ai'
import SectionWrapper from "@/app/components/SectionWrapper";
import {Blog, Project, SkillDetails} from "@/types";
import {getMainProjects, getOtherProjects} from "@/lib/getProjects";
import ProjectCard from "@/app/components/ProjectCard";
import {getSkills} from "@/lib/getSkills";
import SkillComponent from "./components/SkillComponent";
import {getBlogs} from "@/lib/getBlogs";
import BlogCard from "./components/BlogCard";
import SkillCard from "./components/SkillCard";
import {IoIosArrowForward} from "react-icons/io";
import OtherProjectCard from "./components/OtherProjectCard";


export default function Home() {

    const projects: Project[] = getMainProjects();
    const otherProjects: Project[] = getOtherProjects();
    const skillDetails: SkillDetails = getSkills();
    const blogs: Blog[] = getBlogs();

    return (
        <div className='flex gap-4'>
            <Sidebar />
            <main className='flex-1 pb-4 h-[100vh] overflow-auto'>
                <Navbar />

                {/* Profile */}
                <ProfileSection>
                    <div className='flex items-center flex-wrap justify-center gap-3'>
                        <Image
                            src='/images/niket_profile.png'
                            alt='Niket Mishra'
                            width={150}
                            height={150}
                            className='rounded-full w-28 aspect-square border-4 object-cover'
                            loading='lazy'
                        />
                        <div className="details flex flex-col gap-2">
                            <h1 className='text-xl font-bold text-white' >Niket Kumar Mishra</h1>
                            <div className="social flex gap-2 justify-between">
                                <p className='text-sm text-white/70'>@mishrank_mkp25675</p>
                                <Link
                                    href='https://www.instagram.com/mishrank_mkp25675/'
                                    className='text-3xl block md:hidden p-1.5 bg-black/40 rounded-lg cursor-pointer'
                                >
                                    <AiOutlineInstagram />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link
                        href='https://www.instagram.com/mishrank_mkp25675/'
                        className='text-3xl md:flex items-center hidden p-1.5 bg-black/80 rounded-lg cursor-pointer'
                    >
                        <AiOutlineInstagram />
                        <span className='text-sm'>Follow me on Instagram</span>
                    </Link>
                </ProfileSection>

                {/* Projects */}
                <SectionWrapper>
                    <h1 className='text-xl text-white/80 font-semibold px-2'>Projects</h1>
                    <div className="projects grid gap-5 sm:gap-2 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-4 p-2 pt-8">
                        {
                            projects.map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))
                        }
                    </div>
                </SectionWrapper>

                {/* Skills */}
                <SectionWrapper>
                    <h1 className='text-xl text-white/80 font-semibold px-2 mb-6'>What I Know</h1>
                    <div className="skills px-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4">
                        {
                            Object.entries(skillDetails).map(([tech, {skills}]) => (
                                <SkillCard key={tech} tech={tech} skills={skills} />
                            ))
                        }
                    </div>
                </SectionWrapper>

                {/* More Projects */}
                <SectionWrapper>
                    <h1 className='text-xl text-white/80 font-semibold px-2 mb-6'>More Projects</h1>
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 px-2">
                        {
                            otherProjects.map(project => (
                                <OtherProjectCard key={project.id} project={project} />
                            ))
                        }
                    </div>
                </SectionWrapper>

                {/* Blogs */}
                <SectionWrapper>
                    <h1 className='text-xl text-white/80 font-semibold px-2 mb-6'>Blogs</h1>
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 px-2">
                        {
                            blogs.map(blog => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))
                        }
                    </div>
                </SectionWrapper>
            </main>
        </div >
    )
}
