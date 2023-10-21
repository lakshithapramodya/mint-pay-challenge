import Image from "next/image";

import { socialNavData } from "@/data/nav-data";

import SocialNav from "@/components/common/social-nav";
import BackgroundCircles from "./background-circles";

const HeroSection = () => {
  return (
    <section className="overflow-hidden px-4 pb-14 pt-12 md:px-[47px] xl:px-24">
      <BackgroundCircles />

      <div className="flex flex-col space-y-8 xl:flex-row xl:items-center xl:justify-between">
        <div className="relative max-w-[240px] md:max-w-[520px]">
          <h1 className="text-primaryText flex flex-col text-[33.6px] font-light leading-[120%] md:text-7xl">
            <span>Let’s learn</span>
            <span>to code</span>
            <span>an application</span>
          </h1>
          <div className="absolute left-[125px] top-0 flex flex-col md:left-[285px] md:top-3 md:flex-col-reverse">
            <Image
              className="mb-[6px] ml-10 w-9 object-contain md:mb-0 md:ml-0 md:w-14"
              src="images/icons/subtasks-icon.svg"
              alt="subtasks icon"
              width="100"
              height="100"
            />
            <Image
              className="w-9 object-contain md:mb-[17px] md:ml-[68px] md:w-14"
              src="images/icons/book-icon.svg"
              alt="book icon"
              width="100"
              height="100"
            />
          </div>
        </div>

        <div className="md:flex md:items-center md:justify-between">
          <div className="space-y-8">
            <p className="text-primaryText max-w-[325px] self-stretch leading-[160%] md:max-w-[350px]">
              with me <span className="text-primary">arif iskandar</span>, a
              software developer who loves to share how to code in many
              programing languages and multi platforms.
            </p>

            <div className="flex w-fit items-center justify-center space-x-4">
              <button className="bg-primary z-10 flex cursor-pointer items-start rounded-[23px] px-6 py-2 text-sm text-white">
                Start learn
              </button>
              <SocialNav data={socialNavData} type="mobile" />
            </div>
          </div>

          <SocialNav data={socialNavData} type="tablet" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
