import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
    const [active, setActive] = useState("home");

    useEffect(() => {

        const handleScroll = () => {

            const sections = ["home", "about", "skills", "projects", "contact"];

            sections.forEach((section) => {

                const element = document.getElementById(section);

                if (element) {

                    const top = element.offsetTop - 120;
                    const height = element.offsetHeight;

                    if (window.scrollY >= top &&
                        window.scrollY < top + height) {

                        setActive(section);

                    }

                }

            });

        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <nav className="navbar">

            <div className="logo">
                MA
            </div>


            <ul className="nav-links">

                <li>
                    <a
                        href="#home"
                        className={active === "home" ? "active" : ""}
                    >
                        Home
                    </a>
                </li>

                <li>
                    <a
                        href="#about"
                        className={active === "about" ? "active" : ""}
                    >
                        About
                    </a>
                </li>

                <li>
                    <a
                        href="#skills"
                        className={active === "skills" ? "active" : ""}
                    >
                        Skills
                    </a>
                </li>

                <li>
                    <a
                        href="#projects"
                        className={active === "projects" ? "active" : ""}
                    >
                        Projects
                    </a>
                </li>

                <li>
                    <a
                        href="#contact"
                        className={active === "contact" ? "active" : ""}
                    >
                        Contact
                    </a>
                </li>

            </ul>

        </nav>

    );

};


export default Navbar;