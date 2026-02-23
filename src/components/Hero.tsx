import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const roles = [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "System Architect",
    "Problem Solver"
];

export const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Matrix Rain Effect
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const chars = "01{}[]<>/*#=+-;:.";
        const fontSize = 14;
        const columns = Math.floor(canvas.width / fontSize);
        const drops: number[] = Array(columns).fill(1);

        const draw = () => {
            ctx.fillStyle = 'rgba(245, 245, 245, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                ctx.fillText(char, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 50);
        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resize);
        };
    }, []);

    // Typewriter Effect
    useEffect(() => {
        const currentRole = roles[roleIndex];
        const speed = isDeleting ? 30 : 80;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentRole.slice(0, displayText.length + 1));
                if (displayText.length === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                setDisplayText(currentRole.slice(0, displayText.length - 1));
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section className="min-h-screen flex flex-col justify-center relative px-6 overflow-hidden bg-background border-b-4 border-black">
            <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-50" />

            {/* IDE Decorations */}
            <div className="absolute top-32 left-10 z-10 hidden lg:block font-mono text-[10px] text-black/40 leading-relaxed">
                <p> // portfolio.tsx </p>
                <p> // status: operational </p>
                <p> // date: {new Date().toLocaleDateString()} </p>
            </div>

            <div className="absolute top-32 right-10 z-10 hidden lg:block font-mono text-[10px] text-black/20 text-right leading-relaxed">
                {Array.from({ length: 6 }).map((_, i) => (
                    <p key={i}>{String(i + 1).padStart(3, '0')}</p>
                ))}
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <span className="w-2.5 h-2.5 bg-black rounded-full animate-pulse shadow-[0_0_8px_rgba(0,0,0,0.3)]" />
                        <span className="px-4 py-1.5 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em]">
                            System.Init() — Connection: STABLE
                        </span>
                    </div>

                    <h1 className="heading-brutal mb-8 leading-[0.9]">
                        AARUHYA<br />
                        <span className="text-black/10">KUMAR</span>
                    </h1>

                    <div className="bg-black text-white p-8 inline-flex flex-col brutal-border shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                        <div className="flex items-center gap-2 mb-3 text-[10px] font-mono text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-3">
                            <span className="w-2 h-2 rounded-full bg-red-500" />
                            <span className="w-2 h-2 rounded-full bg-yellow-500" />
                            <span className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="ml-2">bash — 80x24</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-2xl font-mono text-green-400">$</span>
                            <p className="text-xl md:text-3xl font-mono tracking-tight">
                                {displayText}<span className="inline-block w-3 h-8 bg-green-400 ml-1 animate-pulse" />
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 flex flex-wrap gap-4">
                        {[
                            "Building Digital Fortresses",
                            "Designing Bold Experiences",
                            "Architecting Scalable Systems"
                        ].map(tag => (
                            <span key={tag} className="px-5 py-2.5 border-2 border-black bg-white text-[10px] font-black uppercase tracking-[0.15em] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Bottom Stats */}
            <div className="absolute bottom-12 right-10 z-10 hidden md:block font-mono text-[10px] text-black/60 text-right space-y-1">
                <p className="font-bold">SYSTEM_INFO</p>
                <div className="h-px bg-black/10 w-full my-2" />
                <p>const EXP = "02_YEARS";</p>
                <p>const PASSION = Infinity;</p>
                <p>const REGION = "GLOBAL";</p>
            </div>

            <div className="absolute bottom-12 left-10 z-10 hidden md:block">
                <p className="font-black uppercase text-[10px] tracking-[0.3em] vertical-text opacity-20">
                    S.Operational
                </p>
            </div>
        </section>
    );
};
