import Link from "next/link";
import RemoveButton from "../fragments/removeButton";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (err) {
    console.log("Error loading topics: ", err);
  }
};

export default async function TopicList() {
  const { topics } = await getTopics();
 
    
  return (
    <>{topics?.map((item:any)=>(
        <div key={item?._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">{item.title ?? "Topic Title"}</h2>
          <div>{item.description ?? "Topic Description"}</div>
        </div>

        <div className="flex gap-2">
          <RemoveButton id={item._id} />
          <Link href={`/editTopic/${item._id}`}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>

    ))}
     
    </>
  );
}
