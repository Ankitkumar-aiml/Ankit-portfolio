import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowRight, BookOpen, BriefcaseBusiness, Check, Code2, Download,
  ExternalLink, FolderOpen, GraduationCap, Laptop, Mail, MapPin, Menu,
  Send, Target, UserRound, X, Github, Linkedin, ChartNoAxesCombined,
  UsersRound, Dumbbell
} from "lucide-react";
import "./styles.css";
import profilePhoto from "./Photo_gate.jpg";
const profile = {
  name: "Ankit Kumar",
  degree: "B.E in Computer Science and Engineering",
  year: "3rd Year",
  location: "India",
  email: "ankitkumarbbu5@gmail.com",
  github: "https://github.com/Ankitkumar-aiml",
  linkedin: "https://www.linkedin.com/in/ankit-kumar45/?isSelfProfile=true",
  leetcode: "https://leetcode.com/u/Ankitmaurya_45/",
  resume: "/src/resume_Ankit.pdf"
};


const skills = [
  {
    title: "Programming Languages",
    items: ["Python", "Java", "C", "SQL"]
  },
  {
    title: "AI & Machine Learning",
    items: [
      "Machine Learning",
      "Supervised Learning",
      "Unsupervised Learning",
      "Regression",
      "Classification",
      "Scikit-learn"
    ]
  },
  {
    title: "Data Analysis & Visualization",
    items: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "JupyterLab"
    ]
  },
  {
    title: "Deep Learning & AI",
    items: [
      "Neural Networks",
      "Deep Learning",
      "Computer Vision",
      "OpenCV"
    ]
  },
  {
    title: "Tools & Technologies",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "MongoDB",
      "Firebase"
    ]
  },
  {
    title: "Web Development",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Flask"
    ]
  }
];


const projects = [

  {
    title: "AI Gym Coach",
    description:
      "An AI-powered fitness coaching application designed to help users improve their workouts with personalized guidance and exercise tracking.",
    tags: ["AI/ML", "Python", "Computer Vision", "Fitness"],
    icon: Dumbbell,
    color: "green",
    github: "https://github.com/Ankitkumar-aiml/Ai-gym-coach-main"
  },


  {
    title: "AI/ML-Powered Smart Attendance System",
    description:
      "An intelligent attendance management system using face and voice recognition to identify users, record attendance, and streamline attendance tracking.",
    tags: [
      "Python",
      "Machine Learning",
      "Face Recognition",
      "Voice Recognition",
      "React",
      "Flask",
      "MongoDB"
    ],
    icon: UsersRound,
    color: "green",
    github: "https://github.com/Ankitkumar-aiml/AI-ML-Powered-Smart-Attendance-Management-System"
  }


];

function SectionTitle({ icon: Icon, children, extra }) {
  return <div className="section-title"><Icon size={21} strokeWidth={2.3} /><h2>{children}</h2>{extra}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Skills", "Projects", "Education", "Contact"];
  const goTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}><span>Ankit</span> Kumar</a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map((item) => <button key={item} onClick={() => goTo(item)} className={item === "Home" ? "active" : ""}>{item}</button>)}
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Hello, I'm</p>
            <h1>Ankit <span>Kumar</span></h1>
            <p className="degree"><strong>{profile.year}</strong><i />{profile.degree}</p>
            <p className="hero-description">Passionate about building intelligent solutions, exploring AI &amp; ML, and turning ideas into real-world projects.</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => goTo("Projects")}><Laptop size={18} /> View My Projects</button>
              <a className="btn btn-outline" href={profile.resume} download><Download size={18} /> Download Resume</a>
            </div>
            <div className="social-links">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><Code2 /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
            </div>
          </div>

          <div className="hero-art"><img src={profilePhoto} alt="Ankit Kumar" className="profile-photo"/></div>

        </section>

        <section className="dashboard" aria-label="Portfolio overview">
          <article className="panel about-panel" id="about">
            <SectionTitle icon={UserRound}>About Me</SectionTitle>
            <p className="about-text">I am currently pursuing a B.E. in Computer Science and Engineering, with a strong interest in Artificial Intelligence and Machine Learning, particularly in predictive modeling, data analysis, and intelligent system development. I have strong proficiency in Java and enjoy solving complex problems and applying machine learning techniques to real-world challenges. I am passionate about building data-driven applications, exploring AI technologies, and continuously improving my technical skills to develop practical and impactful solutions.</p>
            <div className="info-list">
              <div><GraduationCap /><span>Education</span><strong>B.Tech (CSE) – 3rd Year</strong></div>
              <div><MapPin /><span>Location</span><strong>{profile.location}</strong></div>
              <div><Mail /><span>Email</span><strong>{profile.email}</strong></div>
            </div>
            <button className="text-link" onClick={() => goTo("Education")}>More About Me <ArrowRight size={16} /></button>
          </article>

          <article className="panel skills-panel" id="skills">
            <SectionTitle icon={Code2}>Skills</SectionTitle>
            {skills.map((group) => <div className="skill-group" key={group.title}><h3>{group.title}</h3><div className="chips">{group.items.map((skill) => <span className="chip" key={skill}>{skill}</span>)}</div></div>)}
          </article>

          <article className="panel projects-panel" id="projects">
            <SectionTitle icon={FolderOpen} extra={<a className="view-all" href={profile.github} target="_blank" rel="noreferrer">View All <ArrowRight size={14} /></a>}>Featured Projects</SectionTitle>
            <div className="project-list">
              {projects.map((project) => {
                const Icon = project.icon;
                return <div className="project-item" key={project.title}>
                  <div className={`project-icon ${project.color}`}><Icon size={30} /></div>
                  <div className="project-content"><h3>{project.title}</h3><div className="chips project-chips">{project.tags.map((tag) => <span className="chip" key={tag}>{tag}</span>)}</div><p>{project.description}</p><a className="project-link" href={project.github} target="_blank" rel="noreferrer">View project <ExternalLink size={13} /></a></div>
                </div>;
              })}
            </div>
          </article>

          <article className="panel education-panel" id="education">
            <SectionTitle icon={GraduationCap}>Education</SectionTitle>
            <div className="education-entry"><div className="education-icon"><GraduationCap /></div><div><h3>B.Tech in Computer Science and Engineering</h3><p>3rd Year <span>|</span> 2024 – Present</p><small>Erode Sengunthar Engineering College</small></div></div>
          </article>

          <article className="panel focus-panel">
            <SectionTitle icon={Target}>Current Focus</SectionTitle>
            <div className="focus-list"><span><Check /> Strengthening DSA in Java</span><span><Check /> Building real-world projects</span><span><Check /> Preparing for placements</span><span><Check /> Learning AI/ML concepts</span></div>
          </article>
          
          <article className="panel contact-panel" id="contact">
            <SectionTitle icon={Send}>Let's Connect</SectionTitle>

            <p>
              Have an opportunity, project idea, or just want to connect?
              Feel free to reach out.
            </p>

            <a
              className="btn btn-primary contact-button"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ankitkumarbbu5%40gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={17} />
              Contact Me
            </a>
          </article>


        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div><span>Let's Connect</span><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><Code2 /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);