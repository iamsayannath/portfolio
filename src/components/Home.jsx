
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { Typewriter } from 'react-simple-typewriter';
import profilePic from "/assets/IMG_20241223_003300.jpg";

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen bg-[#EAEFEF] flex flex-col justify-center items-center text-center px-2">
      <img
        src={profilePic}
        alt="Profile"
        className="w-40 h-40 md:w-50 md:h-50 rounded-full object-cover p-2 border-4 border-[#B8CFCE] shadow mb-6"
      />

      <h1 className="text-4xl md:text-5xl font-bold text-[#B8CFCE] mb-4">Hi, I'm Sayan Nath</h1>

      <h2 className="text-xl md:text-2xl font-medium text-[#EAEFEF] mb-4">
        <Typewriter
          words={["Full Stack Developer", "MERN Stack Developer", "Computer Science Student "]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>

      <p className="text-lg md:text-xl text-[#EAEFEF] mb-6 max-w-2xl">
        I love to build fast, responsive, and scalable web applications that solve real-world problems and improve user experiences.
      </p>

      <div className="flex gap-6 mb-6">
        <a
          href="https://www.linkedin.com/in/sayannath441/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#EAEFEF] text-4xl transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/iamsayannath"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#EAEFEF] text-4xl transition"
        >
          <FaGithub />
        </a>

      </div>

      <a
        href="/public/assets/resum.pdf"
        download="Sayan_Nath_Resume.pdf"
        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-amber-50 text-amber-50 font-medium rounded-md shadow transition"
      >
        <FiDownload /> Download Resume
      </a>

    </section>
  );
}
