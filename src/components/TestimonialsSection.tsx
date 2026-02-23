import SectionBlock from "./SectionBlock";

const testimonials = [
    {
        quote: "Aaruhya's ability to simplify complex architectures is rare. A true problem solver who delivers results beyond expectations.",
        author: "Dr. Vikram Singh",
        role: "Tech Mentor & Researcher",
        avatar: "VS"
    },
    {
        quote: "Working with CyberMonkStudioz was a game-changer. They built our MVP in record time without compromising on quality.",
        author: "Sarah Jenkins",
        role: "Founder, GreenScale AI",
        avatar: "SJ"
    },
    {
        quote: "Aggressive, technical, and precise. Exactly the kind of engineering talent you want for high-stakes projects.",
        author: "Marcus Chen",
        role: "CTO, Nexus Dynamics",
        avatar: "MC"
    }
];

const TestimonialsSection = () => (
    <SectionBlock id="testimonials" title="Words from the Vault">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
                <div
                    key={idx}
                    className="group brutal-border bg-white p-8 relative flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
                    style={{
                        boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)",
                    }}
                >
                    <div className="text-4xl font-serif text-black opacity-20 mb-4">"</div>
                    <p className="body-text text-lg italic mb-8 flex-grow">
                        {t.quote}
                    </p>
                    <div className="flex items-center gap-4 border-t-2 border-black pt-6">
                        <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black rounded-none border-2 border-black">
                            {t.avatar}
                        </div>
                        <div>
                            <h4 className="font-bold text-sm uppercase tracking-tighter">{t.author}</h4>
                            <p className="text-xs font-mono text-zinc-500 uppercase">{t.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </SectionBlock>
);

export default TestimonialsSection;
