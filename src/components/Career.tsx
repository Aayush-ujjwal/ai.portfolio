import "./styles/Career.css";
import { EXPERIENCE, EDUCATION } from "../data/portfolioData";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {EXPERIENCE.map((exp, i) => (
            <div className="career-info-box" key={i}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.role}</h4>
                  <h5>{exp.company}</h5>
                </div>
                {exp.year ? <h3>{exp.year}</h3> : null}
              </div>
              {exp.description ? <p>{exp.description}</p> : null}
            </div>
          ))}
          {EDUCATION.map((edu, i) => (
            <div className="career-info-box" key={`edu-${i}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{edu.degree}</h4>
                  <h5>{edu.institution}</h5>
                </div>
                <h3>{edu.year}</h3>
              </div>
              {edu.description ? <p>{edu.description}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
