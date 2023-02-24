import { Form } from "react-router-dom";
import { useState } from "react";
function New(props) {
    const [tagFields, setTagFields] = useState([""])

    const addTag = () => {
        let data = [...tagFields, ""];
        setTagFields(data);
    }
    const [formInfo, setFormInfo] = useState ({
        title: "",
        owner: "",
        deadline: "",
        description: "",
        tags: []
    })

    function updateTags(event, index) {
        let tagArray = [...tagFields]
        tagArray[index] = event.target.value
        setTagFields(tagArray);
    }



    return <Form action='/create' method='post' className='postFormField'>
    <h2>New Project Form</h2>
    <label className="bold">Title/Name: </label>
    <br />
    <input type='input' name='title' placeholder='Project Name/Title' value={formInfo.title} onChange={event => setFormInfo({...formInfo, title: event.target.value})} />
    <br />
    <label><span className="bold">Product Owner</span>: </label>
    <br />
    <input type='input' name='owner' placeholder="Owner's Name" value={formInfo.owner} onChange={event => setFormInfo({...formInfo, owner: event.target.value})} />
    <br />
    <label>Deadline </label>
    <br />
    <input type='date' name='deadline' placeholder='MM-DD-YYYY' value={formInfo.deadline} onChange={event => setFormInfo({...formInfo, deadline: event.target.value})}/>
    <br />
    <label>Description</label>
    <br />
    <textarea  name='description' rows="2" value={formInfo.description} onChange={event => setFormInfo({...formInfo, description: event.target.value})} />
    <br />
    <label>Tag(s)</label>
    <br />
    {tagFields.map((tag, index) => { 
        return <>
        <br />
        <input className="tag" type='text' name='deadline' placeholder='New Tag' value={tag} onChange={event => updateTags(event, index)}/>
    
        </>
        })}
        <br />
        <p onClick={addTag}>+ New Tag</p>
        <br />

    <input type="submit"  />
</Form>
}

export default New;