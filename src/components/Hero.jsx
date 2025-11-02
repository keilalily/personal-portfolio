import { useState, useEffect } from "react";
import { aboutMe, navLinks, socialLinks } from "../data/data";

export default function Hero() {
    const [active, setActive] = useState('#about');

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = 'Kyla_Marie_Angeles_Resume_Public.pdf';
        link.download = 'Angeles_Kyla_Marie_Resume.pdf';
        link.click();
        link.remove();
    }

    useEffect(() => {
        const sections = Object.values(navLinks).map(link =>
            document.querySelector(link.href)
        );

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActive(`#${entry.target.id}`);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px 0px -60% 0px',
                threshold: 0.1
            }
        );

        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <header className='flex flex-col gap-4 items-start lg:h-screen lg:justify-between p-8 md:p-16 lg:border-r lg:border-secondary/10'>
            <div className='flex flex-col gap-2 md:gap-3'>
                <h1 className='flex flex-col gap-2 font-poppins text-3xl md:text-4xl font-bold text-heading'>
                    {aboutMe.name}
                    <span className='font-inter font-semibold text-xl md:text-2xl'>
                        {aboutMe.title}
                    </span>
                </h1>
                <p className='font-inter text-secondary text-sm md:text-lg'>
                    {aboutMe.description}
                </p>
            </div>

            <nav className='hidden lg:flex flex-col gap-8'>
                {Object.entries(navLinks).map(([key, { label, href }]) => (
                    <a
                        key={key}
                        href={href}
                        className={`font-poppins text-heading uppercase tracking-50 text-xl w-fit relative
                            after:absolute after:w-0 after:h-0.5 after:bg-heading after:bottom-0 after:left-0
                            hover:after:content[""] hover:after:w-full hover:after:bg-heading
                            after:transition-all after:duration-300
                            ${active === href ? 'after:w-full' : 'after:w-0'}`}
                    >
                        {label}
                    </a>
                ))}
            </nav>

            <button
                className='px-6 py-1.5 border-1 rounded-full text-heading font-poppins text-sm md:text-lg uppercase
                    hover:bg-primary hover:text-background hover:cursor-pointer transition-all duration-300'
                onClick={downloadCV}
            >
                Download CV
            </button>

            <div className='flex gap-2 md:gap-4'>
                {Object.entries(socialLinks).map(([key, {link, icon: Icon}]) => (
                    <a
                        key={key}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=''
                    >
                        <Icon className='w-6 h-6 md:w-8 md:h-8 text-heading/75 hover:text-heading' />
                        <span className='sr-only'>{key}</span>
                    </a>
                ))}
            </div>
        </header>
    )
}