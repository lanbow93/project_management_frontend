import { Link, useLoaderData } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
function Index(props) {
    const projectList = useLoaderData()
    return <div className="projectArea">
        <h1>Project Management App</h1>
        <h2>Select Project:</h2>
        <Link to="/newProject"> 
        <button>New Project</button>
        </Link>
        {projectList.map(project => { return <ProjectCard data={project} key={project.id} /> })}
    </div>
}

export default Index;