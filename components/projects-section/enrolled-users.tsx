import Image from "next/image";

const EnrolledUsers = () => {
  return (
    <div className="flex w-fit items-center justify-center -space-x-4">
      <div className="hidden w-fit items-center justify-center -space-x-4 md:flex">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <Image
              key={i}
              className="border-1 h-9 w-9 shrink-0 rounded-full border-white bg-white object-contain"
              src={`/images/projects/user-${i + 1}.svg`}
              alt={`user-${i + 1}`}
              width={100}
              height={100}
            />
          ))}
      </div>
      <div className="bg-primaryText flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-white text-xs text-white">
        <span>+99</span>
      </div>
    </div>
  );
};

export default EnrolledUsers;
