import { cn } from "@/lib/utils";

interface BackgroundCirclesProps {
  className?: string;
}

const BackgroundCircles: React.FC<BackgroundCirclesProps> = ({ className }) => {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className={cn(
          "background-circles h-[85px] w-[85px] xl:h-[133px] xl:w-[132px]",
          className,
        )}
      />

      <div
        className={cn(
          "background-circles h-[170px] w-[170px] opacity-50 xl:h-[262px] xl:w-[261px]",
          className,
        )}
      />

      <div
        className={cn(
          "background-circles h-[256px] w-[256px] opacity-40 xl:h-[395px] xl:w-[395px]",
          className,
        )}
      />

      <div
        className={cn(
          "background-circles h-[355px] w-[355px] opacity-30 xl:h-[545px] xl:w-[545px]",
          className,
        )}
      />

      <div
        className={cn(
          "background-circles  h-[445px] w-[445px] opacity-20 xl:h-[685px] xl:w-[685px]",
          className,
        )}
      />

      <div
        className={cn(
          "background-circles  h-[550px] w-[550px] opacity-10 xl:h-[855px] xl:w-[845px]",
          className,
        )}
      />
    </div>
  );
};

export default BackgroundCircles;
