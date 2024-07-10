import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src="https://images.pexels.com/photos/26926216/pexels-photo-26926216/free-photo-of-bahce-yaprak-agac-cicek.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
          fill
          className="rounded-md"
        />
        <Image
          src="https://images.pexels.com/photos/25568965/pexels-photo-25568965/free-photo-of-ahsap-tahta-moda-insanlar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width={48}
          height={48}
          alt=""
          className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="h-20 flex flex-col items-center gap-2">
        <span className="font-semibold">Umut Emre</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="https://images.pexels.com/photos/25568965/pexels-photo-25568965/free-photo-of-ahsap-tahta-moda-insanlar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width={12}
              height={12}
              alt=""
              className="rounded-full objcet-cover w-6 h-6"
            />
            <Image
              src="https://images.pexels.com/photos/25568965/pexels-photo-25568965/free-photo-of-ahsap-tahta-moda-insanlar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width={12}
              height={12}
              alt=""
              className="rounded-full objcet-cover w-6 h-6"
            />
            <Image
              src="https://images.pexels.com/photos/25568965/pexels-photo-25568965/free-photo-of-ahsap-tahta-moda-insanlar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width={12}
              height={12}
              alt=""
              className="rounded-full objcet-cover w-6 h-6"
            />
          </div>
          <span className="text-xs text-gray-500">500 Followers</span>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-md text-xs">My Profile</button>
      </div>
    </div>
  );
};

export default ProfileCard;
