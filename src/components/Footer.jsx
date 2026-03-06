import { socialLinks } from "../data/data";

const Footer = () => {
    return (
        <footer id="contact" className="px-12 pt-20 pb-12 border-t border-border text-center">
            <div className="reveal">
                <div className="section-label justify-center">05 — Contact</div>
                <h2 className="font-dm-serif text-subtitle mb-4">
                    Let's build something<br/><em className="italic text-accent">together.</em>
                </h2>
                <p className="text-text-muted font-light text-base mb-10">
                    Open to opportunities, collaborations, and conversations.
                </p>
                <div className="flex justify-center gap-4 mb-16">
                    {Object.entries(socialLinks).map(([key, { link, icon: Icon, label }]) => (
                        <a
                            key={key}
                            href={link}
                            target="_blank"
                            className="w-12 h-12 flex items-center justify-center border
                                border-border rounded-full text-text-muted transition-all duration-300
                                hover:border-accent hover:text-accent hover:-translate-y-1"
                            aria-label={label}
                        >
                            <Icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>
                <div className="text-sm text-text-muted opacity-50">
                    © 2025 Kyla Marie Angeles.
                </div>
            </div>
        </footer>
    )
}

export default Footer;