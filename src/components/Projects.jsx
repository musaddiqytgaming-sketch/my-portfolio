import "../styles/Projects.css";
import Reveal from "./Reveal";
import { FaGithub, FaExternalLinkAlt, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import SectionTitle from "./SectionTitle";

const projects = [
    {
        title: "Expense Management System",
        description:
            "A full stack expense tracking application where users can manage income, expenses and financial goals.",
        tech: [
            "React",
            "Node.js",
            "Express",
            "MongoDB"
        ],
        github:
            "https://github.com/musaddiqytgaming-sketch/Expense-Management-System",
        live:
            "https://expense-management-system-sage.vercel.app/"
    }
];


const Projects = () => {

    return (
        <Reveal>

            <section className="projects" id="projects">

                <SectionTitle

                    icon={<FaRocket />}

                    title="Projects"

                    subtitle="A collection of real-world projects demonstrating my problem-solving skills."

                />

                <div className="projects-container">

                    {projects.map((project, index) => (

                        <Tilt
                            glareEnable={true}
                            glareMaxOpacity={0.2}
                            scale={1.03}
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                        >

                            <motion.div
                                className="project-card"
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: .6 }}
                            >

                                <div className="project-badge">
                                    ⭐ Featured Project
                                </div>


                                <div className="project-content">

                                    <h3>
                                        {project.title}
                                    </h3>


                                    <p>
                                        {project.description}
                                    </p>


                                    <div className="tech-stack">

                                        {project.tech.map((item, i) => (

                                            <span key={i}>
                                                {item}
                                            </span>

                                        ))}

                                    </div>


                                    <div className="project-buttons">

                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Live Demo
                                            <FaExternalLinkAlt />
                                        </a>


                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            GitHub
                                            <FaGithub />
                                        </a>

                                    </div>


                                </div>


                            </motion.div>
                        </Tilt>
                    ))}

                </div>


            </section>

        </Reveal>

    );

};


export default Projects;