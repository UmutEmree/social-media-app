import Image from "next/image"

const Stories = () => {
  return (
    <div className="p-4 mt-6 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide ">
      <div className="flex gap-8 w-max">
       {/* Story 1 */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/5018974/pexels-photo-5018974.jpeg" width={60} height={60} className="rounded-full w-20 h-20" alt="Story 1" />
          <span className="text-xs text-center w-20">Your Story</span>
        </div>
        {/* Story 1 */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/5018974/pexels-photo-5018974.jpeg" width={60} height={60} className="rounded-full w-20 h-20" alt="Story 1" />
          <span className="text-xs text-center w-20">Your Story</span>
        </div>
        {/* Story 1 */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/5018974/pexels-photo-5018974.jpeg" width={60} height={60} className="rounded-full w-20 h-20" alt="Story 1" />
          <span className="text-xs text-center w-20">Your Story</span>
        </div>
        {/* Story 1 */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/5018974/pexels-photo-5018974.jpeg" width={60} height={60} className="rounded-full w-20 h-20" alt="Story 1" />
          <span className="text-xs text-center w-20">Your Story</span>
        </div>
        {/* Story 1 */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/5018974/pexels-photo-5018974.jpeg" width={60} height={60} className="rounded-full w-20 h-20" alt="Story 1" />
          <span className="text-xs text-center w-20">Your Story</span>
        </div>
        {/* Story 1 */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://images.pexels.com/photos/5018974/pexels-photo-5018974.jpeg" width={60} height={60} className="rounded-full w-20 h-20" alt="Story 1" />
          <span className="text-xs text-center w-20">Your Story</span>
        </div>
      </div>
    </div>
  )
}

export default Stories