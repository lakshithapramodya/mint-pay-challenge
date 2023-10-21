import BackgroundCircles from "./background-circles";
import HeroDescription from "./hero-description";
import HeroHeader from "./hero-header";

const HeroSection = () => {
  return (
    <section className="overflow-hidden px-4 pb-14 pt-12 md:px-[47px] xl:px-24">
      <BackgroundCircles />

      <div className="flex flex-col space-y-8 xl:flex-row xl:items-center xl:justify-between">
        <HeroHeader />

        <HeroDescription />
      </div>
    </section>
  );
};

export default HeroSection;
