import { motion } from 'framer-motion';

const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "PostgreSQL", level: 75 },
    { name: "python", level: 95 },
    { name: "html", level: 95 },
    { name: "c programming", level: 95 },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-white border-b-4 border-black px-6 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-5 font-mono text-[120px] font-black pointer-events-none select-none italic">
                SKILLS
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="section-title">Technical Arsenal</h2>
                    <div className="h-1 flex-grow bg-black/10" />
                    <div className="hidden md:block font-mono text-[10px] text-zinc-400"> // LOAD_SYSTEM_CAPABILITIES </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="p-6 bg-background brutal-border group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                        >
                            <div className="flex justify-between items-end mb-4">
                                <h3 className="text-xl font-black uppercase tracking-tighter">{skill.name}</h3>
                                <span className="font-mono text-[10px] text-zinc-500">[{skill.level}%]</span>
                            </div>

                            <div className="h-6 w-full bg-zinc-200 border-2 border-black p-1 relative overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="h-full bg-black relative"
                                >
                                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] animate-[shimmer_2s_infinite]" />
                                </motion.div>
                            </div>

                            <div className="mt-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-[8px] font-black uppercase tracking-widest text-zinc-400 italic">Core Competency</span>
                                <div className="flex gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <div key={i} className={`w-1 h-1 rounded-full ${i < Math.floor(skill.level / 20) ? 'bg-black' : 'bg-zinc-200'}`} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
