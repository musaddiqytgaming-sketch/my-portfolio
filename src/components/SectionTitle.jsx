import "../styles/SectionTitle.css";

const SectionTitle = ({ icon, title, subtitle }) => {
    return (
        <div className="section-title-wrapper">

            <div className="section-badge">
                {icon}
            </div>

            <h2 className="section-title">
                {title}
            </h2>

            <p className="section-subtitle">
                {subtitle}
            </p>

            <div className="section-divider"></div>

        </div>
    );
};

export default SectionTitle;