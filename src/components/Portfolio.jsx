import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "My Portfolio",
    description: "Full-featured REACT JS portfolio website ",
    stack: ["React", "tailwind"],
    live: "https://portfolio-43iu.onrender.com",
    github: "https://github.com/iamsayannath/portfolio.git",
  },
  {
    id: 2,
    title: "MERN stack bookstore(Frontend + Backend)",
    description: "Full-featured REACT JS book store application with backend intrigation with sort function",
    stack: ["React", "tailwind", "API", "JSX", "Context API", "NodeJS", "Express"],
    live: "https://full-stack-bookstore-website-8k6c.onrender.com",
    github: "https://github.com/iamsayannath/full-stack-bookstore-website.git",
  },
  {
    id: 3,
    title: "MERN stack recipe-finder(Frontend + Backend)",
    description: "Full-featured REACT JS recipe finder application with backend intrigation with feedback and contact us form",
    stack: ["React", "tailwind", "API", "JSX", "Context API", "NodeJS", "Express", "MongoDB"],
    live: "https://full-stack-recipe-finder-website-frontend.onrender.com",
    github: "https://github.com/iamsayannath/full-stack-recipe-finder-website.git",
  },
  {
    id: 4,
    title: "MERN stack movie website(Backend)",
    description: "movie finder application backend",
    stack: ["API", "NodeJS", "Express"],
    live: "",
    github: "https://github.com/iamsayannath/full-stack-movie-website.git",
  },
  {
    id: 5,
    title: "MERN stack Stock finder(Frontend + Backend)",
    description: "Full-featured REACT JS stock finder application with backend intrigation with full details page",
    stack: ["React", "tailwind", "API", "JSX", "Context API", "NodeJS", "Express"],
    live: "https://full-stack-stock-finder-website-ny4i.onrender.com",
    github: "https://github.com/iamsayannath/full-stack-stock-finder-website.git",
  },
  {
    id: 6,
    title: "MERN stack note taking website(Frontend + Backend)",
    description: "Full-featured REACT JS note application with backend intrigation and user authentication and also function like create,read,delete, share, copy",
    stack: ["React", "tailwind", "API", "JSX", "Context API", "NodeJS", "Express", "MongoDB"],
    live: "https://full-stack-note-taking-website.onrender.com",
    github: "https://github.com/iamsayannath/full-stack-note-taking-website.git",
  },
  {
    id: 7,
    title: "MERN Authentication(Frontend + Backend)",
    description: "Full-featured MERN authentication project",
    stack: ["React", "tailwind", "API", "JSX", "Context API", "NodeJS", "Express", "MongoDB"],
    live: "https://mern-authentication-frontend-spgp.onrender.com",
    github: "https://github.com/iamsayannath/mern-authentication.git",
  },
  {
    id: 8,
    title: "Multi-Step form(Frontend + Backend)",
    description: "Full-featured MERN multistep form project",
    stack: ["React", "tailwind", "API", "JSX", "Context API", "NodeJS", "Express", "MongoDB"],
    live: "https://multi-step-form-frontend-backend-1.onrender.com",
    github: "https://github.com/iamsayannath/Multi-step-form--frontend-backend-.git",
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
            className="rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border-2"
          >
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
