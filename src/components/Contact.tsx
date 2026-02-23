import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-background border-b-4 border-black px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="section-title mb-12">Open Connection</h2>
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <p className="text-2xl font-bold mb-8 uppercase">Currently available for high-impact collaborations and architectural challenges.</p>
                        <div className="space-y-4">
                            <ContactLink icon={<Mail size={20} />} label="Email" value="nidigantiak@gmail.com" href="mailto:nidigantiak@gmail.com" />
                            <ContactLink icon={<Github size={20} />} label="GitHub" value="@aaruhya06" href="https://github.com/aaruhya06" isExternal />
                            <ContactLink icon={<Linkedin size={20} />} label="LinkedIn" value="in/aaruhya" href="https://www.linkedin.com/in/aaruhya-kumar-1287b9329" isExternal />
                        </div>
                    </div>
                    <div className="bg-white brutal-border p-8">
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase">Subject</label>
                                <input type="text" className="w-full p-4 border-2 border-black outline-none focus:bg-zinc-50" placeholder="New Project Inquiry" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase">Message</label>
                                <textarea rows={4} className="w-full p-4 border-2 border-black outline-none focus:bg-zinc-50" placeholder="Let's build something concrete..."></textarea>
                            </div>
                            <button className="w-full py-4 bg-black text-white font-black uppercase text-lg brutal-border flex items-center justify-center gap-3">
                                Send Transmission <ArrowUpRight />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContactLink = ({ icon, label, value, href, isExternal }: { icon: any, label: string, value: string, href: string, isExternal?: boolean }) => (
    <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="flex items-center justify-between p-4 bg-white brutal-border hover:translate-x-2 transition-transform group"
    >
        <div className="flex items-center gap-4">
            {icon}
            <div>
                <span className="block text-[10px] font-black uppercase text-zinc-400">{label}</span>
                <span className="font-bold">{value}</span>
            </div>
        </div>
        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
);
