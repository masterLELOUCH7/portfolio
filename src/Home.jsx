import React, { useState, useEffect, useRef } from "react";
import logo from "./assets/images/logo.jpg";
import sung from "./assets/images/sung.png";
import {
  Github, Linkedin, Instagram, Mail, ExternalLink,
  Code2, Database, Cpu, Lightbulb, Film, Trophy,
  Dumbbell, Users, MessageSquare, Target, ChevronDown,
  Facebook, Twitter
} from "lucide-react";

/* ─── NEW IMAGE-BASED CHARACTER ─── */
const AnimeCharacter = () => (
  <div className="relative flex justify-center items-center">
    {/* This div creates the purple glow BEHIND the image */}
    <div 
      className="absolute w-[300px] h-[300px] bg-purple-600/30 rounded-full blur-[80px] -z-10 animate-pulse"
    />
    
    <img 
      src={sung} 
      alt="Solo Leveling Chibi" 
      className="w-full h-auto object-contain max-w-[340px] relative z-10" 
      style={{ 
        filter: "drop-shadow(0 0 30px rgba(139,92,246,0.6))",
        animation: "hero-float 6s infinite ease-in-out" 
      }} 
    />
  </div>
);
/* ─── MAIN COMPONENT ─── */
const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [floatY, setFloatY] = useState(0);

  /* Float animation for character */
  useEffect(() => {
    let frame;
    let start = null;
    const animate = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      setFloatY(Math.sin(elapsed / 1000) * 12);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: entry.isIntersecting }));
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25 }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => document.querySelectorAll("section[id]").forEach((s) => observer.unobserve(s));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setFormStatus(""), 4000);
  };

  const projects = [
    { name: "docconnectez", url: "https://docconnectez.netlify.app", tags: ["React", "Health"] },
    { name: "vikk-3d", url: "https://vikk-3d.netlify.app", tags: ["Three.js", "3D"] },
    { name: "findnwinjobs", url: "https://findnwinjobs.netlify.app", tags: ["MERN", "Jobs"] },
    { name: "vik-cafe-managemant", url: "https://vik-cafe-managemant.netlify.app", tags: ["HTML/CSS/JS", "Resto"] },
  ];

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <div style={{ background: "linear-gradient(160deg, #0d0018 0%, #1a0035 40%, #0a000f 100%)", color: "white", minHeight: "100vh", fontFamily: "'Segoe UI', sans-serif", position: "relative", overflowX: "hidden" }}>

      {/* ── Background orbs ── */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        {[
          { x: "10%", y: "20%", size: 300, delay: 0 }, { x: "80%", y: "10%", size: 250, delay: 2 },
          { x: "50%", y: "60%", size: 400, delay: 1 }, { x: "5%", y: "75%", size: 200, delay: 3 },
          { x: "90%", y: "80%", size: 280, delay: 1.5 },
        ].map((orb, i) => (
          <div key={i} style={{
            position: "absolute", left: orb.x, top: orb.y,
            width: orb.size, height: orb.size, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(109,40,217,0.15) 0%, transparent 70%)",
            filter: "blur(60px)", animation: `floatOrb ${8 + i}s ease-in-out infinite`,
            animationDelay: `${orb.delay}s`,
          }} />
        ))}
        <style>{`
  /* 1. GLOBAL PERFORMANCE FIXES */
  html {
    scrollbar-gutter: stable; /* Prevents layout shift */
    scroll-behavior: smooth;
  }

  /* Force GPU acceleration on heavy elements to prevent white screens */
  .skill-card, 
  .project-card, 
  .section-fade, 
  .social-icon,
  .btn-primary,
  .btn-outline {
    will-change: transform, opacity;
    transform: translateZ(0); /* Trigger hardware acceleration */
    backface-visibility: hidden;
  }

  /* 2. OPTIMIZED ANIMATIONS */
  @keyframes floatOrb { 
    0%, 100% { transform: translateY(0); } 
    50% { transform: translateY(-20px); } 
  }

  @keyframes hero-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }

  @keyframes fadeSlideUp { 
    from { opacity: 0; transform: translateY(20px); } 
    to { opacity: 1; transform: translateY(0); } 
  }

  /* 3. CORE STYLES */
  .nav-link { 
    transition: color 0.3s ease, transform 0.3s ease; 
    cursor: pointer; 
    font-size: 15px; 
    font-weight: 500; 
    color: rgba(255,255,255,0.75); 
  }
  .nav-link:hover, .nav-link.active { 
    color: #a78bfa; 
    transform: translateY(-1px); 
  }

  .btn-primary { 
    background: linear-gradient(135deg, #7c3aed, #db2777); 
    border: none; 
    color: white; 
    padding: 12px 28px; 
    border-radius: 12px; 
    font-weight: 600; 
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); 
  }
  .btn-primary:hover { 
    transform: translateY(-3px); 
    box-shadow: 0 10px 20px rgba(124,58,237,0.3); 
  }

  .skill-card { 
    background: rgba(255,255,255,0.04); 
    border: 1px solid rgba(167,139,250,0.15); 
    border-radius: 14px; 
    padding: 16px 20px; 
    transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease; 
  }
  .skill-card:hover { 
    border-color: rgba(167,139,250,0.5); 
    transform: translateY(-4px); 
    background: rgba(124,58,237,0.08); 
  }

  .project-card { 
    background: rgba(255,255,255,0.04); 
    border: 1px solid rgba(255,255,255,0.08); 
    border-radius: 20px; 
    overflow: hidden; 
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.4s ease; 
  }
  .project-card:hover { 
    border-color: rgba(167,139,250,0.4); 
    transform: translateY(-6px); 
  }

  .gradient-text { 
    background: linear-gradient(135deg, #a78bfa, #f472b6); 
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
    background-clip: text; 
  }

  .section-fade { 
    transition: opacity 0.6s ease-out, transform 0.6s ease-out; 
  }
  .section-fade.hidden { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  .section-fade.visible { 
    opacity: 1; 
    transform: translateY(0); 
  }

  .input-field { 
    width: 100%; 
    padding: 12px 16px; 
    background: rgba(255,255,255,0.05); 
    border: 1px solid rgba(167,139,250,0.25); 
    border-radius: 10px; 
    color: white; 
    outline: none; 
    transition: border-color 0.3s ease; 
  }
  .input-field:focus { 
    border-color: #7c3aed; 
    background: rgba(255,255,255,0.08);
  }

  /* 4. RESPONSIVE UTILITIES */
  @media (max-width: 768px) {
    .project-grid {
      grid-template-columns: 1fr !important;
    }
    .section-fade.hidden {
      transform: translateY(15px); /* Smaller movement on mobile for speed */
    }
  }
`}</style>
      </div>

      {/* ── Navbar ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(13,0,24,0.7)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(167,139,250,0.12)", padding: "0 5%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 1200, margin: "0 auto", height: 64 }}>
          <span style={{ fontSize: 20, fontWeight: 700, background: "linear-gradient(135deg,#a78bfa,#f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            masterLELOUCH7
          </span>

          {/* Desktop nav */}
          <ul style={{ display: "flex", gap: 36, listStyle: "none", margin: 0, padding: 0 }} className="desktop-nav">
            {navItems.map(item => (
              <li key={item} className={`nav-link ${activeSection === item.toLowerCase() ? "active" : ""}`}
                onClick={() => scrollToSection(item.toLowerCase())}>{item}</li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "white", padding: 8 }}
            className="hamburger">
            <div style={{ width: 22, height: 2, background: "white", marginBottom: 5 }} />
            <div style={{ width: 22, height: 2, background: "white", marginBottom: 5 }} />
            <div style={{ width: 22, height: 2, background: "white" }} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div style={{ padding: "12px 0 20px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            {navItems.map(item => (
              <div key={item} className="nav-link" style={{ padding: "10px 0", display: "block" }}
                onClick={() => scrollToSection(item.toLowerCase())}>{item}</div>
            ))}
          </div>
        )}
      </nav>

      {/* ━━━━━━━━━━ HERO SECTION ━━━━━━━━━━ */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 5% 40px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1200, width: "100%", display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 40, alignItems: "center" }}>

          {/* Left: Welcome */}
          <div style={{ animation: "fadeSlideUp 0.8s ease both" }}>
            <p style={{ color: "#a78bfa", fontSize: 14, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
              React Developer · MERN Stack
            </p>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: 20 }}>
              Welcome<br />
              <span className="gradient-text">to my Portfolio</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7, fontSize: 15, marginBottom: 32, maxWidth: 360 }}>
              Building scalable web applications while mastering DSA and backend development with Java & MERN Stack.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => scrollToSection("projects")}>View Projects</button>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn-outline">Download CV</button>
              </a>
            </div>
          </div>

          {/* Center: Animated Character */}
          <div style={{ transform: `translateY(${floatY}px)`, transition: "transform 0.05s linear", display: "flex", justifyContent: "center" }}>
            <AnimeCharacter />
          </div>

          {/* Right: About */}
          <div style={{ animation: "fadeSlideUp 0.8s ease 0.2s both", textAlign: "right" }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, marginBottom: 16 }}>
              About <span className="gradient-text">me</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7, fontSize: 15, marginBottom: 24 }}>
              I'm <strong style={{ color: "#a78bfa" }}>Vikram Das</strong>, pursuing MCA with a strong focus on becoming an SDE. I love building modern web apps with React & Tailwind and am actively learning DSA with Java & C++.
            </p>
            <button className="btn-outline" onClick={() => scrollToSection("about")}>Learn More</button>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 20, justifyContent: "flex-end", marginTop: 32 }}>
              <a href="https://github.com/masterLELOUCH7" target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={22} /></a>
              <a href="https://www.linkedin.com/in/vikram-das-6377682b9/" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={22} /></a>
              <a href="#" className="social-icon"><Instagram size={22} /></a>
              <a href="#" className="social-icon"><Twitter size={22} /></a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", animation: "floatOrb 2s ease-in-out infinite", color: "rgba(167,139,250,0.6)" }}>
          <ChevronDown size={28} />
        </div>
      </section>

      {/* ━━━━━━━━━━ ABOUT SECTION ━━━━━━━━━━ */}
      <section id="about" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 5%", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 800, width: "100%", textAlign: "center" }}
          className={`section-fade ${isVisible.about ? "visible" : "hidden"}`}>
          <p style={{ color: "#a78bfa", fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>Who I Am</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: 40 }}>
            <span className="gradient-text">About Me</span>
          </h2>

          {/* Profile picture */}
          <div style={{ width: 120, height: 120, borderRadius: "50%", overflow: "hidden", margin: "0 auto 32px", border: "3px solid rgba(167,139,250,0.4)", boxShadow: "0 0 30px rgba(124,58,237,0.4)" }}>
            <img src={logo} alt="Vikram Das" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(167,139,250,0.12)", borderRadius: 20, padding: "36px 40px", textAlign: "left" }}>
            <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.85, fontSize: 16, marginBottom: 16 }}>
              I'm <span style={{ color: "#a78bfa", fontWeight: 600 }}>Vikram Das</span>, a{" "}
              <span style={{ color: "white", fontWeight: 600 }}>React Developer</span> building modern,
              responsive web applications using{" "}
              <span style={{ color: "#a78bfa" }}>HTML, CSS, JavaScript, React, Tailwind & MERN</span>.
            </p>
            <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.85, fontSize: 16, marginBottom: 16 }}>
              Currently pursuing <span style={{ color: "white", fontWeight: 600 }}>MCA</span>, I am strongly focused on becoming a{" "}
              <span style={{ color: "#34d399", fontWeight: 600 }}>Software Development Engineer (SDE)</span> by mastering{" "}
              <span style={{ color: "#a78bfa" }}>Data Structures & Algorithms</span>.
            </p>
            <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.85, fontSize: 15 }}>
              Alongside web dev, I'm learning <span style={{ color: "#34d399" }}>Java & C++</span> and completing a{" "}
              <span style={{ color: "#a78bfa" }}>3-month Java Coursera course</span>. I build projects to sharpen real-world skills and write clean, scalable code.
            </p>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━ SKILLS SECTION ━━━━━━━━━━ */}
      <section id="skills" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 5%", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1000, width: "100%" }}
          className={`section-fade ${isVisible.skills ? "visible" : "hidden"}`}>
          <p style={{ color: "#a78bfa", fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10, textAlign: "center" }}>What I Know</p>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, marginBottom: 48, textAlign: "center" }}>
            <span className="gradient-text">Skills & Expertise</span>
          </h2>

          {/* Core Web */}
          <h3 style={{ color: "#a78bfa", fontSize: 16, fontWeight: 600, marginBottom: 20, textAlign: "center" }}>Core Web Development</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 14, marginBottom: 40 }}>
            {["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "MERN Stack", "Python"].map(s => (
              <div key={s} className="skill-card" style={{ textAlign: "center" }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>{s}</span>
              </div>
            ))}
          </div>

          {/* Learning */}
          <h3 style={{ color: "#34d399", fontSize: 16, fontWeight: 600, marginBottom: 20, textAlign: "center" }}>Currently Learning & Growing</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14, marginBottom: 40 }}>
            {["Hands-on Java Development", "C++ Programming", "Data Structures & Algorithms", "Java Coursera Course (3 Months)"].map(s => (
              <div key={s} className="skill-card" style={{ borderColor: "rgba(52,211,153,0.2)" }}>
                <span style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>{s}</span>
              </div>
            ))}
          </div>

          <p style={{ color: "rgba(255,255,255,0.4)", textAlign: "center", maxWidth: 600, margin: "0 auto", lineHeight: 1.7, fontSize: 15 }}>
            My current focus is mastering <span style={{ color: "#a78bfa" }}>DSA</span> and writing clean, scalable code while continuously growing as a developer ready for industry challenges.
          </p>
        </div>
      </section>

      {/* ━━━━━━━━━━ PROJECTS SECTION ━━━━━━━━━━ */}
      <section id="projects" style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 5%", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1000, width: "100%" }}>
          <p style={{ color: "#a78bfa", fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10, textAlign: "center" }}>What I've Built</p>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, marginBottom: 48, textAlign: "center" }}>
            <span className="gradient-text">Projects</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", gap: 24 }}>
            {projects.map((p, i) => (
              <div key={i} className="project-card">
                <div style={{ height: 220, overflow: "hidden", position: "relative", background: "#0d0018" }}>
                  <iframe src={p.url} title={p.name}
                    style={{ width: "125%", height: "125%", transform: "scale(0.8)", transformOrigin: "top left", pointerEvents: "none", filter: "grayscale(0.2)" }}
                    loading="lazy" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,0,24,0.9) 0%, transparent 60%)" }} />
                </div>
                <div style={{ padding: "20px 24px 24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, textTransform: "capitalize", color: "white" }}>{p.name.replace(/-/g, " ")}</h3>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-end" }}>
                      {p.tags.map(t => (
                        <span key={t} style={{ fontSize: 11, fontWeight: 700, color: "#f472b6", border: "1px solid rgba(244,114,182,0.25)", background: "rgba(244,114,182,0.08)", padding: "3px 8px", borderRadius: 6, letterSpacing: "0.05em", textTransform: "uppercase" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <a href={p.url} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#a78bfa", fontWeight: 600, fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}>
                    Explore Project <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━ CONTACT SECTION ━━━━━━━━━━ */}
      <section id="contact" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 5%", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 560, width: "100%" }}
          className={`section-fade ${isVisible.contact ? "visible" : "hidden"}`}>
          <p style={{ color: "#a78bfa", fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10, textAlign: "center" }}>Let's Talk</p>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, marginBottom: 12, textAlign: "center" }}>
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", textAlign: "center", marginBottom: 36, fontSize: 15 }}>
            Let's connect and create something amazing together!
          </p>

          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(167,139,250,0.15)", borderRadius: 20, padding: "36px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <input className="input-field" type="text" placeholder="Your Name"
                value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
              <input className="input-field" type="email" placeholder="Your Email"
                value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
              <textarea className="input-field" placeholder="Your Message" rows={5} style={{ resize: "none" }}
                value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
              <button className="btn-primary" onClick={handleSubmit}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%" }}>
                <Mail size={17} /> Send Message
              </button>
            </div>
            {formStatus && <p style={{ marginTop: 16, color: "#34d399", textAlign: "center", fontWeight: 600 }}>{formStatus}</p>}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━ FOOTER ━━━━━━━━━━ */}
      <footer style={{ textAlign: "center", padding: "28px 5%", borderTop: "1px solid rgba(167,139,250,0.1)", background: "rgba(0,0,0,0.3)", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 14 }}>
          <a href="https://github.com/masterLELOUCH7" target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/vikram-das-6377682b9/" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={20} /></a>
          <a href="#" className="social-icon"><Instagram size={20} /></a>
          <a href="#" className="social-icon"><Twitter size={20} /></a>
        </div>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
          © {new Date().getFullYear()} Vikram Das · Built with React & Tailwind CSS
        </p>
      </footer>

        <style>{`
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .hamburger { display: block !important; }
            section > div[style*="grid-template-columns: 1fr auto 1fr"] {
              grid-template-columns: 1fr !important;
              text-align: center;
            }
          }
        `}</style>
    </div>
  );
};

export default Home;