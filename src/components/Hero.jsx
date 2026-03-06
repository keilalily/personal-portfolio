const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center py-32 px-16 relative">
            <div className="max-w-4xl relative z-1">
                <div className={`inline-flex items-center gap-2.5 text-base tracking-widest
                    uppercase text-accent mb-8 font-medium opacity-0 animate-fade-up
                    before:content-[''] before:w-10 before:h-px before:bg-accent`}
                >
                    Frontend Developer
                </div>
                <h1 className="font-dm-serif text-hero leading-[1.05] font-normal mb-6 opacity-0 animate-fade-up">
                    Kyla Marie<br/><em className="italic text-accent">Angeles</em>
                </h1>
                <p className="text-desc text-text-muted max-w-2xl leading-[1.8] font-light mb-10 opacity-0 animate-fade-up">
                    From landing pages to full platforms, I build fast, flexible, and beautiful web experiences with modern technologies.
                </p>
                <div className="flex gap-4 opacity-0 animate-fade-up">
                    <a href="#projects" className="btn-primary">View Projects</a>
                    <a href="#contact" className="btn-outline">Get in Touch</a>
                </div>
            </div>
            <div className="absolute right-1/12 top-1/2 -translate-y-1/2 w-96 h-96 opacity-50 z-0">
                <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                    <circle cx="200" cy="200" r="180" stroke="var(--color-accent)" strokeWidth="0.5" opacity="0.4"/>
                    <circle cx="200" cy="200" r="140" stroke="var(--color-accent)" strokeWidth="0.5" opacity="0.3"/>
                    <circle cx="200" cy="200" r="100" stroke="var(--color-accent)" strokeWidth="0.5" opacity="0.2"/>
                    <circle cx="200" cy="200" r="60" stroke="var(--color-accent)" strokeWidth="0.5" opacity="0.15"/>
                    <line x1="20" y1="200" x2="380" y2="200" stroke="var(--color-accent)" strokeWidth="0.3" opacity="0.2"/>
                    <line x1="200" y1="20" x2="200" y2="380" stroke="var(--color-accent)" strokeWidth="0.3" opacity="0.2"/>
                </svg>
            </div>
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-up">
                <span className="text-xs tracking-25 uppercase text-text-muted">Scroll</span>
                <div className="w-px h-10 bg-gradient-accent animate-scroll-pulse"></div>
            </div>
        </section>
    )
}

export default Hero;