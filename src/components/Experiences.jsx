import { experiences } from "../data/data";

export default function Experiences() {
    return (
        <section
            id="experiences"
            className="section"
        >
            <h2 className="heading-2">
                Experiences
            </h2>
            <div className="flex flex-col w-full gap-6 md:gap-8">
                {experiences.map((experience, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-1"
                    >
                        <h3 className="text-xl md:text-2xl font-semibold text-primary">
                            {experience.title}
                        </h3>
                        <p className="text-primary/90 text-base md:text-lg">
                            {experience.company}
                        </p>
                        <p className="text-accent text-sm md:text-lg">
                            {experience.year}
                        </p>
                        <p className="text-secondary text-xs md:text-base">
                            {experience.description}
                        </p>
                            <span className="text-sm text-gray-500">{experience.date}</span>
                        </div>
                    ))}
                </div>
        </section>
    )
}