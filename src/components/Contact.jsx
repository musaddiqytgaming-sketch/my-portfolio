import "../styles/Contact.css";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <Reveal>
            <section className="contact" id="contact">

                <SectionTitle

                    icon={<FaEnvelope />}

                    title="Let's Connect"

                    subtitle="Have an idea or opportunity? I'd love to hear from you."

                />

                <p className="contact-text">
                    I'm always interested in new opportunities,
                    collaborations and exciting projects.
                </p>


                <div className="contact-container">

                    <div className="contact-card">
                        <FaEnvelope />
                        <h3>Email</h3>
                        <p>
                            musaddiqytgaming@gmail.com
                        </p>
                    </div>


                    <div className="contact-card">
                        <FaGithub />
                        <h3>GitHub</h3>
                        <p>
                            github.com/musaddiqytgaming-sketch
                        </p>
                    </div>


                    <div className="contact-card">
                        <FaLinkedin />
                        <h3>LinkedIn</h3>
                        <p>
                            https://www.linkedin.com/in/musaddiq-ansari
                        </p>
                    </div>


                    <div className="contact-card">
                        <FaMapMarkerAlt />
                        <h3>Location</h3>
                        <p>
                            India
                        </p>
                    </div>

                </div>

            </section>

        </Reveal>
    );
};

export default Contact;