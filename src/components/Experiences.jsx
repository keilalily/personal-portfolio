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
            <div className="flex w-full gap-6">
                {experiences.map((experience, index) => (
                    <>
                        <div className="flex items-start rounded w-20">
                            <img
                                src={experience.logo}
                                alt={`${experience.company} logo`}
                                className="w-full object-contain rounded"
                            />
                        </div>
                        <div
                            key={index}
                            className="relative flex flex-col"
                        >
                            <h3 className="text-xl md:text-2xl font-semibold text-primary">
                                {experience.title}
                            </h3>
                            <p className="text-primary/90 text-base md:text-lg">
                                {experience.company}
                            </p>
                            <p className="text-accent text-sm md:text-base">
                                {experience.year}
                            </p>
                            <ul className="flex flex-col text-secondary text-sm md:text-base">
                                {experience.description.map((desc, index) => (
                                    <li key={index} className="flex items-baseline gap-4">
                                        <span class="bullet"></span>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                ))}
            </div>
        </section>
    )
}