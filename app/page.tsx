import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div >
      <div className="p-4 m-2 rounded-md border-b leading-8">
      <div className="flex gap-3">
        <Image src="/assets/oreo_latte.jpg"
        width={250}
        height={250}
        alt="menu"
        />
      <div >
        <h2 className="font-bold">Oreo Latte</h2>
        <p>A rich and creamy latte blended with crushed Oreo cookies, smooth espresso, and velvety milk. Topped with whipped cream and Oreo crumble, this indulgent drink delivers the perfect balance of coffee bitterness and chocolatey cookie sweetness—comforting, refreshing, and irresistibly delicious.</p>
        <p className="font-bold ">AED 32</p>
      </div>
       </div>
       <div className=" flex gap-4 mt-2 justify-end">
        <Link className="bg-slate-100 px-4 py-2 rounded-md uppercase tracking-wide text-sm font-bold" href={"/edit"}>Edit</Link>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md uppercase tracking-wide text-sm font-bold">
          Delete
        </button>
       </div>

      </div>
      
     
     
    </div>
  );
}
