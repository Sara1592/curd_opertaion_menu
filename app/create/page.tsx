export default function CreatePage(){
    return(
        <div>
            <h2 className="text-2xl font-bold my-8">Add Menu Item</h2>
            <form className="flex gap-4 flex-col">
                <input type="text" name="menuname" placeholder="Menu Name"
                className="py-1 px-4 border rounder-md"/>
                <textarea name="description" rows={4} placeholder="description"
                 className="py-1 px-4 border rounder-md resize-none"
                >
                    
                </textarea>
                <input type="number" 
                name="price"
                placeholder="Price"
                className="py-1 px-4 border rounder-md"
                />
                <input
                type="file"
                name="image"
                placeholder="Image"
                className="py-1 px-4 border rounder-md"
                />
                <button className="bg-black text-white rounded-md font-bold px-4 py-1 mt-3 uppercase cursor-pointer">Add Menu</button>
            </form>
        </div>
    )
}