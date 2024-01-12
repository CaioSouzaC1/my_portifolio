interface ContainerProps {
  children: React.ReactNode;
  classNames?: string;
}

const Container = ({ children, classNames }: ContainerProps) => {
  return (
    <div className={`container mx-auto px-4 ${classNames}`}>{children}</div>
  );
};
export default Container;
