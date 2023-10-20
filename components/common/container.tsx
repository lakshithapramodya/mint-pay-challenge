interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-[47px] xl:px-24">
      {children}
    </div>
  );
};

export default Container;
