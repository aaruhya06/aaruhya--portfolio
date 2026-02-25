import { Github, ExternalLink } from "lucide-react";
import SectionBlock from "./SectionBlock";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "DARZO AI",
    isNew: true,
    description:
      "AI-powered learning platform designed specifically for students, leveraging generative intelligence to simplify complex concepts and enhance self-paced learning.",
    tags: ["React.js", "Gemini API", "Node.js", "Tailwind", "Supabase"],
    githubUrl: "https://github.com/aaruhya06",
    liveUrl: "#",
  },
  {
    title: "Ascend",
    description:
      "Bridging the gap between learning and employability through verified skills and real-world projects. A holistic platform for career growth and skill validation.",
    tags: ["React.js", "Supabase", "Node.js", "Tailwind", "Gemini API"],
    githubUrl: "https://github.com/aaruhya06",
    liveUrl: "#",
  },
];

const ProjectsSection = () => (
  <SectionBlock id="projects" title="Projects">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.title}
          className="group relative border-2 border-black p-5 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 bg-white"
        >
          {"isNew" in project && project.isNew && (
            <div className="absolute -top-3 -right-3 bg-black text-white px-2 py-1 text-[10px] font-black uppercase tracking-tighter border-2 border-black z-20 rotate-12">
              LATEST WORK
            </div>
          )}

          {/* Decorative Project Visual (CSS-based) */}
          <div className="h-40 mb-6 border-b-2 border-black relative overflow-hidden group-hover:bg-zinc-100 transition-colors duration-300">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-4 border-black rotate-45 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[225deg]",
              project.title === "DARZO AI" ? "bg-cyan-400" : "bg-yellow-400"
            )}>
              <span className="font-black text-4xl -rotate-45 group-hover:rotate-[135deg] transition-transform duration-500">
                {project.title.charAt(0)}
              </span>
            </div>
            <div className="absolute bottom-2 left-2 font-mono text-[8px] opacity-30 uppercase font-black">
               // System_Render_v3.0
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl font-black text-foreground group-hover:underline decoration-4 underline-offset-4">
              {project.title}
            </h3>
            <p className="body-text mt-4 text-sm font-normal">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant={"secondary" as any}
                  className="font-mono text-[10px] font-bold border border-black/10 px-1.5 py-0"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-black/10">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
            >
              <Github className="w-3.5 h-3.5" />
              Source
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default ProjectsSection;
