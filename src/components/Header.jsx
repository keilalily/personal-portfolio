import { useState } from "react";
import { navLinks } from "../data/data";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-10 px-6 py-4 md:px-12 md:py-6 flex justify-between items-center backdrop-blur-xl bg-bg/80 border-b border-border/50">

            <a href="#hero" className="font-dm-serif text-lg text-accent tracking-wide">
                K.M.A
            </a>

            <nav>
                {/* Hamburger (only <480px) */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden flex flex-col gap-1.5"
                >
                    <span className={`w-6 h-px transition ${open ? "rotate-45 translate-y-1.75 bg-accent" : "bg-text"}`} />
                    <span className={`w-6 h-px transition ${open ? "opacity-0" : "bg-text"}`} />
                    <span className={`w-6 h-px transition ${open ? "-rotate-45 -translate-y-1.75 bg-accent" : "bg-text"}`} />
                </button>

                {/* Desktop menu */}
                <ul className="hidden md:flex gap-10 items-center">
                    {Object.entries(navLinks).map(([key, { label, href }]) => (
                        <a
                            key={key}
                            href={href}
                            className={`text-text-muted text-sm font-medium tracking-widest uppercase transition-colors duration-300 relative after:content['']
                                after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-accent after:transition-width after:duration-300
                                hover:text-accent hover:after:w-full last:py-2.5 last:px-6 last:border last:border-accent last:rounded-full last:transition-all
                                last:duration-300 last:ease-in last:hover:bg-accent last:hover:text-bg last:hover:after:hidden`}
                        >
                            {label}
                        </a>
                    ))}
                </ul>

                {/* Mobile menu */}
                <div className={`absolute top-full left-0 right-0 sm:hidden bg-bg border-b border-border/50
                    backdrop-blur-xl overflow-hidden transition-all duration-300 ease-out
                    ${open ? "opacity-100 translate-y-0 max-h-96" : "opacity-0 -translate-y-4 max-h-0"} `}
                >
                    <ul className="flex flex-col p-6 gap-6">
                        {Object.entries(navLinks).map(([key, { label, href }]) => (
                            <a
                                key={key}
                                href={href}
                                className="text-text-muted text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors"
                            >
                                {label}
                            </a>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;