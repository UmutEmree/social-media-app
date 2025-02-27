import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg"
            alt="profile"
            width={1200}
            height={800}
            className="rounded-full w-10 h-10 object-cover"
          />
          <span className="font-medium">Umut Emre</span>
        </div>
        <Image src="/more.png" alt="more" width={16} height={16} />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill
            className="object-cover rounded-md"
            alt="Photo"
            sizes="50"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque
          animi nam? Inventore, obcaecati hic nobis exercitationem id, dolorem
          voluptatibus itaque, suscipit totam dignissimos molestiae omnis rem
          placeat officiis! Dignissimos?
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8 ">
          <div className="flex items-center gap-4  bg-slate-100 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt="like"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt="like"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Comments</span>
            </span>
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt="like"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
