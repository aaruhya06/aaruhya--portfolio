const milestones = [
    { era: "2024 - Present", title: "Co-founder & Freelancer", firm: "CyberMonkStudioz", desc: "Leading creative initiatives and delivering bespoke digital solutions for clients." },
    { era: "2025 - 2027", title: "Full Stack Developer", firm: "Pixel & Code", desc: "Building scalable, end-to-end architectures and high-performance user interfaces." },
    { era: "2024 - 2045", title: "Junior Developer", firm: "TechFlow", desc: "Laying the groundwork through structural design and architectural collaboration." }
];

export const Experience = () => {
    return (
        <section className="py-24 bg-background border-b-4 border-black px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="section-title mb-16 underline decoration-4 underline-offset-8">The Archives</h2>
                <div className="space-y-8">
                    {milestones.map((m, i) => (
                        <div key={i} className="grid md:grid-cols-12 gap-4 items-start p-8 bg-white brutal-border relative">
                            <div className="md:col-span-3 text-4xl font-black uppercase tracking-tighter text-zinc-300">
                                {m.era}
                            </div>
                            <div className="md:col-span-6">
                                <h3 className="text-2xl font-black uppercase mb-2">{m.title}</h3>
                                <p className="text-sm font-bold uppercase mb-4 text-zinc-500">{m.firm}</p>
                                <p className="text-brutal">{m.desc}</p>
                            </div>
                            <div className="md:col-span-3 flex justify-end">
                                <div className="w-12 h-12 border-4 border-black border-dotted rounded-full flex items-center justify-center font-black">
                                    {i + 1}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
