import EditTopicForm from "@/components/EditTopicForm";

export default function EditTopic ({params}:any){

    const{id} = params;
    console.log("id:",id);
    return(
        <EditTopicForm />
    )
}