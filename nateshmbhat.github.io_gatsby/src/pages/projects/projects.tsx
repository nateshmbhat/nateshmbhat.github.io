import React, {useState} from "react"
import { Grid } from "@material-ui/core"
import { PortfolioData } from "../../data/data_exports"
import { ProjectType } from "../../types/types"

const ProjectsPage = () => {
  const projects = PortfolioData.projects

  return (
    <>
      <Grid
        container
        justify="space-evenly"
        alignContent="center"
        alignItems="center"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Grid>
    </>
  )
}

const ProjectCard = (props : {project:ProjectType} )=>{
  
   let hoverStyle = {
      transition: "all 0.3s",
      color: "white",
      backgroundColor: "rgb(24,24,24)",
      boxShadow: "20px 10px 45px black",
    }

    const project = props.project ; 
    const [hover, setHover] = useState(false);

    return (
      <div className="col col-xl-4 col-lg-6 col-sm-12 col-12">
        <div
          className="card m-5 hoverable projectCard"
          onMouseOver={e => setHover(true)}
          onMouseLeave={e => setHover(false)}
        >
          {/* <!-- Card image --> */}
          <div className="view overlay">
            <img
              className="card-img-top"
              src={project.imagePath}
              alt="Card image cap"
            />
            <a>
              <div className="mask rgba-white-slight waves-effect"></div>
            </a>
          </div>

          {/* <!-- Card content --> */}
          <div className="card-body text-center">
            {/* <!-- Title --> */}
            <h4 className="card-title">{project.title}</h4>
            {/* <!-- Text --> */}
            {project.shortDesc && <p className="card-text">{project.shortDesc}</p>}
            <p className="card-text"> {project.longDesc} </p>
            {/* <!-- Button --> */}
            <a
              href={project.demoLink}
              className={`btn btn-primary waves-effect waves-light ${
                hover && "btn-secondary"
              }`}
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    )
}

export default ProjectsPage 