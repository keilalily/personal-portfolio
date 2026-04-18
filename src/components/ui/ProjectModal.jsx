import { useEffect } from "react";

const PhoneFrame = ({ src }) => {
  return (
    <div className="relative w-48 h-96 bg-black rounded-4xl p-3 shadow-2xl">
      
        {/* notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-10"></div>

        {/* screen */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden bg-black">
            <div className="absolute top-0 left-0 w-full h-3 bg-white"></div>
            <img
                src={src}
                alt="app screenshot"
                className="w-full h-full object-cover pt-3"
            />
        </div>

    </div>
  );
}

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
                className="bg-surface-modal max-h-4/5 max-w-5xl w-full rounded-2xl p-10 relative overflow-y-scroll modal-scroll"
                onClick={(e) => e.stopPropagation()}
            >
                
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-xl text-text-muted hover:text-white"
                >
                    ✕
                </button>

                <h2 className="text-3xl font-dm-serif mb-4">{project.title}</h2>

                <p className="text-text-muted mb-8 max-w-2xl">
                    {project.description}
                </p>

                {/* Screenshot Gallery */}
                <div className="flex flex-wrap justify-center gap-10">
                    {project.images.map((img, i) => (
                        <PhoneFrame key={i} src={img} />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default ProjectModal;