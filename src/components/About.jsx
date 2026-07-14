import "../styles/About.css";
import Reveal from "./Reveal";
import profile from "../assets/profile.jpg.png";
import { FaUserGraduate, FaMapMarkerAlt, FaLaptopCode, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FaUser } from "react-icons/fa";

const About = () => {
    return (

        <Reveal>
            <section className="about" id="about">

                <SectionTitle

                    icon={<FaUser />}

                    title="About Me"

                    subtitle="Passionate MERN Stack Developer creating modern, scalable and user-friendly web applications."

                />

                <div className="about-container">

                    <motion.div
                        className="about-card"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                    >
                        <div className="about-avatar">
                            <img
                                src={profile}
                                alt="Musaddiq Ansari"
                                className="avatar-img"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                    >

                        <h3>MERN Stack Developer</h3>

                        <p>
                            I'm Musaddiq Ansari, a passionate developer who enjoys
                            building modern, scalable, and user-friendly web
                            applications. I love solving real-world problems using
                            React, Node.js, Express, and MongoDB.
                        </p>

                        <div className="about-info">

                            <div>
                                <FaMapMarkerAlt />
                                <span>India</span>
                            </div>

                            <div>
                                <FaUserGraduate />
                                <span>MCA Student</span>
                            </div>

                            <div>
                                <FaLaptopCode />
                                <span>Full Stack Developer</span>
                            </div>

                            <div>
                                <FaHeart />
                                <span>Coding & Learning</span>
                            </div>

                        </div>

                    </motion.div>

                </div>

            </section>

        </Reveal>
    );
};

export default About;