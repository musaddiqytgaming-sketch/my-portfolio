import "../styles/Hero.css";
import { FaGithub, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <section className="hero" id="home">

            <div className="hero-bg"></div>

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >

                <div className="hero-avatar">
                    <img
                        src={profile}
                        alt="Musaddiq Ansari"
                        className="avatar-img"
                    />
                </div>
                <div className="floating-card card1">

                    Full Stack

                </div>

                <div className="floating-card card2">

                    React Expert

                </div>



                <div className="status-badge">
                    <span className="status-dot"></span>
                    Available for Work
                </div>

                <p className="hello">
                    Hello, I'm
                </p>

                <h1>
                    Musaddiq Ansari
                </h1>

                <TypeAnimation
                    sequence={[
                        "MERN Stack Developer",
                        2000,
                        "React Developer",
                        2000,
                        "Node.js Developer",
                        2000,
                    ]}
                    wrapper="h2"
                    speed={40}
                    repeat={Infinity}
                    className="typing"
                />
                <div className="hero-location">
                    📍 India
                </div>

                <p className="description">
                    Passionate MERN Stack Developer focused on building modern,
                    scalable, and user-friendly web applications. I enjoy turning ideas
                    into real-world digital solutions.
                </p>

                <div className="tech-pills">

                    <span>⚛ React</span>

                    <span>🟢 Node.js</span>

                    <span>🍃 MongoDB</span>

                    <span>🚀 Express</span>

                </div>

                <div className="hero-buttons">

                    <a href="#projects" className="btn-primary">
                        View Projects
                    </a>

                    <>
                        <a
                            href="/resume1.pdf"
                            download
                            className="btn-secondary"
                        >
                            Download Resume
                        </a>

                        <a
                            href="https://github.com/musaddiqytgaming-sketch"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-secondary"
                        >
                            <FaGithub />
                            GitHub
                        </a>
                    </>

                </div>

                <div className="scroll-down">
                    <FaArrowDown />
                </div>

            </motion.div>

        </section>
    );
};

export default Hero;