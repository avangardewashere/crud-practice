"use client"

import { useState } from "react";

interface EditTopicFormProps{
    id:string
    title:string
    description:string
}

export default function EditTopicForm(props:EditTopicFormProps){
    const {title,id, description} = props;

    const [newTitle,setNewTitle] = useState(title);
    const [newDescription,setNewDescription] = useState(description);

    return(
        <form className="flex flex-col gap-3">
        <input onChange={(e)=>setNewTitle(e.target.value)} value={title} type="text" placeholder="Topic Title" className="border rounded-md border-slate-500 px-8 py-2" />
        <input onChange={(e)=>setNewDescription(e.target.value)} value={description} type="text" placeholder="Topic Description" className="border rounded-md border-slate-500 px-8 py-2" />

        <button className="bg-green-600 font-bold rounded-md text-white py-3 px-6 w-fit">
           Update Topic
        </button>
     </form>
    )
}
