"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface EditTopicFormProps {
  id: string;
  title: string;
  description: string;
}

export default function EditTopicForm(props: EditTopicFormProps) {
  const { title, id, description } = props;
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = async (e:any) =>{
    e.prevenrDefault()

    try{
        const res= await fetch(`httpL//localhost/3001/api/topics/${id}`,{
            method:"PUT",
            headers:{
                "Contetnt-tye":"application/json",
            },
            body:JSON.stringify({newTitle,newDescription})
        })

        if(!res.ok){
            throw new Error("Failed to update topic")
        }

        router.push("/")
    }catch(err){
        console.log(err)
    }
  }

  return (
    <form className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        type="text"
        placeholder="Topic Title"
        className="border rounded-md border-slate-500 px-8 py-2"
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        type="text"
        placeholder="Topic Description"
        className="border rounded-md border-slate-500 px-8 py-2"
      />

      <button onClick={handleSubmit} className="bg-green-600 font-bold rounded-md text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
}
