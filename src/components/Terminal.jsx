import "../styles/Terminal.css";
import { TypeAnimation } from "react-type-animation";

const Terminal = () => {
  return (
    <section className="terminal-section">

      <h2 className="section-title">Developer Console</h2>

      <div className="terminal">

        <div className="terminal-header">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>

        <div className="terminal-body">

          <p>
            <span className="prompt">$</span> whoami
          </p>

          <TypeAnimation
            sequence={[
              "Musaddiq Ansari",
              1500,
            ]}
            speed={40}
            cursor={false}
            wrapper="p"
          />

          <p>
            <span className="prompt">$</span> stack
          </p>

          <TypeAnimation
            sequence={[
              "React • Node.js • Express • MongoDB",
              1500,
            ]}
            speed={40}
            cursor={false}
            wrapper="p"
          />

          <p>
            <span className="prompt">$</span> currently
          </p>

          <TypeAnimation
            sequence={[
              "Building Full Stack Applications...",
              1500,
            ]}
            speed={40}
            repeat={Infinity}
            wrapper="p"
          />

        </div>

      </div>

    </section>
  );
};

export default Terminal;