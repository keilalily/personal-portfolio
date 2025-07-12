import { projects } from "../data/data";
import { BsArrowRightShort } from "react-icons/bs";
import Chip from "./Chip";

export default function Projects() {
    return (
        <section
            id="projects"
            className='section'
        >
            <h2 className='heading-2'>
                Projects
            </h2>
            <div className='flex flex-col gap-6 md:gap-6 w-full'>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className='flex flex-col w-full lg:flex-row lg:gap-6 rounded-lg border-2 border-transparent lg:p-6 lg:hover:border-secondary/10 lg:hover:shadow-lg transition-all duration-300'
                    >
                        <span className='hidden text-accent lg:flex text-base w-1/6'>
                                {project.year}
                        </span>
                        <div className='flex flex-col gap-1 lg:gap-3 w-full'>
                            <h3 className='text-xl md:text-2xl font-semibold text-primary hover:text-primary/80'>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.title}
                                    <BsArrowRightShort className='inline-block ml-1 -rotate-45' />
                                </a>
                            </h3>
                            <span className='flex text-accent lg:hidden text-sm md:text-lg'>
                                {project.year}
                            </span>
                            <p className='text-secondary text-sm md:text-base'>
                                {project.description}
                            </p>
                            <div className='flex flex-wrap gap-2'>
                                {project.tags.map((tag, tagIndex) => (
                                    <Chip
                                        key={tagIndex}
                                        label={tag}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}