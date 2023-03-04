import { Form, json, useLoaderData } from "react-router-dom"
import { useState, Fragment } from "react";
function Show(props){
    const project = useLoaderData()
    console.log(project)
    // Converting date into javascript dates and subtracting time difference, then breaking down into time areas
    const date1 = new Date(project.deadline);
    const date2 = new Date();
    let timeDifference = Math.abs(date1 - date2) / 36e5;
    const weeks = (date1 > date2) ? Math.floor(timeDifference / 168) : Math.round(timeDifference / -168);
    const days = Math.floor((timeDifference % 168) / 24 )
    const hours = Math.round((timeDifference % 168) % 24 )

    // Class to add or remove text box
    const [inputStatus, setInputStatus] = useState(["hidden"])
    const [controlledInput, setControlledInput] = useState("")
    const [toDoList, setToDoList] = useState([]);

    function handleChange(event, index){
        if (event.target.name === "delete") {
            const updatedTasks = [...toDoList];
            updatedTasks.splice(index, 1)
            setToDoList(updatedTasks)
        } else if (event.target.name = "newTask" ) {
            setControlledInput(event.target.value)
        }
    }

    function addTask() {
        setToDoList([...toDoList, controlledInput, "To-Do"])
        setControlledInput("")
        setInputStatus("hidden")
    }
   
    return <div className="projectPage">
        <h1>{project.title}</h1>
        <p>Product Owner:</p>
        <p className="target">{project.owner}</p>

        <p>Target Deadline:</p>
        <p className="target">{project.deadline} &nbsp; &#8594; &nbsp;  {weeks} <span className="lower">wk(s)</span> {days}<span className="lower"> d(s)</span> {hours}<span className="lower"> hr(s)</span> </p>
        
        <section className="buttons">
            <Form action={`/delete/${project.id}`} method='post'>
                <input type="submit" className="disabled" value="Delete Project"  /> 
            </Form>
            <a className="imitationButton" href={`/editproject/${project.id}`}>Update Details</a>
        </section>
        <h2>Task List</h2>
        
        <section className="taskArea">
            <ul className="taskItems">
                { (toDoList.length !== 0) ? toDoList.map((task, index) => { 
                        if(index%2 === 0){
                        return <Fragment key={`arrayKey${task}`} >
                        <li >{task}</li>
                        <select onChange={event => handleChange(event, index)} name={task[0]} defaultValue={toDoList[index +1]}>
                        <option value="To-Do">To-Do</option>
                        <option value="In-Progress">In-Progress</option>
                        <option value="Done">Done</option>
                        </select>
                        <button className="icon"><img  src="https://www.freeiconspng.com/thumbs/pencil-png/black-pencil-png-black-pencil-vector-8.png" alt="Girl in a jacket" /></button>
                        <button name="delete" onClick={event => handleChange(event, index)} className="icon delete">X</button>
                    </Fragment>}
                }) : ""}
                <div className={inputStatus}>
                <input type="text" name="newTask" value={controlledInput}  onChange={event => handleChange(event)} placeholder="Type task here" />
                    <button className="icon" onClick={addTask } > &#10003; </button> 
                </div>
            </ul>
        </section>


        <Form className="centeredForm " action={`/updateproject/${project.id}`} method='post' >
            <input type="hidden" value={project.title} name="title" />
            <input type="hidden" value={project.owner} name="owner" />
            <input type="hidden" value={project.deadline} name="deadline" />
            <input type="hidden" value={project.description} name="description" />
            <input type="hidden" value={JSON.parse(project.tags)} name="tags" />
            
            {typeof toDoList ===  "string" ? <input type="hidden" value={JSON.parse(toDoList)}  name="content" /> : <input type="hidden" value={toDoList}  name="content" />  }
            <p className="newTask" onClick={() => setInputStatus("inputHoudini")} >New Task</p>
            <button className="newTask ">Confirm Changes</button>
        </Form>


    </div>
}

export default Show       