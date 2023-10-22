import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex w-fit items-center justify-center space-x-2",
        className,
      )}
    >
      <Image
        className="w-6 rounded-full object-contain md:w-10"
        src="/images/user-image.png"
        alt="user image"
        width="100"
        height="100"
        loading="lazy"
      />
      <span className="text-primaryText font-semibold">It’s me</span>
    </div>
  );
};

export default Logo;
