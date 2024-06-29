import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({ userId }: { userId?: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span>User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      {/* Bottom */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <Image
            src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg"
            width={1200}
            height={800}
            className="rounded-full w-16 h-16 object-cover"
            alt="Profile Photo"
          />
          <span className="text-xl text-black">Umut Emre</span>
          <span className="text-sm">@umutemre</span>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sequi
          sit ipsum facilis nihil expedita totam qui cum.
        </p>

        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="location" width={16} height={16} />
          <span>
            Living in <b>Istanbul</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="location" width={16} height={16} />
          <span>
            Graduated from <b>TU WIEN - Computer Science</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="location" width={16} height={16} />
          <span>
            Works at <b>Infinitum Digital Agency</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="Link" width={16} height={16} />
            <Link
              href="https://infinitum.com.tr"
              target="_blank"
              className="text-blue-500"
            >
              infinitum.com.tr
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="Link" width={16} height={16} />
            <span>Joined at June 2024</span>
          </div>
        </div>
        <button className="bg-blue-500 p-2 text-xs rounded-md text-white">
          Following
        </button>
        <span className="text-red-400 self-end text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
};
export default UserInfoCard;
