import { FaJsSquare, FaPython, FaJava, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiMongodb } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

const skills = {
  'Frontend Skill': [
    { name: 'HTML', level: 90, icon: <FaHtml5 /> },
    { name: 'CSS', level: 75, icon: <FaCss3Alt /> },
    { name: 'Javascript', level: 65, icon: <FaJsSquare /> },
    { name: 'Tailwind', level: 65, icon: <SiTailwindcss /> },
    { name: 'Bootstrap', level: 65, icon: <FaBootstrap /> },
    { name: 'React JS', level: 85, icon: <FaReact /> },

  ],
  'Backend Skill': [
    { name: 'Node JS', level: 85, icon: <FaNodeJs /> },
    { name: 'Express', level: 80, icon: <SiExpress /> },
    { name: 'MongoDB', level: 75, icon: <SiMongodb /> },
    { name: 'Mongoose', level: 80, icon: <SiMongodb /> },
    { name: 'REST API', level: 70, icon: <TbApi /> },
  ],
  'Tools & Platforms': [
    { name: 'Git', level: 90, icon: <FaGitAlt /> },
    { name: 'GitHub', level: 85, icon: <FaGithub /> },
    { name: 'VScode', level: 60, icon: <VscVscode /> },
  ],
};

export default function SkillsSection() {
  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-6 text-[#B8CFCE]">Skills</h2>

      <div className="space-y-12">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4 text-[#B8CFCE]">{category}</h3>
            <div className="flex flex-wrap gap-4">
              {items.map(({ name, level, icon }) => (
                <span
                  key={name}
                  title={`Proficiency: ${level}%`}
                  className="text-[#B8CFCE] border-2 border-[#B8CFCE] text-sm font-medium px-4 py-2 rounded-full shadow-sm flex items-center gap-2 hover:bg-blue-200 transition"
                >
                  {icon} {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
