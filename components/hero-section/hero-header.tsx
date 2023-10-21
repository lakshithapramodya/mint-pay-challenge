import Image from "next/image";

const HeroHeader = () => {
  return (
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
  );
};

export default HeroHeader;
