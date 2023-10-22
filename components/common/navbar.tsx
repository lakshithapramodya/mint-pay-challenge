import Image from "next/image";

import { mainNavData, socialNavData } from "@/data/nav-data";

import Logo from "./logo";
import MainNav from "./main-nav";
import Sidebar from "./sidebar";
import SocialNav from "./social-nav";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-4 md:px-[47px] xl:px-24">
      <div className="flex items-center justify-center space-x-6">
        <Logo />

        <MainNav data={mainNavData} />
      </div>

      <div className="flex w-fit items-center justify-center space-x-5 xl:space-x-6">
        <SocialNav data={socialNavData} type="desktop" />

        <button className="border-primary text-primaryText hover:bg-primary flex w-[145px] items-start rounded-[23px] border border-solid px-6 py-2 text-sm transition duration-500 ease-in-out hover:scale-[0.97] hover:text-white">
          Download CV
        </button>
        <Sidebar>
          <Image
            className="w-6 cursor-pointer object-contain md:hidden"
            src="/images/icons/menu-icon.svg"
            alt="menu icon"
            width="100"
            height="100"
          />
        </Sidebar>
      </div>
    </div>
  );
};

export default Navbar;
