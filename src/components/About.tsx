export const About = () => {
    return (
        <section id="about" className="py-24 bg-white border-b-4 border-black px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="section-title mb-12">The Blueprint</h2>
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-7 space-y-6">
                        <p className="text-3xl font-black uppercase leading-tight">
                            Crafting digital foundations with precision and intentionality.
                        </p>
                        <p className="text-brutal text-lg">
                            I am a developer who views the web as a canvas for high-performance engineering.
                            My approach isn't just about making things look "cool"—it's about structural
                            integrity, speed, and a user experience that feels solid to the touch.
                        </p>
                        <div className="flex gap-8 py-8 border-y-2 border-black border-dashed">
                            <div>
                                <span className="block text-4xl font-black">01+</span>
                                <span className="text-xs font-bold uppercase gray-500">Years XP</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-black">10+</span>
                                <span className="text-xs font-bold uppercase gray-500">Projects</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-black">2026</span>
                                <span className="text-xs font-bold uppercase gray-500">Current Era</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="aspect-[4/5] bg-zinc-100 brutal-border relative overflow-hidden group">
                            <div className="absolute inset-0 bg-black translate-x-4 translate-y-4 -z-10" />
                            {/* Image Implementation */}
                            <img
                                src="/profile.jpeg"
                                alt="Aaruhya"
                                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-center justify-center text-8xl font-black opacity-10 uppercase -rotate-12 select-none pointer-events-none">
                                Aaruhya
                            </div>
                            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white brutal-border">
                                <span className="text-xs font-black uppercase tracking-widest">Identification Card</span>
                                <h4 className="text-xl font-black uppercase">creative Architect</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
