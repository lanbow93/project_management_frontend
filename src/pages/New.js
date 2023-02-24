import { Form } from "react-router-dom";
import { useState } from "react";
function New(props) {
    const [tagFields, setTagFields] = useState([""])

    const addTag = () => {
        let data = [...tagFields, ""];
        setTagFields(data);
     }

    console.log(tagFields)

    return <Form action='/create' method='post' className='postFormField'>
    <h2>New Project Form</h2>
    <label className="bold">Title/Name: </label>
    <br />
    <input type='input' name='title' placeholder='Project Name/Title' />
    <br />
    <label><span className="bold">Product Owner</span>: </label>
    <br />
    <input type='input' name='owner' placeholder="Owner's Name"  />
    <br />
    <label>Deadline </label>
    <br />
    <input type='date' name='deadline' placeholder='MM-DD-YYYY' />
    <br />
    <label>Description</label>
    <br />
    <textarea  name='description' rows="2" />
    <br />
    <label>Tag(s)</label>
    <br />
    {tagFields.map(tag => { 
        return <>
        <br />
        <input className="tag" type='text' name='deadline' placeholder='New Tag' defaultValue={tag} />
    
        </>
        })}
        <br />
        <p onClick={addTag}>+ New Tag</p>
        <br />

    <input type="submit" value={props.value} />
</Form>
}

export default New;