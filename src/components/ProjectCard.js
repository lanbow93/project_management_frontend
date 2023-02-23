import { Link } from "react-router-dom"
function ProjectCard(props) {
    
    const project = props.data
    console.log(project)
    return <div className="project">
        <Link to={`/project/${project.id}`}>
            <h3>{props.data.title}</h3>
            <p className="description">{project.description}</p>
            <p>Owner: <span className="bold">{project.owner}</span></p>
            <p>Due: <span className="bold">{project.deadline}</span></p>
            
        </ Link>
    </div>

}

export default ProjectCard