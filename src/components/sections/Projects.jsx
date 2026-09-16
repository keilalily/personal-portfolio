import { useState } from "react";
import { projects } from "../../data/data";
import ProjectModal from "../ui/ProjectModal";
import { FiExternalLink, FiEye } from "react-icons/fi";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const sortedProjects = [...projects].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
    });

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
                {sortedProjects.map((project, idx) => {
                    const hasScreenshots = project.images?.some((image) => {
                        const src = image.src;
                        return typeof src === "string" && src.trim().length > 0;
                    });
                    const opensModal = hasScreenshots || !project.link;
                    const actionClassName = "absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-2 focus-visible:outline-accent focus-visible:-outline-offset-4";
                    return (
                        <article
                            key={idx}
                            className={`reveal group flex flex-col h-full text-left w-full bg-surface border border-border rounded-2xl p-8 transition-all duration-400
                                relative overflow-hidden text-inherit cursor-pointer delay-15 before:content-[''] before:absolute before:top-0
                                before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-accent before:to-transparent before:w-0
                                before:transition-width before:duration-400 hover:border-accent/30 hover:shadow-2xl hover:before:w-full`}
                        >
                            {opensModal ? <button
                                type="button"
                                aria-label={`View ${project.title}`}
                                onClick={() => openModal(project)}
                                className={actionClassName}
                            /> : <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open ${project.title} in a new tab`}
                                className={actionClassName}
                            />}
                            <div className="flex items-start justify-between gap-4 mb-4">
                            {project.featured && (
                                <span className="flex w-fit font-jetbrains text-[10px] tracking-widest uppercase py-1 px-2.5
                                    bg-accent/10 text-accent rounded-full border border-accent/20">
                                    Featured
                                </span>
                            )}
                            <span className="ml-auto text-xl text-text-muted transition-colors group-hover:text-accent" aria-hidden="true">
                                {opensModal ? <FiEye /> : <FiExternalLink />}
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
                        </article>
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