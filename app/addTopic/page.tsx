export default function addTopic() {
    return(
         <form className="flex flex-col gap-3">
            <input type="text" placeholder="Topic Title" className="border rounded-md border-slate-500 px-8 py-2" />
            <input type="text" placeholder="Topic Description" className="border rounded-md border-slate-500 px-8 py-2" />

            <button className="bg-green-600 font-bold rounded-md text-white py-3 px-6 w-fit">
                Submit Topic
            </button>
         </form>
    )
}