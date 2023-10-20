import Link from "next/link";

interface MainNavProps {
  data: {
    id: number;
    title: string;
    path: string;
  }[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  return (
    <nav className="hidden w-fit  items-center justify-center space-x-2 md:flex">
      {data.map((item) => {
        return (
          <Link
            href={item.path}
            key={item.id}
            className="text-primaryText px-3 text-sm"
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default MainNav;
