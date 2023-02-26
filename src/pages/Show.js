import { Form, useLoaderData } from "react-router-dom"
function Show(props){
    const project = useLoaderData()
    // console.log(project)
    const date1 = new Date(project.deadline);
    const date2 = new Date();
    let timeDifference = Math.abs(date1 - date2) / 36e5;
    const weeks = (date1 > date2) ? Math.floor(timeDifference / 168) : Math.round(timeDifference / -168);
    const days = Math.floor((timeDifference % 168) / 24 )
    const hours = Math.round((timeDifference % 168) % 24 )

    const contentObject = typeof project.content === "string" ? JSON.parse(JSON.parse(project.content)) : project.content;
    const contentArray = contentObject ? Object.entries(contentObject) : []
    
    return <div className="projectPage">
        <h1>{project.title}</h1>
        <p>Product Owner:</p>
        <p className="target">{project.owner}</p>

        <p>Target Deadline:</p>
        <p className="target">{project.deadline} &nbsp; &#8594; &nbsp;  {weeks} <span className="lower">wk(s)</span> {days}<span className="lower"> d(s)</span> {hours}<span className="lower"> hr(s)</span> </p>
        
        <section className="buttons">
            <Form action={`/delete/${project.id}`} method='post'>
                <input type="submit" value="Delete Project"  /> 
            </Form>
            <a href={`/editproject/${project.id}`}>Edit Project</a>
        </section>
        <h2>Task List</h2>
        <section className="taskArea">
            <ul>
                {contentArray.map((task, index) => <li key={`arrayKey${index}`}>{task[0]}</li>)}
            </ul>
            <ul className="inputArea">
                {contentArray.map((task, index) => {
                    console.log(task[1])
                    return <li key={`arrayOption${index}`}><select defaultValue={task[1]}>
                        <option value="To-Do">To-Do</option>
                        <option value="In-Progress">In-Progress</option>
                        <option value="Done">Done</option>
                    </select></li>})
                }
            </ul>
        </section>
        <p className="newTask">New Task</p>

    </div>
}

export default Show                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              