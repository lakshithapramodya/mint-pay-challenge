import Image from "next/image";

import { mainNavData, socialNavData } from "@/data/nav-data";

import MainNav from "./main-nav";
import SocialNav from "./social-nav";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-4 md:px-[47px] xl:px-24">
      <div className="flex items-center justify-center space-x-6">
        <div className="flex w-fit items-center justify-center space-x-2">
          <Image
            className="w-6 rounded-full object-contain md:w-10"
            src="/images/user-image.png"
            alt="user image"
            width="100"
            height="100"
            loading="lazy"
          />
          <span className="text-primaryText font-semibold">It’s me</span>
        </div>

        <MainNav data={mainNavData} />
      </div>

      <div className="flex w-fit items-center justify-center space-x-5 xl:space-x-6">
        <SocialNav data={socialNavData} type="desktop" />

        <button className="border-primary text-primaryText hover:bg-primary flex w-[145px] items-start rounded-[23px] border border-solid px-6 py-2 text-sm transition duration-500 ease-in-out hover:scale-[0.97] hover:text-white">
          Download CV
        </button>

        <Image
          className="w-6 cursor-pointer object-contain md:hidden"
          src="/images/icons/menu-icon.svg"
          alt="menu icon"
          width="100"
          height="100"
        />
      </div>
    </div>
  );
};

export default Navbar;
