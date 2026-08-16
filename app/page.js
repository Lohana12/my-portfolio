"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPython,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaChartBar,
} from "react-icons/fa";

import { SiMysql, SiTensorflow } from "react-icons/si";

export default function Home() {
  const text = "Data Science Student";
  const [typed, setTyped] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    let i = 0;
    const timer = setInterval(() => {
      setTyped(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(timer);
    }, 90);

    return () => clearInterval(timer);
  }, []);

  const skills = [
    { name: "Python", icon: <FaPython className="text-5xl text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-5xl text-cyan-400" /> },
    { name: "JavaScript", icon: <FaJs className="text-5xl text-yellow-300" /> },
    { name: "HTML", icon: <FaHtml5 className="text-5xl text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-5xl text-blue-500" /> },
    { name: "SQL", icon: <SiMysql className="text-5xl text-blue-400" /> },
    { name: "Power BI", icon: <FaChartBar className="text-5xl text-yellow-500" /> },
    { name: "Machine Learning", icon: <SiTensorflow className="text-5xl text-orange-400" /> },
  ];

  return (
    <main className="text-white relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-purple-400">LM</h1>

          <div className="hidden md:flex gap-6 text-gray-300">
            <a href="#about" className="hover:text-purple-400">About</a>
            <a href="#skills" className="hover:text-purple-400">Skills</a>
            <a href="#projects" className="hover:text-purple-400">Projects</a>
            <a href="#education" className="hover:text-purple-400">Education</a>
            <a href="#certificates" className="hover:text-purple-400">Certificates</a>
            <a href="#contact" className="hover:text-purple-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-40">
        <img
  src="/profile.jpg"
  alt="Profile"
  className="w-52 h-52 rounded-full border-4 border-purple-500 object-cover"
/>

        <h1 className="text-5xl md:text-7xl font-bold mt-8">
          Lohana Mendu
        </h1>

        <p className="text-purple-400 text-2xl mt-4 h-8">
          {typed}
          <span className="animate-pulse">|</span>
        </p>

        <p className="text-gray-400 max-w-2xl mt-8 leading-8">
          Passionate about Data Science, AI, and building innovative solutions.
        </p>

        <div className="flex gap-5 mt-10 flex-wrap justify-center">
          <button className="bg-purple-600 px-8 py-3 rounded-full hover:scale-105 transition">
            Hire Me
          </button>

          <a
            href="/resume.pdf"
            download
            className="border border-purple-400 px-8 py-3 rounded-full hover:bg-purple-600 transition"
          >
            Download Resume
          </a>
        </div>

        <div className="flex gap-6 mt-10 text-3xl text-gray-400">
          <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-white" />
          </a>

          <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-400" />
          </a>

          <a href="mailto:YOUR_EMAIL@gmail.com">
            <FaEnvelope className="hover:text-purple-400" />
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" data-aos="fade-up" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
          <p className="text-gray-300 leading-8">
            I'm pursuing B.Tech in Data Science at Hyderabad Institute of Technology & Management. I enjoy building AI-powered applications, solving real-world problems, and creating modern web experiences.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" data-aos="fade-up" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-4 hover:bg-purple-600 hover:-translate-y-2 transition"
            >
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" data-aos="zoom-in" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition">
            <img src="/ghmc-chatbot.jpg" alt="GHMC Chatbot" className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">AI GHMC Chatbot</h3>
              <p className="text-gray-400 mt-3">
                AI-powered chatbot designed to help citizens access GHMC municipal services and civic information.
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition">
           <img
  src="/NoteGPT.jpg"
  alt="NoteGPT"
  className="w-full h-52 object-cover rounded-t-3xl"
      />
            <div className="p-6">
              <h3 className="text-xl font-semibold">NoteGPT</h3>
              <p className="text-gray-400 mt-3">
                AI-powered notes summarization tool that converts lengthy notes into concise, easy-to-read summaries.
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition">
            <img src="/food-waste.jpg" alt="Food Waste Management" className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Localized Food Waste Management</h3>
              <p className="text-gray-400 mt-3">
                Platform that collects leftover food from restaurants and connects it with volunteers and NGOs to help people in need.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Education */}
      <section id="education" data-aos="fade-up" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-12">Education</h2>

        <div className="relative border-l-2 border-purple-500 ml-4">

          <div className="mb-12 ml-8 relative">
            <div className="absolute -left-11 top-1 w-5 h-5 bg-purple-500 rounded-full"></div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold">B.Tech – Data Science</h3>
              <p className="text-purple-400">Hyderabad Institute of Technology & Management</p>
              <p className="text-gray-400">2024 – 2028</p>
            </div>
          </div>

          <div className="ml-8 relative">
            <div className="absolute -left-11 top-1 w-5 h-5 bg-purple-500 rounded-full"></div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold">Intermediate (MPC)</h3>
              <p className="text-purple-400">TSWREIS Junior College, Mahendra Hills</p>
              <p className="text-gray-400">2022 – 2024</p>
              <p className="text-gray-400">Score: 88.9%</p>
            </div>
          </div>

        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" data-aos="fade-up" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-10">Certificates</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-purple-500 hover:-translate-y-2 transition">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-xl font-bold">Microsoft Internship</h3>
            <p className="text-gray-400 mt-2">Internship and career learning experience.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-purple-500 hover:-translate-y-2 transition">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-xl font-bold">Power BI</h3>
            <p className="text-gray-400 mt-2">Dashboard creation and data visualization.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-purple-500 hover:-translate-y-2 transition">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-xl font-bold">Machine Learning</h3>
            <p className="text-gray-400 mt-2">AI and predictive model fundamentals.</p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" data-aos="fade-up" className="text-center px-6 py-24">
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>

        <p className="text-gray-400 mb-10">
          Ready to collaborate on exciting projects.
        </p>

        <div className="flex justify-center gap-5 flex-wrap">
          <a href="mailto:mendulohana2006@gmail.com" className="bg-purple-600 px-7 py-3 rounded-full hover:scale-105 transition">
            Email
          </a>

          <a href="https://github.com/lohana12" target="_blank" rel="noopener noreferrer" className="border border-white px-7 py-3 rounded-full hover:bg-white hover:text-black transition">
            GitHub
          </a>

          <a href="https://linkedin.com/in/https://www.linkedin.com/in/lohana-mendu-763b9032b" target="_blank" rel="noopener noreferrer" className="border border-white px-7 py-3 rounded-full hover:bg-white hover:text-black transition">
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-gray-400">
        © 2026 Lohana Mendu. All rights reserved.
      </footer>

    </main>
  );
}