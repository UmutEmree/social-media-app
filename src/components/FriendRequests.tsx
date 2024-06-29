import Image from "next/image";
import Link from "next/link";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span>Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">
          See All
        </Link>
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
        
        <Image
          src="/accept.png"
          alt="photo"
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <Image
          src="/reject.png"
          alt="photo"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
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
        
        <Image
          src="/accept.png"
          alt="photo"
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <Image
          src="/reject.png"
          alt="photo"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
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
        
        <Image
          src="/accept.png"
          alt="photo"
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <Image
          src="/reject.png"
          alt="photo"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
      </div>
    </div>
  );
};

export default FriendRequests;
