import React from "react";
import "./Project.scss";
import data from "./projectData";

export default function Project() {
  return (
    <section className="project" id="project">
      <div className="section-title-project">
        <p className="gradient-text">Projects :</p>
      </div>
      <div className="project-card">
        {data &&
          data.map((project) => {
            return (
              <>
                <div class="project__wrapper">
                  <div className="project__front">
                    <div className="project__title">
                      <h4>{project.name} </h4>
                    </div>
                    <div
                      className="project__front_img"
                      style={{
                        borderBottom: ` 1px solid ${project.borderColor}`,
                      }}
                    >
                      <img src={project.img} />
                    </div>
                  </div>
                  <div className="project__back">
                    <div className="gradient_bar"></div>
                    <div className="project__back_content">
                      <div className="project__back__description">
                        <div className="project__back__img">
                          <a href={project.link} target="_blank">
                            <img src={project.show} alt={project.name} />
                          </a>
                        </div>
                        <p>{project.description}</p>
                        <div className="stacks">
                          <p>Stacks :</p>
                          <div className="project_technos">
                            {project.tools.map((tool) => (
                              <li key={tool}>{tool}</li>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="project__site">
                        <p>
                          {" "}
                          <a href={project.link}>{project.siteName} </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </section>
  );
}
