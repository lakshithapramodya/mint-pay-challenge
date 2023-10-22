import Image from "next/image";

import { endorsementData } from "@/data/endorsement-data";

const EndorsementSection = () => {
  return (
    <section className="px-4 pb-9 md:px-[47px] xl:px-24">
      <div className="grid md:grid-cols-2 md:gap-x-8 xl:grid-cols-3 [&>*:nth-child(2n+1)]:hidden xl:[&>*:nth-child(2n+1)]:block md:[&>*:nth-child(3)]:block">
        {endorsementData.map((item) => (
          <div key={item.id} className="space-y-8 md:space-y-9">
            {item.endorsements.map((data) => (
              <div
                key={data.id}
                className="relative m-auto max-w-full space-y-6 rounded-[23px] border border-solid border-neutral-200 p-6"
              >
                {data.id == 2 && (
                  <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-white to-transparent " />
                )}
                <div className="flex items-center space-x-4">
                  <Image
                    className="h-14 w-14 shrink-0 object-contain"
                    src={data.image}
                    alt={data.name}
                    width="100"
                    height="100"
                  />
                  <div className="space-y-[2px]">
                    <h4 className="text-primaryText self-stretch text-base leading-[150%]">
                      {data.name}
                    </h4>
                    <span className="text-primary line-clamp-1 h-6 self-stretch text-sm leading-[150%]">
                      {item.position}
                    </span>
                  </div>
                </div>
                <p className="text-primaryText self-stretch text-sm leading-[160%]">
                  {data.endorse}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EndorsementSection;
