import { aboutMe, techStack } from "../data/data";

export default function About() {
    return (
        <section 
            id="about"
            className='section'
        >
            <h2 className='heading-2'>
                About
            </h2>
            <p className='text-secondary text-sm md:text-lg'>
                {aboutMe.introduction}
            </p>
            <div className='flex flex-col gap-2 md:gap-3'>
                <h3 className='text-xl md:text-2xl font-semibold text-primary uppercase tracking-25'>
                    Tech Stack
                </h3>
                <div className='flex flex-wrap'>
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className='flex items-center gap-4 border-2 border-secondary/10 w-1/2 md:w-1/3
                                px-6 py-3 md:px-10 md:py-5 md:flex-col'
                        >
                            <img
                                src={tech.icon}
                                alt={`${tech.name} logo`}
                                className='w-8 h-8 md:w-14 md:h-14'
                            />
                            <span className='text-primary text-sm md:text-lg'>
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}