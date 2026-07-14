import "../styles/Stats.css";
import Reveal from "./Reveal";
import { FaProjectDiagram, FaCode, FaLaptopCode, FaAward } from "react-icons/fa";

const Stats = () => {
  return (

    <Reveal>

    <section className="stats">
      <div className="stats-container">

        <div className="stat-card">
          <FaProjectDiagram className="stat-icon" />
          <h2>5+</h2>
          <p>Projects</p>
        </div>

        <div className="stat-card">
          <FaCode className="stat-icon" />
          <h2>9+</h2>
          <p>Technologies</p>
        </div>

        <div className="stat-card">
          <FaLaptopCode className="stat-icon" />
          <h2>1+</h2>
          <p>Years Learning</p>
        </div>

        <div className="stat-card">
          <FaAward className="stat-icon" />
          <h2>100%</h2>
          <p>Dedication</p>
        </div>

      </div>
    </section>
    
    </Reveal>
  );
};

export default Stats;