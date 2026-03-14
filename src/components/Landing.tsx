import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { PERSONAL } from "../data/portfolioData";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {PERSONAL.firstName.toUpperCase()}
              <br />
              <span>{PERSONAL.lastName.toUpperCase()}</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>{PERSONAL.title.split("|")[0]?.trim()}</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Data Scientist</div>
              <div className="landing-h2-2">Full Stack Developer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Full Stack Developer</div>
              <div className="landing-h2-info-1">Data Scientist</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
