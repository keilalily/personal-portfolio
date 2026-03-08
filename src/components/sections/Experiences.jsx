import { experiences } from "../../data/data";

const Experiences = () => {
    return (
        <section id="experience" className="section">
            <div className="reveal">
                <div className="section-label">03 — Experience</div>
                <h2 className="section-title">Where I've contributed.</h2>
            </div>
            <div className={`reveal max-w-full md:max-w-9/10 relative delay-15 before:content-[''] before:absolute
                before:top-0 before:left-0 before:bottom-0 before:w-px before:bg-gradient-to-b
                before:from-accent before:via-border before:to-transparent`}
            >
                {experiences.map((exp, idx) => (
                    <div key={idx} className={`pl-12 pb-8 relative before:content-[''] before:absolute before:-left-1 before:top-2
                        before:w-2.25 before:h-2.25 before:rounded-full before:bg-accent before:border before:border-bg`}
                    >
                        <div className="font-jetbrains text-xs text-accent mb-2 tracking-wide">
                            {exp.year}
                        </div>
                        <div className="font-dm-serif text-2xl mb-1 tracking-wide">
                            {exp.title}
                        </div>
                        <div className="text-base text-text-muted mb-4 font-light">
                            {exp.company}
                        </div>
                        <ul className="flex flex-col gap-2">
                            {exp.description.map((desc, idx) => (
                                <li key={idx} className={`text-text-muted font-light text-base pl-5 relative
                                    before:content-['→'] before:absolute before:left-0 before:text-accent before:text-sm`}
                                >
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experiences;