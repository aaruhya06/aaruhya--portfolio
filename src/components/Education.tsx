const education = [
    { year: "2025", title: "Advanced Certification in Full Stack", inst: "Global Tech Institute" },
    { year: "2026", title: "Certification in UI/UX Design", inst: "Creative Academy" }
];

export const Education = () => {
    return (
        <section className="py-24 bg-white border-b-4 border-black px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="section-title mb-16 underline decoration-4 underline-offset-8">The Registry</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {education.map((e, i) => (
                        <div key={i} className="p-8 bg-background brutal-border flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-black text-white flex items-center justify-center font-black text-2xl mb-6 shadow-brutal">
                                {e.year.slice(-2)}
                            </div>
                            <h3 className="text-xl font-black uppercase mb-2">{e.title}</h3>
                            <p className="text-xs font-bold uppercase text-zinc-500">{e.inst}</p>
                            <div className="mt-8 pt-8 border-t-2 border-black border-dashed w-full text-xs font-black">
                                DIPLOMA VERIFIED
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
