"use client";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

interface RbProps {
  id: number;
}

export default function RemoveButton({ id }: RbProps) {
    const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure");

    if (confirmed) {
      console.log("con", id);
     const res = await fetch(`http://localhost:3001/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if(res.ok){
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-700">
      <HiOutlineTrash size={24} />
    </button>
  );
}
