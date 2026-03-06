import { skillSet } from "../data/data";

const SkillSet = () => {
    return (
        <section id="skills" className="section bg-surface border-y border-border">
            <div className="reveal">
                <div className="section-label">02 — Skill Set</div>
                <h2 className="section-title">Tools I work with.</h2>
            </div>
            <div className="grid grid-cols-auto-fit-160 gap-4 max-w-full delay-15 reveal">
                {skillSet.map(({name, icon}) => (
                    <div className={`py-7 px-5 bg-surface-2 border border-border rounded-xl text-center transition-all
                        duration-400 relative overflow-hidden before:content[''] before:absolute before:inset-0
                        before:bg-gradient-accent-glow before:opacity-0 before:transition-opacity before:duration-400
                        hover:border-accent hover:-translate-y-1 before:hover:opacity-100`}
                    >
                        <div className="w-11 h-11 mx-auto mt-0 mb-3 flex items-center justify-center relative z-1">
                            <img className="w-9 h-9" src={icon} />
                        </div>
                        <div className="text-sm font-medium relative z-1">{name}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SkillSet;