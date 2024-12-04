import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveButton(){
    return(
        <button className="text-red-700">
            <HiOutlineTrash size={24}/>
        </button>
    )
}