import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import project1image from "../../public/assets/project1.png";
const projects = [
  {
    id: 1,
    title: "Guardian-of-Wildlife",
    description:
      "Full-featured REACT JS application with API intrigation",
    image: project1image,
    stack: ["React", "tailwind", "API", "JSX", "Redux"],
    live: "https://guardiansofwildlife.netlify.app/",
    github: "https://github.com/iamsayannath/Guardian-of-Wildlife",
  }
];

export default function PortfolioSection() {
  return (
    <div className="bg-gray-950 min-h-screen text-white py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between text-sm">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline flex justify-between items-center"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline flex justify-between items-center"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
