import { Form, useLoaderData, Link } from "react-router-dom"
import { useState, Fragment } from "react";
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
    const [toDoList, setToDoList] = useState(contentArray);
    console.log(toDoList)
    function handleChange(event, index){
        if (event.target.name === "delete") {
            const updatedTasks = toDoList;
            console.log(updatedTasks)
            updatedTasks.splice(index, 1)
            setToDoList(updatedTasks)
            
        } else {
            const updatedTasks = toDoList;
            updatedTasks[index] = [event.target.name, event.target.value]
            setToDoList(updatedTasks)
        }
    }

   
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
            <a className="imitationButton" href={`/editproject/${project.id}`}>Update Details</a>
        </section>
        <h2>Task List</h2>
        <section className="taskArea">
            <ul className="taskItems">
                { (toDoList.length !== 0) ? toDoList.map((task, index) => { return <Fragment key={`arrayKey${task[0]}`} >
                        <li >{task[0]}</li>
                        <select onChange={event => handleChange(event, index)} name={task[0]} defaultValue={task[1]}>
                        <option value="To-Do">To-Do</option>
                        <option value="In-Progress">In-Progress</option>
                        <option value="Done">Done</option>
                        </select>
                        
                        <button name="delete" onClick={event => handleChange(event, index)} className="icon">X</button>
                        
                        <button className="icon"><img  src="https://www.freeiconspng.com/thumbs/pencil-png/black-pencil-png-black-pencil-vector-8.png" alt="Girl in a jacket" /></button>
                        
                    </Fragment>}) : ""}
            </ul>
        </section>
        <p className="newTask">New Task</p>
        <Link to={`/project/${project.id}`}><p className="newTask">Confirm</p></Link>


    </div>
}

export default Show                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              