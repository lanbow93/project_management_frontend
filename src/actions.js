import { redirect } from "react-router-dom";

export async function CreateAction({ request }) {
  // get the form data
  const formData = await request.formData();

  // construct new project
  const newProject = {
    title: formData.get("title"),
    owner: formData.get("owner"),
    deadline: formData.get("deadline"),
    description: formData.get("description"),
    tags: JSON.stringify(formData.get("tags")),
    content: JSON.stringify(formData.get("content"))
  };
  // request to create route in backend
  await fetch("https://project-management-backend-django.onrender.com/project/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProject),
  });

  // redirect back to the index page
  return redirect("/");
}

export async function UpdateAction({ request, params }) {
    // get the form data
    const formData = await request.formData();
  
    // construct new project
    const newProject = {
      title: formData.get("title"),
      owner: formData.get("owner"),
      deadline: formData.get("deadline"),
      description: formData.get("description"),
      tags: JSON.stringify(formData.get("tags")),
      content: JSON.stringify(formData.get("content"))
    };

    // request to update route in backend
    await fetch("https://project-management-backend-django.onrender.com/project/" + params.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProject),
    });
  
    // redirect back to the index page
    return redirect("/");
  }

  export async function DeleteAction({params}){
    //get the id
    const id = params.id

    // send request to delete
    await fetch("https://project-management-backend-django.onrender.com/project/" + id + "/", {
        method: "delete"
    })

    // redirect
    return redirect("/")
}