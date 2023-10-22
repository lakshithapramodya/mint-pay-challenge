import { endorsementData } from "@/data/endorsement-data";

import EndorsementCard from "./endorsement-card";

const EndorsementSection = () => {
  return (
    <section className="px-4 pb-9 md:px-[47px] xl:px-24">
      <div className="grid md:grid-cols-2 md:gap-x-8 xl:grid-cols-3 [&>*:nth-child(2n+1)]:hidden xl:[&>*:nth-child(2n+1)]:block md:[&>*:nth-child(3)]:block">
        {endorsementData.map((item) => (
          <EndorsementCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default EndorsementSection;
