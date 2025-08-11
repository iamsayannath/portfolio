import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_caxu2i9', // from EmailJS
        'template_5usk8b3', // from EmailJS
        formData,
        '76gsofb5atyU6i6zt' // from EmailJS
      )
      .then(
        () => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
          setLoading(false);
        },
        (error) => {
          alert('Failed to send message. Try again.');
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-[#333446] px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#B8CFCE] mb-12">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg p-8 rounded-lg space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className={`w-full flex justify-center items-center gap-2 bg-[#B8CFCE] text-black py-3 px-6 rounded-md transition $`}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </form>

          {/* Contact Details */}
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
