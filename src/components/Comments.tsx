import Image from "next/image";

const Comments = () => {
  return (
    <div>
      {/* Write */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/13674457/pexels-photo-13674457.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            name="comment"
           
            placeholder="Write a comment..."
            className="bg-transparent outline-none"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* Comments */}
      <div className="">
        {/* Comment */}
        <div className="flex gap-4 justify-between mt-6">
          {/* Avatar */}
          <Image
            src="https://images.pexels.com/photos/13674457/pexels-photo-13674457.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Umut Emre</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              fugiat explicabo consectetur adipisci ea. Explicabo ex repellat
              animi. Nobis ducimus quos voluptatem, numquam cum optio
              exercitationem corporis aliquid. Quia, expedita.
            </p>
            <div className="flex gap-8 items-center text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt=""
                  width={12}
                  height={12}
                  className="cursor-pointer w-4 h-4"
                />
                <span className="">|</span>
                <span className="text-gray-500">123 Likes</span>
              </div>
              <div className=""> Reply </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
