import "../styles/Skills.css";
import Reveal from "./Reveal";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const skills = [
    { name: "HTML", icon: <FaHtml5 />, level: "95%" },
    { name: "CSS", icon: <FaCss3Alt />, level: "90%" },
    { name: "JavaScript", icon: <FaJs />, level: "90%" },
    { name: "React", icon: <FaReact />, level: "90%" },
    { name: "Node.js", icon: <FaNodeJs />, level: "85%" },
    { name: "Express", icon: <SiExpress />, level: "85%" },
    { name: "MongoDB", icon: <SiMongodb />, level: "80%" },
    { name: "Git", icon: <FaGitAlt />, level: "85%" },
    { name: "GitHub", icon: <FaGithub />, level: "90%" },
];

const Skills = () => {
    return (

        <Reveal>

            <section className="skills" id="skills">
                <SectionTitle

                    icon={<FaCode />}

                    title="Skills"

                    subtitle="Technologies and programming languages I use every day."

                />

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-top">
                                <span className="skill-icon">{skill.icon}</span>
                                <h3>{skill.name}</h3>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-fill"
                                    style={{ width: skill.level }}
                                ></div>
                            </div>

                            <p>{skill.level}</p>
                        </div>
                    ))}
                </div>
            </section>

        </Reveal>
    );
};

export default Skills;