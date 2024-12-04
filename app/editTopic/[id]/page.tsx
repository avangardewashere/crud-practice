import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id: number) => {
  try {
    const res = await fetch(`https://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topi");
    }

    const data = await res.json();
    return data;

  } catch (e) {
    console.log(e);
  }
};

export default async function EditTopic({ params }: any) {
  const { id } = params;
  console.log("id:", id);

  const { topic } = await getTopicById(id);
  const { title, description } = topic;
  console.log("id :", id);
  return <EditTopicForm id={id} title={title} description={description} />;
}
