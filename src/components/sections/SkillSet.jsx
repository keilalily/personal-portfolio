import { skillSet } from "../../data/data";

const SkillSet = () => {
    return (
        <section id="skills" className="section bg-surface border-y border-border">
            <div className="reveal">
                <div className="section-label">02 — Skill Set</div>
                <h2 className="section-title">Tools I work with.</h2>
            </div>
            <div className="reveal grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))] gap-4 max-w-full md:max-w-9/10 delay-15">
                {skillSet.map(({ name, icon }, idx) => (
                    <div key={idx} className={`py-7 px-5 bg-surface-2 border border-border rounded-xl text-center transition-all
                        duration-400 relative overflow-hidden before:content-[''] before:absolute before:inset-0
                        before:bg-linear-135 before:from-accent-glow before:to-transparent before:opacity-0 before:transition-opacity before:duration-400
                        hover:border-accent hover:-translate-y-1 hover:before:opacity-100`}
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