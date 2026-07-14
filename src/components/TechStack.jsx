import "../styles/TechStack.css";
import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaGitAlt,
    FaLaptopCode
} from "react-icons/fa";
import Reveal from "./Reveal";

import {
    SiMongodb,
    SiExpress
} from "react-icons/si";
import SectionTitle from "./SectionTitle";


const technologies = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Git", icon: <FaGitAlt /> }
];


const TechStack = () => {

    return (

    <section className="tech-stack" id="tech">

        <Reveal>

            <SectionTitle
                icon={<FaLaptopCode />}
                title="Tech Stack"
                subtitle="Powerful tools and frameworks that help me build amazing applications."
            />

            <div className="tech-container">

                {technologies.map((tech, index) => (

                    <div
                        className="tech-item"
                        key={index}
                    >

                        {tech.icon}

                        <span>{tech.name}</span>

                    </div>

                ))}

            </div>

        </Reveal>

    </section>

);

};


export default TechStack;