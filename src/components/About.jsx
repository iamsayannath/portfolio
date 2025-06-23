import React from 'react';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column: About Me */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#B8CFCE] mb-6">About Me</h2>
          <p className="text-[#B8CFCE] text-lg leading-relaxed mb-6">
            I'm a dedicated Full Stack Web Developer currently Study in the <strong>AlmaBetter Full Stack Development Program</strong>. With a strong foundation in the MERN stack, I specialize in building scalable, efficient, and user-friendly web applications.
          </p>
        </div>

        {/* Right Column: Timeline */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-[#B8CFCE] mb-6 flex items-center gap-2">
              <FaGraduationCap /> Education
            </h3>
            <div className="border-l-4 text-[#B8CFCE] pl-6 space-y-8">
              <div className="relative">
                <div className="absolute -left-3 top-1 w-4 h-4 text-[#B8CFCE] rounded-full"></div>
                <div className="bg-white p-4 rounded shadow">
                  <p className="text-lg font-semibold text-[#B8CFCE]">Diploma in Computer Science and Technology</p>
                  <p className="text-sm text-[#B8CFCE]">Saroj Mohan Institute of Technology · 2024 - Present</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-3 top-1 w-4 h-4 bg-[#B8CFCE] rounded-full"></div>
                <div className="bg-white p-4 rounded shadow">
                  <p className="text-lg font-semibold text-[#B8CFCE]">B.tech in Computer Science and Engineering</p>
                  <p className="text-sm text-[#B8CFCE]">Ideal Institute of Engineering  · 2024 - Present</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#B8CFCE] mb-6 flex items-center gap-2">
              <FaCertificate /> Certifications
            </h3>
            <div className="border-l-4 text-[#B8CFCE] pl-6 space-y-8">
              <div className="relative">
                <div className="absolute -left-3 top-1 w-4 h-4 text-[#B8CFCE] rounded-full"></div>
                <div className="bg-white p-4 rounded shadow">
                  <p className="text-lg font-semibold text-[#B8CFCE]">Full Stack Web Development</p>
                  <p className="text-sm ttext-[#B8CFCE]">Almabatter · 2023</p>
                  <p className="text-sm text-[#B8CFCE] mt-1">Focused on HTML, CSS, Javascript, Tailwind, Bootstrap, React, Node.js, Express, MongoDB, and deployment strategies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
