import { socialNavData } from "@/data/nav-data";

import SocialNav from "@/components/common/social-nav";

const HeroDescription = () => {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="space-y-8">
        <p className="text-primaryText max-w-[343px] self-stretch leading-[160%] md:max-w-[374px]">
          with me <span className="text-primary">arif iskandar</span>, a
          software developer who loves to share how to code in many programing
          languages and multi platforms.
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
  );
};

export default HeroDescription;
