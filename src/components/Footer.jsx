import "../styles/Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">

            <h3>
                Musaddiq Ansari
            </h3>

            <p>
                MERN Stack Developer | Building modern web experiences
            </p>


            <div className="footer-links">

                <a
                    href="https://github.com/musaddiqytgaming-sketch"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>


                <a
                    href="https://www.linkedin.com/in/musaddiq-ansari"
                >
                    <FaLinkedin />
                </a>

            </div>


            <div className="footer-bottom">

                <p>
                    Made by Musaddiq Ansari
                </p>

                <p>
                    © {new Date().getFullYear()} All Rights Reserved
                </p>

            </div>

        </footer>
    );
};

export default Footer;