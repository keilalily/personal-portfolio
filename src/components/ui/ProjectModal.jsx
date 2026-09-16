import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";

const PhoneFrame = ({ src, alt }) => {
  return (
    <div className="relative w-48 h-96 bg-black rounded-4xl p-3 shadow-2xl">
      
        {/* notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-10"></div>

        {/* screen */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden bg-black">
            <div className="absolute top-0 left-0 w-full h-3 bg-white"></div>
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className="w-full h-full object-cover pt-3"
            />
        </div>

    </div>
  );
}

const DesktopFrame = ({ src, alt, scrollable = false }) => (
    <div className="w-full overflow-hidden rounded-xl border border-border bg-surface">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3" aria-hidden="true">
            {[0, 1, 2].map((dot) => (
                <span key={dot} className="h-2 w-2 rounded-full bg-text-muted/40" />
            ))}
        </div>
        <div
            className={scrollable ? "aspect-video overflow-y-auto modal-scroll focus-visible:outline-2 focus-visible:outline-accent focus-visible:-outline-offset-2" : undefined}
            tabIndex={scrollable ? 0 : undefined}
            role={scrollable ? "region" : undefined}
            aria-label={scrollable ? `${alt} — scroll to explore` : undefined}
        >
            <img src={src} alt={alt} loading="lazy" className="block h-auto w-full" />
        </div>
    </div>
);

const ScreenshotFrame = ({ image }) => (
    <figure className={image.device === "phone" ? "w-48 max-w-full" : "w-full"}>
        {image.device === "phone" ? <PhoneFrame {...image} /> : <DesktopFrame {...image} />}
        {image.caption && (
            <figcaption className="mt-3 text-center text-sm text-text-muted">
                {image.caption}
            </figcaption>
        )}
    </figure>
);

const ScreenshotGallery = ({ images, title }) => {
    const [selectedDesktop, setSelectedDesktop] = useState(0);
    const screenshots = images.map((image, index) => ({
        ...image,
        device: image.device ?? "desktop",
        alt: image.alt || `${title} screenshot ${index + 1}`
    }))
        .filter((image) => typeof image.src === "string" && image.src.trim());
    const desktopImages = screenshots.filter((image) => image.device !== "phone");
    const phoneImages = screenshots.filter((image) => image.device === "phone");

    return (
        <div className="space-y-10">
            {desktopImages.length > 0 && (
                <div>
                    <ScreenshotFrame key={desktopImages[selectedDesktop]?.src ?? desktopImages[0].src} image={desktopImages[selectedDesktop] ?? desktopImages[0]} />
                    {desktopImages.length > 1 && (
                        <div className="mt-4 flex flex-wrap justify-center gap-3" aria-label="Desktop screenshots">
                            {desktopImages.map((image, index) => (
                                <button
                                    type="button"
                                    key={`${image.src}-${index}`}
                                    onClick={() => setSelectedDesktop(index)}
                                    aria-label={`Show ${image.caption || image.alt}`}
                                    aria-pressed={selectedDesktop === index}
                                    className={`w-24 sm:w-32 overflow-hidden rounded-lg border cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 ${selectedDesktop === index ? "border-accent" : "border-border hover:border-accent/40"}`}
                                >
                                    <img src={image.src} alt="" loading="lazy" className="aspect-video w-full object-cover object-top" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}
            {phoneImages.length > 0 && (
                <div className="flex flex-wrap justify-center gap-10">
                    {phoneImages.map((image, index) => <ScreenshotFrame key={`${image.src}-${index}`} image={image} />)}
                </div>
            )}
        </div>
    );
};

const ProjectModal = ({ project, onClose }) => {

    useEffect(() => {
        document.body.classList.add("modal-open");

        return () => {
            document.body.classList.remove("modal-open");
        };
    }, []);

    return (
        <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6 overflow-hidden"
            onClick={onClose}    
        >
            <div
                className="bg-surface-modal max-h-4/5 max-w-5xl w-full rounded-2xl relative flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="flex shrink-0 items-start justify-between gap-4 border-b border-border bg-surface-modal p-5 sm:px-10 sm:py-6">
                <h2 className="min-w-0 text-3xl font-dm-serif">{project.title}</h2>
                <button
                    type="button"
                    aria-label="Close project preview"
                    onClick={onClose}
                    className="shrink-0 text-xl text-text-muted cursor-pointer hover:text-accent"
                >
                    ✕
                </button>
                </header>
                <div className="min-h-0 overflow-y-auto modal-scroll p-5 sm:p-10">

                <p className="text-text-muted mb-8 max-w-2xl">
                    {project.description}
                </p>

                {/* Screenshot Gallery */}
                <ScreenshotGallery key={project.title} images={project.images ?? []} title={project.title} />

                {project.link && (
                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 font-jetbrains text-xs text-accent hover:text-accent-light transition-colors"
                            >
                                {project.linkLabel || "Live website"}
                                <FiExternalLink aria-hidden="true" />
                            </a>
                        )}
                    </div>
                )}

                </div>
            </div>
        </div>
    );
}

export default ProjectModal;