import Link from "next/link";

import { mainNavData } from "@/data/nav-data";

import Logo from "./logo";

const SidebarContent = () => {
  return (
    <div className="mt-[46px]">
      <Logo className="mb-[17.86px] py-[8.55px]" />

      <nav className="flex flex-col space-y-[8.55px]">
        {mainNavData.map((item) => (
          <Link
            href={item.path}
            key={item.id}
            className="text-primaryText py-[12.82px] text-[14.955px]"
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <button className="bg-primary mt-[66.1px] inline-flex items-start rounded-[24.55px] px-[25.65px] py-[8.55px] text-white">
        Download CV
      </button>
    </div>
  );
};

export default SidebarContent;
