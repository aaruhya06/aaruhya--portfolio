import SectionBlock from "./SectionBlock";
import { Hammer, Zap, MousePointer2, Smartphone } from "lucide-react";

const services = [
    {
        title: "Full-Stack Architecture",
        description: "Building robust, scalable end-to-end systems that don't break under pressure.",
        icon: <Hammer className="w-8 h-8" />,
        color: "bg-blue-500"
    },
    {
        title: "Rapid MVP Development",
        description: "From napkin sketch to production-ready product in record time. Zero fluff.",
        icon: <Zap className="w-8 h-8" />,
        color: "bg-yellow-400"
    },
    {
        title: "UI/UX Strategy",
        description: "High-impact, brutalist digital experiences designed to convert and command attention.",
        icon: <MousePointer2 className="w-8 h-8" />,
        color: "bg-red-500"
    },
    {
        title: "Web & App Development",
        description: "Building robust and performant web and mobile applications using modern frameworks.",
        icon: <Smartphone className="w-8 h-8" />,
        color: "bg-green-500"
    }
];

const ServicesSection = () => (
    <SectionBlock id="services" title="The Arsenal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, idx) => (
                <div
                    key={idx}
                    className="group brutal-border bg-white p-10 relative flex flex-col gap-6 hover:translate-x-1 hover:-translate-y-1 transition-all duration-200"
                    style={{
                        boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)",
                    }}
                >
                    <div className={`${s.color} w-16 h-16 border-4 border-black flex items-center justify-center p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                        {s.icon}
                    </div>
                    <div>
                        <h3 className="text-2xl font-black uppercase mb-3 tracking-tighter">
                            {s.title}
                        </h3>
                        <p className="body-text text-black/70 font-medium">
                            {s.description}
                        </p>
                    </div>
                    <div className="absolute top-4 right-4 text-xs font-mono font-bold opacity-20">
                        MOD_{idx + 1}
                    </div>
                </div>
            ))}
        </div>
    </SectionBlock>
);

export default ServicesSection;
