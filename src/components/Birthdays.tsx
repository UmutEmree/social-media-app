import Image from "next/image";
import Link from "next/link";

const Birthdays = () => {
  return (
    <div className="p-4 bg-white shadow-md text-sm rounded-lg flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span>Birthdays</span>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/24244035/pexels-photo-24244035/free-photo-of-doga-kayalar-nehir-irmak.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            width={16}
            height={16}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>Oyku Demir</span>
        </div>
        <div className="flex gap-3 justify-end">
          <button className="bg-blue-500 text-white text-xs rounded-md px-2 py-1">
            Celebrate
          </button>
        </div>
      </div>
      {/* UPCOMING */}
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4"> 
      <Image
            src="/gift.png"
            alt="photo"
            width={24}
            height={24}
          />
          <Link href="/" className="flex flex-col gap-1 text-xs">
          <span className="text-gray-700">Upcoming Birthdays</span>
          <span className="text-gray-500 font-semibold">See the other 16 have upcoming birthdays</span>
          </Link>
         </div>
    </div>
  );
};

export default Birthdays;
