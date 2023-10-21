interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <main className="mx-auto max-w-screen-2xl ">{children}</main>;
};

export default Container;
