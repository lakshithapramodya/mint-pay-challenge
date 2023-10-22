import Image from "next/image";
import { Inter } from "next/font/google";

import { personalData } from "@/data/personal-data";
import { cn } from "@/lib/utils";

import BackgroundCircles from "@/components/common/background-circles";

const inter = Inter({ subsets: ["latin"] });

const AboutSection = () => {
  return (
    <section className="overflow-x-clip px-4 pb-24 pt-9 md:px-[47px] xl:px-24">
      <BackgroundCircles className="ml-[calc(100%-56px)] mt-20 md:ml-[calc(100%+100px)] md:mt-[550px] xl:-ml-[calc(100%+200px)] xl:mt-[400px]" />

      <div className="flex flex-col items-start space-y-8 md:space-y-12 xl:flex-row xl:justify-between xl:space-y-0">
        <div className="relative flex w-full items-center justify-between">
          <h2 className="text-primaryText text-[33.6px] leading-[120%] md:text-7xl md:leading-[102%]">
            It’s me
            <br />
            {personalData.name}
          </h2>
          <Image
            className="h-14 w-14 rounded-full object-contain md:absolute md:left-[252px] md:top-[17px]"
            src="/images/user-image.png"
            alt={personalData.name}
            width="100"
            height="100"
          />
        </div>

        <div
          className={cn(
            "text-primaryText max-w-[343px] self-stretch leading-[160%] md:max-w-[526px] md:text-xl",
            inter.className,
          )}
          dangerouslySetInnerHTML={{ __html: personalData.description }}
        />
      </div>
    </section>
  );
};

export default AboutSection;
