const URL="https://project-management-backend-django.onrender.com"

export const projectsLoader = async () => {
    const response=await fetch(URL+'/project')
    const projects=await response.json()
    return projects
}

export const projectLoader = async ({params}) => {
    const response = await fetch(URL + `/project/${params.id}`)
    const project = await response.json()
    return project
}