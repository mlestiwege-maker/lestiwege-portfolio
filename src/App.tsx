import { motion } from "framer-motion";
import { FaGithub, FaReact, FaNodeJs, FaPython, FaMobileAlt, FaEnvelope, FaPhone, FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { SiFlutter, SiTypescript, SiPostgresql, SiMongodb } from "react-icons/si";
import profileImg from "./assets/profile.png";

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans">
      {/* ===================== NAVBAR ===================== */}
      <nav className="fixed top-0 left-0 w-full bg-slate-950/70 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-cyan-400">Lestiwege.dev</h1>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* ===================== HERO ===================== */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-cyan-400 text-lg mb-4">Full-Stack &amp; Mobile Developer</p>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Lestiwege<br />Mufutumari
            </h1>
            <p className="text-slate-400 mt-6 text-lg leading-relaxed max-w-xl">
              I build modern web, mobile, and software solutions using React, Flutter, Node.js, FastAPI, and PostgreSQL.
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="#projects"
                className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-xl font-semibold text-slate-950"
              >
                View Projects
              </a>
              <a
                href="https://github.com/mlestiwege-maker"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img
              src={profileImg}
              alt="Lestiwege Mufutumari"
              className="rounded-3xl w-[380px] md:w-[420px] shadow-2xl border border-cyan-400"
            />
          </motion.div>
        </div>
      </section>

      {/* ===================== ABOUT ===================== */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-10 text-cyan-400">About Me</h2>
            <div className="bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-800">
              <p className="text-slate-300 text-lg leading-relaxed">
                I am a Software Engineering student at Bindura University of Science Education with strong
                interests in full-stack development, mobile application development, cybersecurity, and AI-powered
                systems. I enjoy building scalable and modern software solutions using technologies such as
                <span className="text-cyan-400 font-semibold"> React</span>,
                <span className="text-cyan-400 font-semibold"> Flutter</span>,
                <span className="text-cyan-400 font-semibold"> Node.js</span>,
                <span className="text-cyan-400 font-semibold"> FastAPI</span>,
                <span className="text-cyan-400 font-semibold"> PostgreSQL</span>, and
                <span className="text-cyan-400 font-semibold"> MongoDB</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== SKILLS ===================== */}
      <section id="skills" className="py-28 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-cyan-400">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                { icon: <FaReact />, name: "React" },
                { icon: <SiTypescript />, name: "TypeScript" },
                { icon: <FaNodeJs />, name: "Node.js" },
                { icon: <FaPython />, name: "Python / FastAPI" },
                { icon: <SiFlutter />, name: "Flutter" },
                { icon: <FaMobileAlt />, name: "Mobile Dev" },
                { icon: <SiPostgresql />, name: "PostgreSQL" },
                { icon: <SiMongodb />, name: "MongoDB" },
              ].map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.08 }}
                  className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg cursor-default"
                >
                  <div className="text-4xl text-cyan-400 mb-3">{skill.icon}</div>
                  <h3 className="text-sm md:text-base font-semibold text-center">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== PROJECTS ===================== */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-cyan-400">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard
                title="Codebeat Voice Assistant"
                description="Desktop voice assistant capable of executing voice commands using speech processing and AI-based recognition."
                tech="Python · C++ · AI"
                github="https://github.com/mlestiwege-maker"
              />
              <ProjectCard
                title="CyberSentinel"
                description="Cyberattack detection and monitoring system with real-time logging, alerts, and network security analysis."
                tech="Flutter · Security · Networking"
                github="https://github.com/mlestiwege-maker"
              />
              <ProjectCard
                title="M2 Shop"
                description="Cross-platform Flutter e-commerce application with cart, checkout, and product management features."
                tech="Flutter · Dart"
                github="https://github.com/mlestiwege-maker"
              />
              <ProjectCard
                title="Full-Stack Task Manager"
                description="Comprehensive task management system with JWT authentication, role-based access, and team collaboration."
                tech="React · Node.js · PostgreSQL"
                github="https://github.com/mlestiwege-maker"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section id="contact" className="py-28 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-cyan-400 mb-8">Contact Me</h2>
            <p className="text-slate-300 text-lg mb-10">
              Interested in working together or discussing opportunities? Feel free to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://github.com/mlestiwege-maker"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-slate-950 border border-slate-700 px-6 py-4 rounded-xl hover:border-cyan-400 transition-colors"
              >
                <FaGithub className="text-xl" />
                <span className="text-sm">github.com/mlestiwege-maker</span>
              </a>
              <a
                href="mailto:mlestiwege@gmail.com"
                className="inline-flex items-center gap-3 bg-slate-950 border border-slate-700 px-6 py-4 rounded-xl hover:border-cyan-400 transition-colors"
              >
                <FaEnvelope className="text-xl" />
                <span className="text-sm">mlestiwege@gmail.com</span>
              </a>
              <a
                href="tel:+263789728509"
                className="inline-flex items-center gap-3 bg-slate-950 border border-slate-700 px-6 py-4 rounded-xl hover:border-cyan-400 transition-colors"
              >
                <FaPhone className="text-xl" />
                <span className="text-sm">+263 789 728 509</span>
              </a>
              <a
                href="https://wa.me/263712246543?text=Hi%20Lestiwege%21%20I%27m%20impressed%20with%20your%20software%20development%20expertise.%20Let%27s%20discuss%20how%20your%20innovative%20solutions%20can%20help%20transform%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-slate-950 border border-slate-700 px-6 py-4 rounded-xl hover:border-cyan-400 hover:bg-green-900/20 transition-all duration-300"
              >
                <FaWhatsapp className="text-xl text-green-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">+263 712 246 543</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800">
        © {new Date().getFullYear()} Lestiwege Mufutumari · Built with React &amp; TailwindCSS
      </footer>
    </div>
  );
}

// ===================== PROJECT CARD ======================

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string;
  github: string;
};

function ProjectCard({ title, description, tech, github }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl group"
    >
      <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 mb-5 leading-relaxed">{description}</p>
      <p className="text-cyan-400 text-sm mb-6">{tech}</p>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
      >
        View on GitHub <FaArrowRight />
      </a>
    </motion.div>
  );
}

export default App;
