import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface SocialNavProps {
  data: {
    id: number;
    title: string;
    path: string;
    icon: string;
  }[];
  type: "mobile" | "tablet" | "desktop";
}

const SocialNav: React.FC<SocialNavProps> = ({ data, type }) => {
  return (
    <div
      className={cn(
        "z-10 h-fit w-fit items-center justify-center",
        type === "mobile"
          ? "flex space-x-4 md:hidden md:space-x-0"
          : type === "tablet"
          ? "hidden md:flex md:flex-col md:space-y-6 xl:hidden"
          : type === "desktop" && "hidden space-x-6 space-y-0 xl:flex",
      )}
    >
      {data.map((item) => (
        <Link href={item.path} key={item.id}>
          <Image
            className="w-6 object-contain"
            src={item.icon}
            alt={item.title}
            width="100"
            height="100"
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialNav;
