import Image from "next/image";
import Link from "next/link";

interface SocialNavProps {
  data: {
    id: number;
    title: string;
    path: string;
    icon: string;
  }[];
}

const SocialNav: React.FC<SocialNavProps> = ({ data }) => {
  return (
    <div className="hidden w-fit items-center justify-center space-x-6 xl:flex">
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
