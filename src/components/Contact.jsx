import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#333446] px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#B8CFCE] mb-12">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-white shadow-lg p-8 rounded-lg space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 text-[#B8CFCE] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 text-[#B8CFCE] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 text-[#B8CFCE] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              className="w-full border-gray-400 text-[#B8CFCE] py-3 px-6 rounded-md cursor-not-allowed"
            >
              Submit
            </button>
          </div>

          <div className="text-[#B8CFCE] space-y-6">
            <div className="bg-white shadow-md p-6 rounded-md flex items-center gap-4">
              <FaEnvelope className="text-[#B8CFCE] text-xl" />
              <span>sayannath441@gmail.com</span>
            </div>
            <div className="bg-white shadow-md p-6 rounded-md flex items-center gap-4">
              <FaPhone className="text-[#B8CFCE] text-xl" />
              <span>+91 9735957286</span>
            </div>
            <div className="bg-white shadow-md p-6 rounded-md flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#B8CFCE] text-xl" />
              <span>Kolkata, India</span>
            </div>
            <div className="bg-white shadow-md p-6 rounded-md flex items-center gap-4">
              <FaLinkedin className="text-[#B8CFCE] text-xl" />
              <a href="https://www.linkedin.com/in/sayannath441/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </div>
            <div className="bg-white shadow-md p-6 rounded-md flex items-center gap-4">
              <FaGithub className="text-[#B8CFCE] text-xl" />
              <a href="https://github.com/iamsayannath" target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
