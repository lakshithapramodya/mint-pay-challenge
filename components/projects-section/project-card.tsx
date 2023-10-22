import Image from "next/image";
import EnrolledUsers from "./enrolled-users";

interface ProjectCardProps {
  data: {
    id: number;
    title: string;
    description: string;
    image: string;
    categories: string[];
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <div className="mx-auto max-w-fit cursor-pointer rounded-[32px] border-2 border-dashed border-neutral-200 p-3 transition duration-500 ease-in-out hover:scale-105 md:p-4">
      <div className="relative w-fit">
        <Image
          className="h-[245px] shrink-0 rounded-2xl object-cover"
          src={data.image}
          alt={data.title}
          width={400}
          height={400}
          priority
        />
        <div className="absolute right-2 top-2 flex items-center justify-center space-x-[10px]">
          {data.categories.map((category, i) => (
            <div key={i} className="h-8 w-8 rounded-lg bg-white p-[6px]">
              <Image
                className="shrink-0 object-contain"
                src={`/images/projects/${category}-icon.svg`}
                alt={category}
                width={100}
                height={100}
                priority
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-1 px-2 pb-2 pt-4">
          <h2 className="text-primaryText text-lg font-medium">{data.title}</h2>
          <p className="text-primaryText text-sm">{data.description}</p>
        </div>

        <EnrolledUsers />
      </div>
    </div>
  );
};

export default ProjectCard;
