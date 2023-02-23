import { useLoaderData } from "react-router-dom"
function Show(props){
    const project = useLoaderData()
    console.log(project)
    return <h1>Show Page</h1>
}

export default Show