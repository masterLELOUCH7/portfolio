import React, { useState, useEffect } from "react";
import logo from "./assets/images/logo.jpg";  // ← FIXED PATH
import { Camera, Github, Linkedin, Twitter, Mail, ExternalLink, Code2, Palette, Layers, Coffee, Database, Cpu, Lightbulb, Film, Trophy, Dumbbell, Users, MessageSquare, Target } from "lucide-react";

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
        className="flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20"
      >
        <div
          className={`transition-all duration-1000 ${
            isVisible.home ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Profile Picture */}
          <div className="mb-8 relative group">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 mx-auto">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                <img 
  src={logo} 
  alt="Vikram Das" 
  className="w-full h-full object-cover"
/>

              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
            VIKRAM DAS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            React Developer • Frontend Enthusiast • Building Beautiful Web Experiences
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-transparent border-2 border-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-600/20 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex gap-6 justify-center">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >
        <div
          className={`max-w-4xl transition-all duration-1000 ${
            isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm <span className="text-purple-400 font-semibold">Vikram Das</span>, a passionate React developer dedicated to crafting smooth, responsive, and visually stunning web experiences. I completed my BCA from Trinity Institute of Professional Studies, affiliated with IPU University, where I built a strong foundation in computer applications and programming.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Currently, I'm pursuing my MCA from Manipal University Online, continuously expanding my knowledge in advanced computing technologies and modern web development practices. My journey in frontend development is driven by curiosity and a constant desire to learn and improve.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring cutting-edge JavaScript libraries, experimenting with new design concepts, and solving challenging problems. I believe in writing clean, maintainable code that not only works flawlessly but also provides delightful user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >
        <div
          className={`max-w-6xl w-full transition-all duration-1000 ${
            isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          {/* Technical Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-purple-300">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-purple-600/20 transition-all duration-300 border border-purple-500/20 hover:scale-105 hover:border-purple-500/40 flex flex-col items-center gap-3"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <skill.icon className="w-8 h-8 text-purple-400" />
                  <span className="text-lg font-semibold">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-pink-300">Hobbies & Interests</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {hobbies.map((hobby, index) => (
                <div
                  key={hobby.name}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-pink-600/20 transition-all duration-300 border border-pink-500/20 hover:scale-105 hover:border-pink-500/40 flex flex-col items-center gap-3"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <hobby.icon className="w-8 h-8 text-pink-400" />
                  <span className="text-lg font-semibold">{hobby.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center text-blue-300">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-blue-600/20 transition-all duration-300 border border-blue-500/20 hover:scale-105 hover:border-blue-500/40 flex flex-col items-center gap-3"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <skill.icon className="w-8 h-8 text-blue-400" />
                  <span className="text-lg font-semibold">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >
        <div
          className={`max-w-6xl w-full transition-all duration-1000 ${
            isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Projects will be updated soon
          </h2>
        </div>
      </section>

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