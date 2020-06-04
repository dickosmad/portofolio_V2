import React from 'react'
import { GrProjects} from "react-icons/gr";
import './Project.scss'

export default function Project() {
    return (
    <section className="project">
        <div className="section-title-project" >
               <p className="gradient-text" >
                   Projects :</p> 
        </div>
        <div className="project-card">
            <div className="card">
                <div className="card-content" >
                    <div className="card-display">
                        <GrProjects  color="blue" />
                        <h2>Association  project</h2>
                    </div>
                    <div className="card-hover" >
                        <h2>Second Project</h2>
                        <p>This my first portfolio project build with HTML ,CSS ,JS</p>
                        <a href="!#">Check Link</a>
                    </div>
                </div>      
            </div>
                {/* end of div */}
            <div className="card">
                <div className="card-content" >
                    <div className="card-display">
                        <GrProjects  color="blue" />
                        <h2>TODOS IMPROVED </h2>
                    </div>
                    <div className="card-hover" >
                        <h2>Second Project</h2>
                        <p>This my first portfolio project build with HTML ,CSS ,JS</p>
                        <a href="!#">Check Link</a>
                    </div>
                </div>      
            </div>
                {/* end of div */}
            <div className="card">
                <div className="card-content" >
                    <div className="card-display">
                        <GrProjects  color="blue" />
                        <h2>BLOG project</h2>
                    </div>
                    <div className="card-hover" >
                        <h2>First Project</h2>
                        <p>This my first portfolio project build with HTML ,CSS ,JS</p>
                        <a href="!#">Check Link</a>
                    </div>
                </div>      
            </div>
                {/* end of div */}
        </div>
    </section>
    )
}
