import { cn } from "@/lib/utils";
import Image from "next/image";

interface EndorsementCardProps {
  item: {
    id: number;
    position: string;
    endorsements: {
      id: number;
      name: string;
      image: string;
      endorse: string;
    }[];
  };
}

const EndorsementCard: React.FC<EndorsementCardProps> = ({ item }) => {
  return (
    <div className="space-y-8 md:space-y-9">
      {item.endorsements.map((data) => (
        <div
          key={data.id}
          className={cn(
            "relative m-auto max-w-full space-y-6 rounded-[23px] border border-solid border-neutral-200 p-6",
            data.id == 2 && "h-[236px]",
          )}
        >
          {data.id == 2 && (
            <div className="absolute left-0 top-0 h-[236px] w-full bg-gradient-to-t from-white to-transparent " />
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
              <p className="text-primaryText self-stretch text-base leading-[150%]">
                {data.name}
              </p>
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
  );
};

export default EndorsementCard;
