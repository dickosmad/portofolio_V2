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
                      <p>
                        {" "}
                        labore asperiores voluptates, saepe voluptatum ad.
                        Obcaecati dicta nam distinctio labore, molestiae sed.{" "}
                      </p>
                      <div className="project__site">
                        <p> dickosidi.dev </p>
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
