import React from "react";

const BottomSection = () => {
  return (
    <section className="px-4 md:px-[47px] xl:px-24">
      <div className="flex h-[350px] shrink-0 flex-col items-center justify-center gap-8 py-8 md:h-auto">
        <p className="text-center text-2xl font-light text-black">
          So, what are you waiting for?
        </p>
        <button className="bg-primary flex items-center rounded-[23px] px-6 py-2 text-sm text-white">
          Let’s start
        </button>
      </div>
    </section>
  );
};

export default BottomSection;
