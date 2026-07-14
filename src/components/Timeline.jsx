import "../styles/Timeline.css";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { FaCode, FaGraduationCap, FaLaptopCode, FaRocket } from "react-icons/fa";

const journey = [
    {
        year: "2024",
        icon: <FaCode />,
        title: "Started Programming",
        description:
            "Started learning web development and built a strong foundation in HTML, CSS and JavaScript."
    },
    {
        year: "2025",
        icon: <FaGraduationCap />,
        title: "Learned MERN Stack",
        description:
            "Focused on React, Node.js, Express and MongoDB to become a full stack developer."
    },
    {
        year: "2025",
        icon: <FaLaptopCode />,
        title: "Built Full Stack Projects",
        description:
            "Created real-world applications including an Expense Management System."
    },
    {
        year: "Now",
        icon: <FaRocket />,
        title: "Looking for Opportunities",
        description:
            "Improving my skills and looking for internship opportunities as a MERN Stack Developer."
    }
];


const Timeline = () => {
    return (

       <Reveal>

        <section className="timeline" id="journey">

            <h2>My Journey</h2>

            <div className="timeline-container">

                {journey.map((item, index) => (

                    <motion.div
                        className="timeline-item"
                        key={index}
                        initial={{opacity:0, x:index % 2 === 0 ? -50 : 50}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:.6}}
                    >

                        <div className="timeline-icon">
                            {item.icon}
                        </div>

                        <div className="timeline-card">

                            <span>{item.year}</span>

                            <h3>{item.title}</h3>

                            <p>
                                {item.description}
                            </p>

                        </div>

                    </motion.div>

                ))}

            </div>

        </section>
        
        </Reveal>
    );
};

export default Timeline;