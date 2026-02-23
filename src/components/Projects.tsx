import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "DARZO AI ",
        desc: "AI-powered learning, built for real students..",
        tech: ["react.js", "gemini api", "node.js", "tailwind", "supabase",],
        link: "#",
        github: "#"
    },
    {
        title: "Ascend",
        desc: "Bridging the gap between learning and employability through verified skills and real-world projects",
        tech: ["React.js", "supabase", "node.js", "tailwind", "gemini api"],
        link: "#",
        github: "#"
    },

];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-background border-b-4 border-black px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="section-title mb-12">Recent Works</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.01, rotate: 0.5 }}
                            className="bg-white brutal-border p-8 flex flex-col h-full relative group shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all"
                        >
                            {/* Project Index */}
                            <div className="absolute -top-6 -left-6 w-12 h-12 bg-black text-white flex items-center justify-center font-black text-xl brutal-border group-hover:bg-white group-hover:text-black transition-colors rotate-[-12deg]">
                                {String(index + 1).padStart(2, '0')}
                            </div>

                            {/* Status Tag */}
                            <div className="absolute top-4 right-4 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Status: Stable</span>
                            </div>

                            <div className="h-64 bg-zinc-100 border-2 border-black mb-8 flex flex-col items-center justify-center font-mono overflow-hidden relative group-hover:bg-zinc-200 transition-colors">
                                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none text-8xl font-black italic">
                                    {project.title.split(' ')[0]}
                                </div>
                                <span className="font-black uppercase text-zinc-400 tracking-[0.5em] relative z-10 text-sm">
                                    // Project Preview //
                                </span>
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                                <h3 className="text-3xl font-black uppercase italic">{project.title}</h3>
                                <div className="h-0.5 flex-grow bg-black/10" />
                            </div>

                            <p className="text-brutal mb-8 flex-grow leading-relaxed">
                                <span className="text-zinc-400 font-mono text-sm block mb-2">/* DESCRIPTION */</span>
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map(t => (
                                    <span key={t} className="px-3 py-1 bg-zinc-100 border border-black text-[10px] font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors cursor-default">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a href={project.link} className="flex-1 py-4 bg-black text-white text-center font-black uppercase text-xs brutal-border flex items-center justify-center gap-3 group/btn">
                                    <ExternalLink size={16} /> Open Interface
                                </a>
                                <a href={project.github} className="flex-1 py-4 bg-white text-black text-center font-black uppercase text-xs brutal-border flex items-center justify-center gap-3 hover:bg-zinc-100 transition-colors">
                                    <Github size={16} /> Repository
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
