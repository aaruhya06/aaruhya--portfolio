import SectionBlock from "./SectionBlock";
import AnimatedAvatar from "./AnimatedAvatar";

const AboutSection = () => (
  <SectionBlock id="about" title="About me">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      <AnimatedAvatar />
      <div className="flex-1">
        <p className="body-text max-w-2xl">
          I am a 2nd-year **B.E. Computer Science and Engineering** student at **Agni College of Technology, Chennai**. My journey is driven by a deep fascination with how systems work and a commitment to building clean, high-performance digital solutions that solve real-world problems.
        </p>
        <p className="body-text max-w-2xl mt-6">
          Specializing in full-stack development and AI integration, I merge technical rigor with a strong design aesthetic. I believe that code isn't just about functionality—it's about creating intuitive experiences that feel purposeful and polished.
        </p>
        <p className="body-text max-w-2xl mt-6 mb-8">
          I embrace the philosophy of <strong>building with purpose</strong>. By leveraging modern frameworks and AI-assisted workflows, I rapidly translate complex ideas into scalable architectures while maintaining the creative intuition that makes technology feel human.
        </p>
      </div>
    </div>
  </SectionBlock>
);

export default AboutSection;
