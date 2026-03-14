import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { PROJECTS } from "../data/portfolioData";

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-scroll-container">
          <div className="work-flex">
          {PROJECTS.map((project, index) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Description</h4>
                <p>{project.description}</p>
                <h4>Tech</h4>
                <p>{project.tech}</p>
                {(project.demo || project.github) && (
                  <div className="work-links">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-demo-link"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-github-link"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.demo || project.github}
              />
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
