import { useLoaderData, Form } from "react-router-dom"
import { useState } from "react"

function Edit(props){
    const data = useLoaderData()
    // console.log(data)
    const [formInfo, setFormInfo] = useState ({
        title: data.title,
        owner: data.owner,
        deadline: data.deadline,
        description: data.description
    })
    const content = JSON.stringify(data.content)
    console.log(typeof content)
    const [tagFields, setTagFields] = useState(JSON.parse(data.tags).split(","))
    const addTag = () => {
        let data = [...tagFields, ""];
        setTagFields(data);
        
    }


    function updateTags(event, index) {
        let tagArray = [...tagFields]
        tagArray[index] = event.target.value
        setTagFields(tagArray);
    }



    return <Form action={`/updateproject/${data.id}`} method='post' className='postFormField'>
    <h2>Edit "{data.title}"</h2>
    <label><span className="tbBorder">Title/Name</span><span className="required"> *</span></label>
    <input type='input' name='title' placeholder='Project Name/Title' value={formInfo.title} onChange={event => setFormInfo({...formInfo, title: event.target.value})} />
    <label><span className="tbBorder">Product Owner</span><span className="required"> *</span></label>
    <input type='input' name='owner' placeholder="Owner's Name" value={formInfo.owner} onChange={event => setFormInfo({...formInfo, owner: event.target.value})} />
    <label><span className="tbBorder">Deadline</span><span className="required"> *</span></label>
    <input type='date' name='deadline' placeholder='MM-DD-YYYY' value={formInfo.deadline} onChange={event => setFormInfo({...formInfo, deadline: event.target.value})}/>
    <label><span className="tbBorder">Description</span><span className="required"> *</span></label>
    <textarea  name='description' rows="2" placeholder="One sentence describing project" value={formInfo.description} onChange={event => setFormInfo({...formInfo, description: event.target.value})} />
    <label><span className="tbBorder">Tag(s)</span>  <span className="gap">  *</span></label>

    {tagFields.map((tag, index) => { 
        return <div className="tagField" key={"key"+index}>
            <br />
            <input className="tag" type='text' name='tag' placeholder='New Tag' value={tag} onChange={event => updateTags(event, index)}/>
        </ div>
    })}
    <input type="hidden" value={tagFields} name="tags" />
    <input type="hidden" value={content} name="content" />
    <br />
    <p onClick={addTag}>+ New Tag</p>
    <br />

    <section className="buttons">
        {(formInfo.title && formInfo.owner && formInfo.deadline && formInfo.description) ? <input className="ready" type="submit" value="Update"  /> : <input className="disabled" type="submit" value="Create" disabled />}
        <a className="imitationButton" href={`/project/${data.id}`}>Cancel</a>
    </section>
    <h4>* required</h4>
</Form>
}

export default Edit