import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SKILLS } from "../data/portfolioData";

const skillSections = [
  { key: "intelligence", label: "Intelligence" },
  { key: "insights", label: "Insights" },
] as const;

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>
          {skillSections.map(({ key }, i) => {
            const section = SKILLS[key];
            return (
              <div
                key={key}
                className="what-content what-noTouch"
                ref={(el) => setRef(el, i)}
              >
                <div className="what-border1">
                  <svg height="100%">
                    <line x1="0" y1="0" x2="100%" y2="0" stroke="currentColor" strokeWidth="2" strokeDasharray="6,6" />
                    <line x1="0" y1="100%" x2="100%" y2="100%" stroke="currentColor" strokeWidth="2" strokeDasharray="6,6" />
                  </svg>
                </div>
                <div className="what-corner" />
                <div className="what-content-in">
                  <h3>{section.title.toUpperCase()}</h3>
                  <h4>Skillset & tools</h4>
                  <div className="what-content-flex">
                    {section.items.map((skill: string) => (
                      <div className="what-tags" key={skill}>
                        {skill}
                      </div>
                    ))}
                  </div>
                  <div className="what-arrow" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
