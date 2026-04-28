import { useState } from "react";
import { projects } from "../../data/data";
import ProjectModal from "../ui/ProjectModal";
import { FiExternalLink, FiEye } from "react-icons/fi";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    return (
        <section id="projects" className="section">
            <div className="reveal">
                <div className="section-label">04 — Projects</div>
                <h2 className="section-title">Selected work.</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,_minmax(340px,_1fr))] gap-6 max-w-full md:max-w-9/10">
                {projects.map((project, idx) => {
                    const Card = project.link ? "a" : "div";

                    return (
                        <Card
                            key={idx}
                            href={project.link ? project.link : undefined}
                            target={project.link ? "_blank" : undefined}
                            onClick={!project.link ? () => openModal(project) : undefined}
                            className={`reveal group bg-surface border border-border rounded-2xl p-8 transition-all duration-400
                                relative overflow-hidden text-inherit block cursor-pointer delay-15 before:content-[''] before:absolute before:top-0
                                before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-accent before:to-transparent before:opacity-0
                                before:transition-opacity before:duration-400 hover:border-accent/30 hover:shadow-2xl hover:before:opacity-100`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="font-jetbrains text-xs text-accent tracking-wide">
                                    {project.year}
                                </div>
                                <span className="text-text-muted transition-all duration-300 text-xl group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1">
                                    {project.link ? <FiExternalLink /> : <FiEye />}
                                </span>
                            </div>
                            <div className="font-dm-serif text-2xl mb-3 leading-[1.3]">
                                {project.title}
                            </div>
                            <p className="text-base text-text-muted font-light leading-[1.7] mb-5">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="font-jetbrains text-xs py-1.5 px-3 bg-surface-2 border border-border
                                        rounded-full text-text-muted transition-all duration-300 group-hover:border-accent/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {project.linkV1 && (
                                <a
                                    href={project.linkV1}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-1.5 mt-5 font-jetbrains text-xs text-text-muted
                                        hover:text-accent transition-colors duration-300"
                                >
                                    View original version <FiExternalLink className="text-[10px]" />
                                </a>
                            )}
                        </Card>
                    )
                })}
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    )
}

export default Projects;