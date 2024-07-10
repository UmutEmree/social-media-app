import Feed from "@/components/Feed";
import { LeftMenu } from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src="https://images.pexels.com/photos/26613618/pexels-photo-26613618/free-photo-of-kent-sehir-safak-gun-dogumu.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                alt=""
                fill
                className="rounded-lg object-cover"
              />
              <Image
                src="https://images.pexels.com/photos/25568965/pexels-photo-25568965/free-photo-of-ahsap-tahta-moda-insanlar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                width={128}
                height={128}
                alt=""
                className="rounded-full w-32 h-32 absolute left-0 right-0 m-auto -bottom-6 ring-4 ring-white z-10"
              />
            </div>
            <h1 className="text-2xl mt-20 mb-4 font-medium">
              Umut Emre
            </h1>

            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">123</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">432</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">390</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%] mt-6">
        <RightMenu userId="test" />
      </div>
    </div>
  );
};

export default ProfilePage;
