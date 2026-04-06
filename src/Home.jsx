import React, { useState, useEffect } from "react";
import logo from "./assets/images/logo.jpg";  // ← FIXED PATH

import { Camera, Github, Linkedin, Instagram , Twitter, Mail, ExternalLink, Code2, Palette, Layers, Coffee, Database, Cpu, Lightbulb, Film, Trophy, Dumbbell, Users, MessageSquare, Target } from "lucide-react";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setFormStatus(""), 3000);
  };

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "Full-featured admin dashboard with real-time analytics, inventory management, and interactive charts.",
      tech: ["React", "Tailwind", "Chart.js", "REST API"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Forecast App",
      description: "Interactive weather application with geolocation support and 7-day forecasts using OpenWeather API.",
      tech: ["React", "API Integration", "Geolocation"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Manager Pro",
      description: "Productivity app with drag-and-drop functionality, categories, and persistent data storage.",
      tech: ["React", "React Hooks", "DnD Kit"],
      github: "#",
      demo: "#",
    },
  ];

  const skills = [
    { name: "HTML5", icon: Code2 },
    { name: "CSS", icon: Palette },
    { name: "Tailwind CSS", icon: Layers },
    { name: "JavaScript", icon: Coffee },
    { name: "Java", icon: Coffee },
    { name: "React", icon: Code2 },
    { name: "MERN (Learning)", icon: Database },
  ];

  const hobbies = [
    { name: "Problem Solving", icon: Lightbulb },
    { name: "Video Editing", icon: Film },
    { name: "Chess", icon: Trophy },
  ];

  const softSkills = [
    { name: "Logic Skills", icon: Cpu },
    { name: "Mathematics Logic", icon: Target },
    { name: "Fitness", icon: Dumbbell },
    { name: "Discipline", icon: Target },
    { name: "Communication", icon: MessageSquare },
    { name: "Teamwork", icon: Users },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900 to-black"></div>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-500/20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 5 + 3}s`,
              filter: "blur(60px)",
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-lg shadow-lg z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              masterLELOUCH7
            </div>
            
            <ul className="hidden md:flex gap-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <li
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-base font-medium cursor-pointer transition-all duration-300 hover:text-purple-400 ${
                    activeSection === item.toLowerCase() ? "text-purple-400 scale-110" : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden pb-4">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <div
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="py-2 text-base cursor-pointer hover:text-purple-400"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
<section
  id="home"
  className="flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24"
>
  <div
    className={`transition-all duration-1000 ${
      isVisible.home
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10"
    }`}
  >
    {/* Profile Image */}
    <div className="mb-10 relative group">
      <div className="w-40 h-40 rounded-full border-4 border-purple-500/40 overflow-hidden mx-auto shadow-xl group-hover:scale-105 transition-all duration-500">
        <img
          src={logo}
          alt="Vikram Das"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
    </div>

    {/* Name */}
    <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
      Vikram Das
    </h1>

    {/* Tagline */}
    <p className="text-xl md:text-2xl text-gray-300 mb-4">
      React Developer • MERN Stack • Future SDE
    </p>

    {/* Description */}
    <p className="text-gray-400 mb-10 max-w-xl mx-auto">
      Building scalable web applications while mastering DSA and backend development with Java.
    </p>

    {/* Buttons */}
    <div className="flex flex-wrap gap-4 justify-center mb-10">
      <button
        onClick={() => scrollToSection("projects")}
        className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl font-semibold transition hover:scale-105"
      >
        View Projects
      </button>

      <button
        onClick={() => scrollToSection("contact")}
        className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-xl transition hover:scale-105"
      >
        Contact Me
      </button>

      {/* Resume Button */}
      <a
        href="/resume.pdf" // Matches the filename in your /public folder
        target="_blank"    // Opens in a new tab
        rel="noopener noreferrer" // Security best practice for target="_blank"
        className="bg-white/10 border border-white/20 hover:bg-white/20 px-8 py-3 rounded-xl transition hover:scale-105 inline-block"
      >
        Resume
      </a>
    </div>

    {/* Social Links */}
    <div className="flex gap-6 justify-center text-gray-400">
      
      {/* GitHub */}
      <a
        href="https://github.com/masterLELOUCH7" // 👉 add GitHub link later
        className="hover:text-white transition hover:scale-125"
      >
        <Github size={24} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/vikram-das-6377682b9/" // 👉 add LinkedIn link later
        className="hover:text-blue-400 transition hover:scale-125"
      >
        <Linkedin size={24} />
      </a>

      {/* Instagram */}
      <a
        href="#" // 👉 add Instagram link later
        className="hover:text-pink-400 transition hover:scale-125"
      >
        <Instagram size={24} />
      </a>
    </div>

    {/* Scroll Indicator */}
    <div className="mt-16 animate-bounce text-gray-500 text-2xl">
      ↓
    </div>
  </div>
</section>

      {/* About Section */}
<section
  id="about"
  className="min-h-screen flex flex-col items-center justify-center px-6 py-24"
>
  <div
    className={`max-w-4xl transition-all duration-1000 ${
      isVisible.about
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10"
    }`}
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
      About Me
    </h2>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center hover:border-purple-500/40 transition-all duration-500">
      
      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        I'm <span className="text-purple-400 font-semibold">Vikram Das</span>, a 
        <span className="text-white font-semibold"> React Developer</span> building modern, responsive web applications using 
        <span className="text-purple-400"> HTML, CSS, JavaScript, React, Tailwind & MERN</span>.
      </p>

      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        Currently pursuing <span className="text-white font-semibold">MCA</span>, I am strongly focused on becoming a 
        <span className="text-emerald-400 font-semibold"> Software Development Engineer (SDE)</span> by mastering 
        <span className="text-purple-400"> Data Structures & Algorithms</span>.
      </p>

      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        Alongside web development, I am actively learning 
        <span className="text-emerald-400"> Java & C++</span> and completing a 
        <span className="text-purple-400"> 3-month Java Coursera course</span>.
      </p>

      <p className="text-gray-400 text-md leading-relaxed">
        I build projects to improve real-world coding skills, write clean scalable code, and continuously grow as a developer ready for industry challenges.
      </p>

    </div>
  </div>
</section>

     {/* Skills Section */}
<section
  id="skills"
  className="min-h-screen flex flex-col items-center justify-center px-6 py-24"
>
  <div
    className={`max-w-6xl w-full transition-all duration-1000 ${
      isVisible.skills
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10"
    }`}
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
      Skills & Expertise
    </h2>

    {/* Core Skills */}
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-8 text-center text-purple-300">
        Core Web Development
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Tailwind CSS",
          "MERN Stack",
          "Python",
        ].map((skill, index) => (
          <div
            key={skill}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/50 hover:scale-105 transition-all duration-300"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <p className="text-lg font-semibold text-white">{skill}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Learning & Growth */}
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-8 text-center text-emerald-300">
        Currently Learning & Growing
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          "Hands-on Java Development",
          "C++ Programming",
          "Data Structures & Algorithms (DSA)",
          "Java Coursera Course (3 Months)",
        ].map((item, index) => (
          <div
            key={item}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 hover:scale-105 transition-all duration-300"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <p className="text-lg font-medium text-gray-200">{item}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Focus Statement */}
    <div className="text-center max-w-3xl mx-auto">
      <p className="text-gray-400 text-lg leading-relaxed">
        I actively build web development projects to strengthen my coding
        skills and apply real-world concepts. My current focus is mastering
        <span className="text-purple-400 font-semibold"> DSA</span> and writing
        clean, scalable code while growing as a developer.
      </p>
    </div>
  </div>
</section>

    
    {/* PROJECTS GRID - 2x2 Layout & Full-Bleed Previews */}
<div id="projects" className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
  {[
    { name: "docconnectez", url: "https://docconnectez.netlify.app", tags: ["React", "Health"] },
    { name: "vikk-3d", url: "https://vikk-3d.netlify.app", tags: ["Three.js", "3D"] },
    { name: "findnwinjobs", url: "https://findnwinjobs.netlify.app", tags: ["MERN", "Jobs"] },
    { name: "vik-cafe-managemant", url: "https://vik-cafe-managemant.netlify.app", tags: ["HTML,CSS,JS", "Restro-management"] },
  ].map((project, i) => (
    <div
      key={i}
      className="group w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:border-purple-500/50 transition-all duration-500"
    >
      {/* VISUAL PREVIEW - No Black Bars */}
      <div className="relative w-full h-[250px] overflow-hidden bg-transparent">
        <iframe
          src={project.url}
          title={project.name}
          /* Logic: 125% width + 0.8 scale = 100% visual fit. 
             This removes the 'black background' by filling the entire container.
          */
          className="w-[125%] h-[125%] scale-[0.8] origin-top-left pointer-events-none grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-[0.85] transition-all duration-700"
          loading="lazy"
        />
        
        {/* Sleek Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0014] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
      </div>

      {/* PROJECT INFO */}
      <div className="p-6 bg-[#0a0014]/40">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-white font-bold text-xl capitalize">
            {project.name.replace(/-/g, ' ')}
          </h3>
          <div className="flex gap-2">
            {project.tags?.map(tag => (
              <span key={tag} className="text-[10px] font-bold text-pink-400 border border-pink-500/20 bg-pink-500/5 px-2 py-1 rounded-md uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-2 text-purple-400 font-bold text-sm hover:text-white transition-colors"
          >
            Explore Project
            <svg 
              className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >
        <div
          className={`max-w-2xl w-full transition-all duration-1000 ${
            isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-300 mb-8 text-center text-lg">
            Let's connect and create something amazing together!
          </p>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300 text-white placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300 text-white placeholder-gray-400"
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="4"
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300 text-white placeholder-gray-400 resize-none"
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-lg font-semibold flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Message
              </button>
            </div>

            {formStatus && (
              <p className="mt-4 text-green-400 font-semibold text-center">{formStatus}</p>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 px-6 text-gray-400 text-sm border-t border-purple-500/20 bg-black/30 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} Vikram Das • Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default Home;