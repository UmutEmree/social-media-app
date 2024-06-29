import Image from "next/image";

const AddPost = () => {
  return (
    <div className="p-4 shadow-md bg-white rounded-lg flex gap-4 justify-between text-sm">
      {/* Avatar */}
      <Image
        src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg"
        width={48}
        height={48}
        className="rounded-full w-12 h-12 object-cover"
        alt="Avatar"
      />
      <div className=""></div>
      {/* Post */}
      <div className="flex-1">
        {/* Text Input */}
        <div className="flex gap-4">
          <textarea
          name="desc"
          id="desc"
            placeholder="What do you think?"
            className="flex-1 bg-slate-100 rounded-lg p-2"
          ></textarea>
          <Image
            src="/emoji.png"
            width={48}
            height={48}
            className=" w-5 h-5 self-end cursor-pointer"
            alt="Avatar"
          />
        </div>
        {/* Post button */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="" width={20} height={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
