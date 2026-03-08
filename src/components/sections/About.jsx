import { stats } from "../../data/data";

const About = () => {
    return (
        <section id="about" className="section">
            <div className="reveal">
                <div className="section-label">01 — About</div>
                <h2 className="section-title">Building for the modern web.</h2>
            </div>
            <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-16 max-w-full md:max-w-9/10 delay-15">
                <div className="text-text-muted text-small font-light">
                    I'm an entry-level <strong className="text-text font-medium">Frontend Developer</strong> with a passion for building modern web applications. I enjoy turning ideas into functional digital experiences and continuously expanding my skill set with new tools and technologies.
                    <br/><br/>
                    As a fast learner with a growth mindset, I'm constantly looking for opportunities to improve and take on new challenges — from crafting responsive interfaces to optimizing backend performance.
                </div>
                <div className="grid grid-cols-2 gap-6 content-start">
                    {Object.entries(stats).map(([key, { stat, label }]) => (
                        <div key={key} className="p-6 bg-surface border border-border rounded-xl transition-all duration-300 hover:border-accent hover:-translate-y-1">
                            <div className="font-dm-serif text-3xl text-accent mb-1.5">{stat}</div>
                            <div className="text-base text-text-muted tracking-wider">{label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About;